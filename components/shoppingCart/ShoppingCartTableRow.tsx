import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Td, Tr } from "react-super-responsive-table";
import { toast } from "react-toastify";
import trash from "../../assets/icons/trash.svg";
import { useAppDispatch, useAppSelector } from "../../redux/app/reduxHooks";
import {
  addToCart,
  changeQuantity,
  removeToCart,
} from "../../redux/features/shoppingCart/shoppingCartSlice";
import { Product } from "../../types/types";

interface ProductModel {
  product: Product;
}

const ShoppingCartTableRow = ({ product }: ProductModel) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [totalPrice, setTotalPrice] = useState<number>(product?.price * product.quantity);
  const dispatch = useAppDispatch();

  const handleCartQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
    setTotalPrice(product?.price * data);
    const info = { quantity: data, id: product._id };
    dispatch(changeQuantity(info));
  };

  const handleDeleteCart = (id: string): void => {
    dispatch(removeToCart(id));
    toast.success("Deleted Cart", { autoClose: 1000 });
  };

  return (
    <>
      <Tr className={"sm:border-b border-[rgba(100,48,1,0.3)] "}>
        <Td className="py-4 pl-4 text-[15px] leading-6 font-[500] text-[#7B3D11]">
          <div className="flex items-center gap-2 lg:gap-[15px]">
            <Image
              onClick={() => handleDeleteCart(product?._id)}
              height={20}
              width={18}
              src={trash}
              className="hidden cursor-pointer sm:block"
              alt={"trash"}
            />
            <Image
              height={102}
              width={109}
              className={"xl:h-[102px] xl:w-[109px] h-[50px] w-[48px]"}
              src={`${product?.img}`}
              alt="product-img"
            />
            <h3 className=" max-w-[170px] md:max-w-[180px]">{product?.name}</h3>
          </div>
        </Td>
        <Td className="text-[15px] sm:py-4 pb-4 leading-[25px] font-[500] text-[#7B3D11]">
          ${product?.price}
        </Td>
        <Td className="text-lg sm:py-4 pb-4 sm:my-0 text-[15px] leading-6 font-[500] text-[#7B3D11]">
          <div className="sm:mx-auto w-32 relative ">
            <div className="flex items-center">
              <button
                onClick={() => handleCartQuantity(quantity - 1)}
                className="text-white rounded-[4px] border-primary  lg:w-[34.85px] lg:h-[34.85px] h-[28px] w-[28px] flex justify-center items-center box-border bg-[#944A07]"
              >
                <FaMinus className="text-xs" />
              </button>
              <div className="w-[57px] text-primary text-[16px] leading-10 flex justify-center items-center">
                {quantity}
              </div>
              <button
                onClick={() => handleCartQuantity(quantity + 1)}
                className="text-white rounded-[4px] border-primary  lg:w-[34.85px] lg:h-[34.85px] h-[28px] w-[28px]  flex justify-center items-center box-border bg-[#944A07]"
              >
                <FaPlus className="text-xs " />
              </button>
            </div>
          </div>
        </Td>
        <Td className="text-[15px] sm:py-4 pb-4 text-center leading-[25px] font-[500] text-[#7B3D11]">
          ${totalPrice}
        </Td>
        <Td className="text-[15px] sm:py-4 pb-4 sm:hidden text-center leading-[25px] font-[500] text-[#7B3D11]">
          <Image height={20} width={18} src={trash} alt={"trash"} />
        </Td>
      </Tr>
    </>
  );
};

export default ShoppingCartTableRow;
