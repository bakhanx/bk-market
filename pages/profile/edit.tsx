import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="py-10 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm font-semibold focus:ring2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        {/* Email */}
        <Input required label="Email address" name="email" type="email" />

        {/* Phone */}
        <Input
          required
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        {/* Update Btn */}
        <Button text="Update Profile" />
      </form>
    </Layout>
  );
};

export default EditProfile;
