import Image from "next/image";
import React from "react";
import TopProductCard from "./TopProductCard";

const TopGiftProducts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-4 max-w-[584px] w-full mx-auto bg-[#ffffff]">
        <h3 className="lg:text-[34px] text-2xl lg:leading-[44px] text-primary font-[candal]">
          Top Products
        </h3>
        <div className="lg:mt-8 mt-5">
          <div className="gird">
            <div className="grid gap-4 grid-cols-2">
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-[584px] w-full mx-auto bg-[#ffffff]">
        <h3 className="lg:text-[34px] text-2xl lg:leading-[44px] text-primary font-[candal]">
          Gift Products
        </h3>
        <div className="lg:mt-8 mt-5">
          <div className="gird">
            <div className="grid gap-4 grid-cols-2">
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGiftProducts;
