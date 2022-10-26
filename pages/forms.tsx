import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors? : string;
}

export default function Forms() {
  const {
    register, // name, option("requried, length" with value & message)
    handleSubmit, 
    formState: { errors }, 
    watch, // onchange observe
    setValue, // set Value manually
    setError, // set Error manually
    reset, // Clear
    resetField, // that field clear
  } = useForm<LoginForm>({ mode: "onChange" });

  const onValid = (data: LoginForm) => {
    console.log("I'm valid");
    // reset();
    reset("username", "password")
    resetField("password");
    setError("username" ,{message : "Taken username."});
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log("Invalid : ", errors);
  };

  console.log("Errors : ", errors);

  console.log("Watch : ", watch("email"));



  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col space-y-2"
    >
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })} // value, onChange, ...etc
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}

      <input
        {...register("email", {
          required: "Email is required",
          min: 6,
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      <div className="text-red-500">{errors.email?.message}</div>
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
