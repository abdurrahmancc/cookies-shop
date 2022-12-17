import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../../types/types";
import { GoStar } from "react-icons/go";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

interface ProductModel {
  product: Product;
}

const BottomProductDetails = ({ product }: ProductModel) => {
  const [isActive, setIsActive] = useState<string>("description");

  return (
    <>
      <div>
        <ul className="border-b gap-[10px] flex border-[rgba(0,0,0,0.25)]">
          <li>
            <button
              onClick={() => setIsActive("description")}
              className={`text-[24px] px-10 rounded-t-[4px] py-[12px] leading-10  ${
                isActive === "description" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              Description
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsActive("review")}
              className={`text-[24px] px-10 py-[12px] rounded-t-[4px] leading-10  ${
                isActive === "review" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              Review (50)
            </button>
          </li>
        </ul>
        {isActive === "description" ? (
          <div className="mt-10">
            <h4 className="text-primary font-[500] text-[25px] leading-7">Product Description</h4>
            <p className="text-[20px] mt-[30px] text-[rgba(0,0,0,0.6)] leading-[26px]">
              {product?.description}
            </p>
          </div>
        ) : (
          <div className="mt-10 ">
            <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
              <div className="flex flex-col gap-[32px]">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </div>
              <div className="px-[46px] py-8 border border-[rgba(0,0,0,0.2)]">
                <h4 className="text-[25px] leading-[28px] text-primary font-[500]">
                  Required fields are marked
                </h4>
                <div>
                  <ReviewForm />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BottomProductDetails;
