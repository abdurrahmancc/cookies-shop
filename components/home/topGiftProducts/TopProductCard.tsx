import React from "react";
import cake from "../../../assets/product-img/cake.png";
import Image from "next/image";
const TopProductCard = () => {
  return (
    <div className="max-w-[288px] w-full h-[227px] flex bg-[rgba(148,74,7,0.1)] justify-center items-center">
      <Image src={cake} alt="top product" />
    </div>
  );
};

export default TopProductCard;
