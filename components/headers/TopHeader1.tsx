import React from "react";
import topBg from "../../assets/top-header-bg.png";

const TopHeader1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${topBg.src})` }}
      className="w-full bg-center	 h-10 bg-auto xl:bg-cover bg-no-repeat"
    >
      <div className="flex gap-4 justify-center items-center h-full">
        <span className="text-xs text-primary">
          Black Friday offers are still running. Want to get offers?
        </span>
        <button className="text-[#ffffff] bg-secondary rounded-[46px] px-4 py-1 text-xs leading-[13px]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default TopHeader1;
