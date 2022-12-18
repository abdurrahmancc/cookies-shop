import React, { useState } from "react";
import topBg from "../../assets/top-header-bg.png";
import LoginSlider from "../login/LoginSlider";
import Register from "../login/Register";

const TopHeader1 = () => {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  return (
    <div
      style={{ backgroundImage: `url(${topBg.src})` }}
      className="w-full bg-center	 h-10 bg-auto xl:bg-cover bg-no-repeat"
    >
      <div className="flex gap-4 justify-center items-center h-full">
        <span className="text-xs text-primary">
          Black Friday offers are still running. Want to get offers?
        </span>

        <button>
          <label
            htmlFor="signUp"
            className="text-[#ffffff] cursor-pointer bg-secondary rounded-[46px] text-xs leading-[13px] px-4 py-1 inline-block"
          >
            Sign Up
          </label>
        </button>
        <LoginSlider />
      </div>
    </div>
  );
};

export default TopHeader1;
