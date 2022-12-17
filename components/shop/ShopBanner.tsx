import Image from "next/image";
import React from "react";
import banner from "../../assets/banner/shop.png";

const ShopBanner = () => {
  return (
    <div className="w-full">
      <Image src={banner} className={"w-full h-auto"} alt="banner" />
    </div>
  );
};

export default ShopBanner;
