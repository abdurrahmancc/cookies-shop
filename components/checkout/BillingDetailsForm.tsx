import React from "react";
import CheckOutCreateAccount from "./CheckOutCreateAccount";
import ShipDifferentAddress from "./ShipDifferentAddress";

const BillingDetailsForm = ({ register, errors }: any) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* First Name  */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">First Name</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("firstName", {
              required: { value: true, message: "First Name is require" },
            })}
          />
          {errors.firstName?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.firstName?.message}</span>
          )}
        </div>
        {/* last Name */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Last Name</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("lastName", {
              required: { value: true, message: "Last Name Name is require" },
            })}
          />
          {errors.lastName?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.lastName?.message}</span>
          )}
        </div>
      </div>
      {/* ============ Email Address and email address =========== */}
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Email Address  */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">
              Email Address
            </span>
          </label>
          <input
            id="emailAddress"
            type="text"
            placeholder="Enter email address"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("email", {
              required: { value: true, message: "Email address is require" },
            })}
          />
          {errors.emailAddress?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">
              {errors.emailAddress?.message}
            </span>
          )}
        </div>
        {/* Phone Number */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Phone Number</span>
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Enter phone number"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("lastName", {
              required: { value: true, message: "Phone Number is require" },
            })}
          />
          {errors.phoneNumber?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">
              {errors.phoneNumber?.message}
            </span>
          )}
        </div>
      </div>
      {/* ========== Country and compony ======== */}
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Country   */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Country</span>
          </label>
          <input
            id="country"
            type="text"
            placeholder="Your country"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("country", {
              required: { value: true, message: "country is require" },
            })}
          />
          {errors.country?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.country?.message}</span>
          )}
        </div>
        {/* compony */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Compony</span>
          </label>
          <input
            id="compony"
            type="text"
            placeholder="compony"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("compony", {
              required: { value: true, message: "compony is require" },
            })}
          />
          {errors.compony?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.compony?.message}</span>
          )}
        </div>
      </div>
      {/* =========== City and postal code ======== */}
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/*  city  */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">City</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="Enter city"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("city", {
              required: { value: true, message: "city is require" },
            })}
          />
          {errors.city?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.city?.message}</span>
          )}
        </div>
        {/* Postal Code */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Postal Code</span>
          </label>
          <input
            id="postalCode"
            type="text"
            placeholder="Enter postal code"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("postalCode", {
              required: { value: true, message: "postal code is require" },
            })}
          />
          {errors.postalCode?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">
              {errors.postalCode?.message}
            </span>
          )}
        </div>
      </div>
      {/* ============= Street Address and  ============ */}
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Street Address  */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">
              Street Address
            </span>
          </label>
          <input
            id="streetAddress"
            type="text"
            placeholder="Enter street address"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("streetAddress", {
              required: { value: true, message: "street address is require" },
            })}
          />
          {errors.streetAddress?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">
              {errors.streetAddress?.message}
            </span>
          )}
        </div>
        {/* last Name */}
        <div className="form-control pb-5 w-full">
          <label className="label pt-0">
            <span className="label-text text-[16px] text-primary leading-[22px]">Last Name</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            className="input rounded-none text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none  input-bordered"
            {...register("lastName", {
              required: { value: true, message: "Last Name Name is require" },
            })}
          />
          {errors.lastName?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.lastName?.message}</span>
          )}
        </div>
      </div>

      <CheckOutCreateAccount register={register} errors={errors} />
      <ShipDifferentAddress register={register} errors={errors} />
      {/* Order Notes */}
      <div className="form-control">
        <textarea
          id="orderNotes"
          className="textarea textarea-bordered rounded-none h-40  w-full text-[16px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] focus:border-primary text-black bg-[#F0F0F0] focus:outline-none "
          placeholder="Order Notes (Optional)"
          {...register("orderNotes")}
        />
      </div>
    </>
  );
};

export default BillingDetailsForm;
