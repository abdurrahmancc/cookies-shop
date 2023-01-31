import React from "react";
import bg from "../../assets/bg-img/faq.png";

const FaqQuestionForm = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-no-repeat bg-cover py-[46px]"}
    >
      <h4 className="text-[24px] text-center text-[#FFFFFF] leading-[30px] font-[700] pb-[46px]">
        Didn’t find your answer? Submit your question
      </h4>
      <form className="max-w-[960px] mx-auto">
        <div className="form-control w-full">
          <label className="label pl-0 pt-0">
            <span className="text-[16px] text-[#FFFFFF] leading-[22px]">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="h-[56px] text-black placeholder:text-[rgba(0,0,0,0.8)] bg-[#FFFFFF] text-[16px] focus:border-primary rounded-none focus:outline-none input px-5"
          />
        </div>
        <div className="form-control mt-[30px] w-full">
          <label className="label pl-0 pt-0">
            <span className="text-[16px] text-[#FFFFFF] leading-[22px]">Your Email </span>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="h-[56px] text-black placeholder:text-[rgba(0,0,0,0.8)] bg-[#FFFFFF] text-[16px] focus:border-primary rounded-none focus:outline-none input px-5"
          />
        </div>
        <div className="form-control mt-[30px] w-full">
          <label className="label pl-0 pt-0">
            <span className="text-[16px] text-[#FFFFFF] leading-[22px]">Your Comment </span>
          </label>
          <textarea
            placeholder="Enter your comment"
            className="h-[131px] pt-5 text-black placeholder:text-[rgba(0,0,0,0.8)] bg-[#FFFFFF] text-[16px] focus:border-primary rounded-none focus:outline-none input px-5"
          />
        </div>
        <div className="mt-10">
          <button
            style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0,0.3))" }}
            className="text-white hover:bg-secondary transition-all duration-100 font-[500] ease-linear text-[20px] leading-[32px] px-[48px] py-[12px] bg-primary "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaqQuestionForm;
