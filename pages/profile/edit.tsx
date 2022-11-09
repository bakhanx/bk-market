import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
import Upload from "pages/products/upload";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formError?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<EditProfileForm>();

  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);

  const onChange = () => {
    if (errors.formError?.message) clearErrors("formError");
  };
  const onValid = async ({ email, phone, name, avatar }: EditProfileForm) => {
    console.log(avatar);
    if (loading) return;

    if (email === "" && phone === "" && name === "") {
      return setError("formError", {
        message: "Email or Phone number is required. You need to choose one.",
      });
    }

    if (avatar && avatar.length > 0 && user) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();

      const form = new FormData();

      form.append("file", avatar[0], String(user?.id));
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();
      console.log(id);

      editProfile({
        email,
        phone,
        name,
        avatarId: id,
      });
    } else {
      editProfile({
        email,
        phone,
        name,
      });
    }
  };

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formError", { message: data.error });
    }
  }, [data, setError]);
  const [avatarPreview, setAvatarPreview] = useState("");

  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  console.log(user);

  useEffect(() => {
    if (user?.email) {
      setValue("email", user.email);
    }
    if (user?.phone) {
      setValue("phone", user.phone);
    }
    if (user?.name) {
      setValue("name", user.name);
    }
    if (user?.avatar) {
      setAvatarPreview(
        `https://imagedelivery.net/214BxOnlVKSU2amZRZmdaQ/${user?.avatar}/avatar`
      );
    }
  }, [user, setValue]);

  // update complete & go to profile page
  useEffect(() => {
    if (data?.ok) {
      router.push("/profile");
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Edit Profile">
      <form
        onSubmit={handleSubmit(onValid)}
        onChange={onChange}
        className="py-10 px-4 space-y-3"
      >
        {/* Change Profile */}
        <div className="flex items-center space-x-3">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              className="w-14 h-14 rounded-full bg-slate-500"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-500" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm font-semibold focus:ring2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change Photo
            <input
              {...register("avatar")}
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        <Input
          register={register("name")}
          required={false}
          label="Name"
          name="name"
          type="text"
        />

        {/* Email */}
        <Input
          register={register("email")}
          required={false}
          label="Email address"
          name="email"
          type="email"
        />

        {/* Phone */}
        <Input
          register={register("phone")}
          required={false}
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        {errors.formError ? (
          <span className="my-2 text-red-500 font-semibold block text-center">
            {errors.formError.message}
          </span>
        ) : (
          ""
        )}
        {/* Update Btn */}

        <Button text={loading ? "Loading..." : "Update Profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
