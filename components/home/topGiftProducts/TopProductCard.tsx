import React, { useState } from "react";
import cake from "../../../assets/product-img/cake.png";
import Image from "next/image";
import { useAppDispatch } from "../../../redux/app/reduxHooks";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { TbHeart } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
const TopProductCard = () => {
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
      className="max-w-[288px] w-full h-[227px] flex bg-[rgba(148,74,7,0.1)] justify-center relative items-center"
    >
      <Image src={cake} alt="top product" />
      <div
        className={`absolute top-[97px] flex gap-x-[7px] duration-300 transition-all ease-in-out ${
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
    </div>
  );
};

export default TopProductCard;
