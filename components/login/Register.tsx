import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import bg from "../../assets/login/register-bg.png";

type FromData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="h-[748px] lg:max-w-[650px] md:max-w-[500px] sm:max-w-[450px] max-w-[350px] mx-auto w-full bg-white bg-cover bg-no-repeat"
    >
      <div className="text-end pr-3 pt-3">
        <label htmlFor="signUp" className="inline-block cursor-pointer">
          <IoCloseCircle className="text-primary w-[35px] h-[35px]" />
        </label>
      </div>
      <div className="px-10">
        <h2 className="text-[42px] text-center font-[700]  leading-[32px]  text-primary ">
          Sign Up
        </h2>
        <div className="mt-[46px]">
          <form onSubmit={onSubmit}>
            {" "}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] leading-5 text-primary">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value:
                      /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
              )}
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control mt-[22px]">
              <label className="label">
                <span className="label-text text-[16px] leading-5 text-primary">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                {...register("password", {
                  required: { value: true, message: "password is required" },
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                  },
                })}
              />
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="form-control mt-[22px]">
              <label className="label">
                <span className="label-text text-[16px] leading-5 text-primary">
                  Confirm Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Confirm Password"
                className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                {...register("confirmPassword", {
                  required: { value: true, message: "confirm password is required" },
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                  },
                })}
              />
              {errors.confirmPassword?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
              {errors.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-primary text-[30px] leading-8 text-white h-[60px] w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8">
          <p className="text-[25px] text-center leading-[30px] text-[rgba(0,0,0,0.7)]">
            Already Have An Account?{" "}
            <span className="text-[#944A07] custom_prev cursor-pointer font-[700]">Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
