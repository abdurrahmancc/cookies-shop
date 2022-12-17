import Image from "next/image";
import React, { useState } from "react";
import { Td, Tr } from "react-super-responsive-table";
import { Product } from "../../types/types";
import trash from "../../assets/icons/trash.svg";
import { useAppDispatch } from "../../redux/app/reduxHooks";
import { addToWishlist, removeToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { HiShoppingCart } from "react-icons/hi";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/features/shoppingCart/shoppingCartSlice";

interface ProductModel {
  product: Product;
}

const WishlistTableRow = ({ product }: ProductModel) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(product?.price);
  const dispatch = useAppDispatch();

  const handleQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
    setTotalPrice(product?.price * data);
  };

  const handleWishlistDelete = (id: string): void => {
    dispatch(removeToWishlist(id));
  };

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Add To wishlist", { autoClose: 1000 });
  };

  return (
    <>
      <Tr className={"sm:border-b border-[rgba(100,48,1,0.3)] "}>
        <Td className="py-4 pl-4 text-[15px] leading-6 font-[500] text-[#7B3D11]">
          <div className="flex items-center gap-3 lg:gap-6">
            <Image
              onClick={() => handleWishlistDelete(product?._id)}
              height={20}
              width={18}
              src={trash}
              className="hidden cursor-pointer sm:block"
              alt={"trash"}
            />
            <div className="flex items-center gap-8">
              <Image
                height={100}
                width={103}
                className={"xl:h-[100px] xl:w-[103px] h-[50px] w-[48px]"}
                src={`${product?.img}`}
                alt="product-img"
              />
              <h3 className=" max-w-[170px] md:max-w-[180px]">{product?.name}</h3>
            </div>
          </div>
        </Td>
        <Td className="text-[15px]sm:pl-3 sm:py-4 pb-4 leading-[25px] font-[500] text-[#7B3D11]">
          ${product?.price}
        </Td>
        <Td className="text-lg sm:py-4  sm:text-center pb-4 sm:my-0 text-[15px] leading-6 font-[500] text-[#7B3D11]">
          <div className="px-[15px] inline-block py-[12.5px] rounded-[4px] bg-[rgba(255,161,17,0.3)]">
            {product?.status}
          </div>
        </Td>
        <Td className="text-[15px] sm:py-4 pb-4 text-center leading-[25px] font-[500] text-[#7B3D11]">
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="text-primary sm:mx-auto max-w-[205px] w-full h-[50px] bg-white border border-primary flex justify-center items-center btn-animate hover:text-white bg-gradient-to-r from-primary to-primary gap-2 rounded-[4px] text-[20px] leading-[23px]"
          >
            <HiShoppingCart className="text-[20px]" /> Add to cart
          </button>
        </Td>
        <Td
          onClick={() => handleWishlistDelete(product?._id)}
          className="text-[15px]  cursor-pointer sm:py-4 pb-4 sm:hidden text-center leading-[25px] font-[500] text-[#7B3D11]"
        >
          <Image height={20} width={18} src={trash} alt={"trash"} />
        </Td>
      </Tr>
    </>
  );
};

export default WishlistTableRow;
