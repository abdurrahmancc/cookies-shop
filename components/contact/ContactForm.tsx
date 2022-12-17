import React from "react";
import { GoStar } from "react-icons/go";

const ContactForm = () => {
  return (
    <>
      <div className="form-control w-full mt-[6px]">
        <label className="label">
          <span className="text-[16px] text-primary leading-[22px]">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="h-[56px] text-black placeholder:text-[rgba(0,0,0,0.5)] bg-[#F0F0F0] text-[16px] focus:border focus:border-primary rounded-none focus:outline-none input px-5"
        />
      </div>
      <div className="form-control w-full mt-[22px]">
        <label className="label">
          <span className="text-[16px] text-primary leading-[22px]">Your Email</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Email "
          className="h-[56px] text-black placeholder:text-[rgba(0,0,0,0.5)] bg-[#F0F0F0] text-[16px] focus:border focus:border-primary rounded-none focus:outline-none input px-5"
        />
      </div>
      <div className="form-control w-full mt-[22px]">
        <label className="label">
          <span className="text-[16px] text-primary leading-[22px]">Your Comment </span>
        </label>
        <textarea
          placeholder="Enter your Comment"
          className="h-[131px] text-black placeholder:text-[rgba(0,0,0,0.5)] bg-[#F0F0F0] text-[16px] focus:border focus:border-primary p-5 rounded-none focus:outline-none textarea"
        />
      </div>
      <div className="mt-10 pb-[12px]">
        <button
          style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0,0.3))" }}
          className="text-white hover:bg-secondary transition-all duration-100 ease-linear text-[20px] leading-[32px] px-[48px] py-[12px] bg-primary "
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactForm;
