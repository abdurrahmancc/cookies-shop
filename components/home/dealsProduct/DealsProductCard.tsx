import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { TbHeart } from "react-icons/tb";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../redux/app/reduxHooks";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";

const DealsProductCard = ({ img }: any) => {
  const [isHoverCart, setIsHoverCart] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Add To cart", { autoClose: 1000 });
  };

  const handleAddToWishlist = (id: string) => {
    dispatch(addToWishlist(id));
    toast.success("Add To wishlist", { autoClose: 1000 });
  };

  return (
    <div
      onMouseEnter={() => setIsHoverCart(true)}
      onMouseLeave={() => setIsHoverCart(false)}
      style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}
      className="max-w-[292px] w-full  rounded-[9px] bg-[#ffffff] flex justify-center box-border relative items-center h-[244px]"
    >
      <Image src={img} width={216} height={204} alt="chocolate" />
      {/* ========== cart compare wishlist start ======== */}

      <div
        className={`absolute top-[105px] flex gap-x-[7px] duration-300 transition-all ease-in-out ${
          isHoverCart ? " scale-100" : "scale-0 "
        }`}
      >
        <div
          onClick={() => handleAddToWishlist("6391e20bbb97e83bf5c211a2")}
          className="bg-white w-[38px] h-[31px] flex justify-center items-center hover:text-white hover:bg-primary ease-in-out duration-300 transition-all cursor-pointer rounded-[4px] text-primary"
        >
          <TbHeart className="text-[24px]" />
        </div>
        <div className="bg-white w-[38px] h-[31px] flex justify-center items-center hover:text-white hover:bg-primary ease-in-out duration-300 transition-all cursor-pointer rounded-[4px] text-primary">
          <IoEyeOutline className="text-[24px]" />
        </div>
        <div
          onClick={() => handleAddToCart("6391e205bb97e83bf5c2119e")}
          className="bg-white w-[38px] h-[31px] flex justify-center items-center hover:text-white hover:bg-primary ease-in-out duration-300 transition-all cursor-pointer rounded-[4px] text-primary"
        >
          <AiOutlineShopping className="text-[24px]" />
        </div>
      </div>

      {/* ========== cart compare wishlist end ======== */}
    </div>
  );
};

export default DealsProductCard;
