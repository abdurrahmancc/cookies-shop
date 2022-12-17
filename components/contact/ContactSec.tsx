import React from "react";
import ContactForm from "./ContactForm";

const ContactSec = () => {
  const Button = {
    background: "#AC003B",
    color: "#fff",
    borderColor: "#AC003B",
    "&:hover, &:focus": {
      background: "#707070",
      borderColor: "#707070",
    },
  };
  return (
    <div>
      <h2 className="text-[34px] pb-8 leading-9 text-center font-[700] text-[#643001]">
        Write Us A Letter
      </h2>
      <p className="text-[20px] mx-auto max-w-[974px] text-center leading-[30px] text-[rgba(0,0,0,0.7)]">
        These cookies, cakes, and chocolates are baked or cooked snack or dessert that is typically
        small, flat, and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or
        butter.
      </p>
      <div className="mt-16 flex gap-8">
        <div className="grid grid-cols-2 max-w-[679px] w-full gap-[21px]">
          <div
            className={`p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow`}
          >
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
          <div className="p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow">
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
          <div className="p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow">
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
          <div className="p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow">
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
          <div className="p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow">
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
          <div className="p-[26px] duration-150 transition-all ease-linear  hover:border border-primary bg-[#F0F0F0] cityBoxShadow">
            <h3 className="text-[24px] pb-4 leading-[30px] text-primary ">Dhaka</h3>
            <p className="text-[rgba(0,0,0,0.7)] pb-[10px] text-lg leading-[22px]">
              Bashundhora R/A, Road No.2
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg leading-[22px]">
              +880176453723, +880156453723{" "}
            </p>
          </div>
        </div>
        <div className="px-[32px] w-full max-w-[489px] py-8 border border-[rgba(0,0,0,0.2)]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
