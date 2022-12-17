import Image from "next/image";
import React from "react";
import cookies from "../../../assets/product-img/our-cookies.png";
import cakes from "../../../assets/product-img/our-cakes.png";
import chocolates from "../../../assets/product-img/chocolates.png";

const ProductCategory = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[35px]">
      <div className="grid grid-rows-2 gap-[35px]">
        <div className="relative mx-auto md:h-full md:max-h-[535px]">
          <Image src={cookies} className="sm:max-w-[550px]" alt="cookies" />
          <div className="absolute sm:max-w-[550px] top-0 h-full w-full">
            <div className="flex items-center h-full">
              <div className="w-full bg-[rgba(100,48,1,0.5)]">
                <span className="text-[#FFFFFF] my-auto block py-2 text-center sm:text-[48px] sm:leading-[62px] text-[36px] leading-[52px] font-[Candal]">
                  Our Cookies
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full mx-auto max-h-[535px]">
          <Image src={cakes} className="sm:max-w-[550px]" alt="cakes" />
          <div className="absolute sm:max-w-[550px] top-0 h-full w-full">
            <div className="flex items-center h-full">
              <div className="w-full bg-[rgba(100,48,1,0.5)]">
                <span className="text-[#FFFFFF] my-auto block py-2 text-center sm:text-[48px] sm:leading-[62px] text-[36px] leading-[52px] font-[Candal]">
                  Our Cakes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[550px] lg:max-w-full w-full h-auto md:h-[1105px]">
        <Image src={chocolates} className="h-full" alt="chocolates" />
        <div className="absolute top-0 h-full w-full">
          <div className="flex items-center h-full">
            <div className="w-full bg-[rgba(100,48,1,0.5)]">
              <span className="text-[#FFFFFF] my-auto block py-2 text-center sm:text-[48px] sm:leading-[62px] text-[36px] leading-[52px] font-[Candal]">
                Our Chocolates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
