import Image from "next/image";
import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { Product } from "../../types/types";
import Rating from "../shared/Rating";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

interface ProductModel {
  product: Product;
}

const ProductDetails = ({ product }: ProductModel) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
  };

  return (
    <div className="flex gap-[60px]">
      <div className="max-w-[685px] w-full h-[628px]">
        <Image
          src={`${product?.img}`}
          width={685}
          height={628}
          alt="product image"
          className="w-[685px] h-[628px]"
        />
      </div>
      <div>
        <div className="text-white inline-block capitalize bg-secondary text-[16px] rounded-[3px] px-3 py-[5px]">
          {product?.badge}
        </div>
        <h2 className="text-[34px] mt-[26px] mb-[26px] leading-10 font-[500] text-primary">
          {product?.name}
        </h2>
        <Rating width="w-[25.54px]" height="h-[21.8px]" />
        <p className="text-[32px] font-[500] my-[23px] text-primary leading-10">
          ${product?.price}
        </p>
        <div className="mb-[26px]">
          <p className="text-[20px] font-[500] text-primary leading-[24px]">Pack Size:</p>
          <div className="flex gap-[10px] mt-[18px]">
            <button className="px-[15.5px] text-[20px] text-primary leading-[20px] border-[#944A07] btn-animate bg-gradient-to-r from-warning to-warning border rounded-[40px] py-[10px]">
              4 Cookies
            </button>
            <button className="px-[15.5px] text-[20px] text-primary leading-[20px] border-[#944A07] btn-animate bg-gradient-to-r from-warning to-warning border rounded-[40px] py-[10px] ">
              10 Cookies
            </button>
          </div>
        </div>
        <div>
          <p className="text-[20px] leading-6 font-[500] text-primary ">Quantity</p>
          <div className="flex items-center mt-5">
            <button
              onClick={() => handleQuantity(quantity - 1)}
              className="text-white rounded-[4px] border-primary  w-[42px] h-[42px] flex justify-center items-center box-border bg-[#944A07]"
            >
              <FaMinus />
            </button>
            <div className="w-[57px] text-primary text-[30px] leading-10 flex justify-center items-center">
              {quantity}
            </div>
            <button
              onClick={() => handleQuantity(quantity + 1)}
              className="text-white rounded-[4px] border-primary  w-[42px] h-[42px] flex justify-center items-center box-border bg-[#944A07]"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex my-[30px] gap-5">
          <button className=" max-w-[322px] w-full h-[50px] flex justify-center items-center bg-primary text-white gap-2 rounded-[4px] text-[20px] leading-[23px]">
            <HiShoppingCart className="text-[20px]" /> Add to cart
          </button>
          <button className="bg-primary rounded-[4px] h-[50px] w-[63px] flex justify-center items-center">
            <FiHeart className="text-white text-[31.5px]  h-[28px]" />
          </button>
        </div>
        <div className="flex mt-[28px] gap-[9px] items-center">
          <BsFacebook className="text-primary  h-6 w-6" />
          <RiInstagramFill className="text-primary h-7 w-7" />
          <BsTwitter className="text-primary h-6 w-[29.31px]" />
          <IoLogoYoutube className="text-primary h-6 w-[29.31px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
