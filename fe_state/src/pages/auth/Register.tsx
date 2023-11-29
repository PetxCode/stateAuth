import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createAccount } from "../../api/authAPI";

const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    userName: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any) => {
    console.log(data);
    createAccount(data).then(() => {
      navigate("/verify");
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" border rounded-md w-[500px] min-h-[200px]">
        <div className="m-4 font-[400] mb-16">Register</div>
        <form className="m-3" onSubmit={handleSubmiteNow}>
          <div className="my-2">
            <input
              className="w-full h-[45px] rounded-sm border pl-2"
              placeholder="User Name"
              {...register("userName")}
            />
            {errors.userName?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.userName?.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              className="w-full h-[45px] rounded-sm border pl-2"
              placeholder="email"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              className="w-full h-[45px] rounded-sm border pl-2"
              placeholder="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              className="w-full h-[45px] rounded-sm border pl-2"
              placeholder="confirm password"
              {...register("password")}
            />
            {errors.confirm?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.confirm?.message}
              </div>
            )}
          </div>

          <button
            className="w-full bg-purple-700 mt-8 h-[49px] rounded-sm text-white"
            type="submit"
          >
            Register
          </button>
          <div className="w-full flex justify-center text-[12px] mt-8 ">
            Already have an Account,{" "}
            <Link to="/login">
              <span className="ml-1 font-bold">Login here</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
