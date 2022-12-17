import React from "react";
import bg from "../../assets/bg-img/footer-bg.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" bg-primary  bg-no-repeat bg-right z-50 bg-contain"
    >
      <div className="footer max-w-[1200px] lg:mx-auto px-5 pt-[46px] pb-[52px] text-base-content">
        <div>
          <span className="mb-3 font-semibold text-[#ffffff] text-lg">About Cookies Bakery</span>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover mb-2">
            Cookies Bakery.com
          </a>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover mb-2">
            Cookies Bakery Blog
          </a>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover">Contact Us</a>
        </div>
        <div>
          <span className="mb-3 font-semibold text-[#ffffff] text-lg">
            Source Of Cookies Bakery
          </span>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover mb-2">
            All Categories
          </a>
        </div>
        <div>
          <span className="mb-3 font-semibold text-[#ffffff] text-lg">Cookies Bakery Services</span>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover mb-2">
            Help Center
          </a>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover mb-2">
            Privacy Policy
          </a>
          <a className="link text-[#ffffff] leading-[11px] text-[16px] link-hover">
            Terms & Conditions
          </a>
        </div>
        <div>
          <span className="mb-3 font-semibold text-[#ffffff] text-lg">Follow Us</span>
          <div className="flex items-center gap-2">
            <BsFacebook className="w-[18px] h-[18px] text-[#ffffff]" />
            <RiInstagramFill className="w-[20px] h-[20px] text-[#ffffff]" />
            <BsTwitter className="w-[20px] h-[20px] text-[#ffffff]" />
            <BsYoutube className="w-[20px] h-[20px] text-[#ffffff]" />
          </div>
        </div>
      </div>
      <div className="border-t border-[#ffffff]">
        <p className="text-[14px] leading-[12px] text-white text-center py-[22px]">
          {" "}
          &copy; 2021-2022, Cookies shop.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
