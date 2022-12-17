import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import start from "../../assets/icons/star.svg";
import start2 from "../../assets/icons/star-2.svg";
import { TbHeart } from "react-icons/tb";
import img from "../../assets/product-img/butter-cookies-1.png";
import { Product } from "../../types/types";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/app/reduxHooks";
// import { addToCart } from "../../redux/features/cartList/cartListSlice";
import { toast } from "react-toastify";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { addToCart } from "../../redux/features/shoppingCart/shoppingCartSlice";

interface Prod {
  product: Product;
}

const ProductCard = ({ product }: Prod) => {
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
      style={{ boxShadow: `` }}
      className="card relative max-w-[288px] product-card-shadow bg-white shadow rounded-none w-full border hover:border-[#FFA111] ease-linear transition duration-400"
    >
      <figure>
        <Image src={img} alt="product image" className="w-full h-auto" />
      </figure>
      {/* ============= badge start ============= */}
      <div className="text-[16px] top-[5px] left-[6px] rounded-[3px] absolute bg-[#944A07] py-[5px] capitalize px-[12px] font-[500] leading-[18px] text-[#FFFFFF]">
        {product?.badge}
      </div>
      {/* ============= badge end ============= */}
      {/* ========== cart compare wishlist start ======== */}
      <div className=" flex justify-center">
        <div
          className={`absolute top-[104px]  flex gap-x-[7px] duration-300 transition-all ease-in-out ${
            isHoverCart ? " scale-100" : "scale-0 "
          }`}
        >
          <div
            onClick={() => handleAddToWishlist(product?._id)}
            className="bg-white w-[38px] h-[31px] flex justify-center items-center  rounded-[4px] text-primary"
          >
            <TbHeart className="text-[24px]" />
          </div>
          <div className="bg-white w-[38px] h-[31px] flex justify-center items-center  rounded-[4px] text-primary">
            <IoEyeOutline className="text-[24px]" />
          </div>
        </div>
      </div>
      {/* ========== cart compare wishlist end ======== */}
      <div className="card-body pb-[30px] pt-5 relative px-6">
        <Link href={`/productDetails/${product?._id}`}>
          <h4 className="card-title font-[500] text-primary text-lg leading-[20px]">
            {product?.name}
          </h4>
        </Link>
        <div className="flex justify-between">
          <p className="flex gap-2 justify-start items-end">
            <span className="text-[24px] inline text-primary leading-[25.39px] font-[700]">
              {product?.price}$
            </span>
            <span className="text-lg inline line-through leading-[22px] text-[rgba(0,0,0,0.5)] font-[500]">
              {product?.regularPrice}$
            </span>
          </p>
          <div className="flex gap-[1.3px] items-center">
            <Image src={start} alt="start" />
            <Image src={start} alt="start" />
            <Image src={start} alt="start" />
            <Image src={start} alt="start" />
            <Image src={start2} alt="start" />
          </div>
        </div>
        <div className="flex mt-3 justify-center">
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="text-primary max-w-[205px] w-full h-[50px] bg-white border border-primary flex justify-center items-center btn-animate hover:text-white bg-gradient-to-r from-primary to-primary gap-2 rounded-[4px] text-[20px] leading-[23px]"
          >
            <HiShoppingCart className="text-[20px]" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
