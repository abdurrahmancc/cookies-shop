import React, { useState } from "react";
import Collapsible from "react-collapsible";

const CheckOutCreateAccount = ({ register, errors }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <>
      <div className="form-control pb-5">
        <label className="label justify-start gap-2 cursor-pointer">
          <input
            onClick={() => setIsChecked(!isChecked)}
            type="checkbox"
            className="checkbox h-5 w-5 rounded-none checkbox-xs text-white checkbox-primary"
          />
          <span className="label-text text-[rgba(0,0,0,0.7)] text-[15px] leading-5 font-[300]">
            Create an account?
          </span>
        </label>
      </div>

      <Collapsible
        trigger={""}
        id="bottom-header-all-Categories"
        className="w-full"
        open={isChecked}
      >
        {isChecked && (
          <div className="grid m-1 lg:grid-cols-2 lg:gap-5">
            {/* Create account password * */}
            <div className="form-control pb-5 w-full">
              <input
                id="createAccountPassword"
                type="text"
                placeholder="Create account password *"
                className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
                {...register("state", {
                  required: { value: true, message: "Password is Require" },
                })}
              />
              {errors?.state?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors?.state?.message}
                </span>
              )}
            </div>
            {/* Confirm Password **/}
            <div className="form-control pb-5 w-full">
              <input
                id="confirmPassword"
                type="text"
                placeholder="Confirm Password *"
                className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
                {...register("confirmPassword", {
                  required: { value: true, message: "Confirm Password is Require" },
                })}
              />
              {errors.postcode?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.postcode?.message}
                </span>
              )}
            </div>
          </div>
        )}
      </Collapsible>
    </>
  );
};

export default CheckOutCreateAccount;
