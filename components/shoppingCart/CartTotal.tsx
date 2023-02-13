import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import payment_img from "../../assets/icons/paymentMethod.png";

type TotalPriceModel = {
  totalPrice: number;
  prices: number[];
};

const CartTotal = ({ totalPrice, prices }: TotalPriceModel) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const router = useRouter();

  let Shipping = 15;
  Shipping = prices.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <div className="max-w-[385px] mx-auto mt-10 lg:mt-0 w-full border border-[#944A07]">
      <h2 className="font-[700] bg-primary text-center text-[20px] leading-[22px] py-[24.96px] text-white">
        Carts Total
      </h2>
      <div className="w-full">
        <div className="w-full px-8 pt-8 pb-8 ">
          {/*------------------- price table start--------------- */}
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pb-[14.97px] text-[16px] leading-[20px] text-[rgba(0,0,0,0.7)] font-[500]">
                  Sub Total Price
                </td>
                <td className="pb-[14.97px] text-[16px] text-end leading-[20px] text-[rgba(0,0,0,0.7)]">
                  $ {totalPrice.toFixed(2)}
                </td>
              </tr>
              <tr className="">
                <td className="pb-[14.97px] text-[16px] leading-[20px] text-[rgba(0,0,0,0.7)] font-[500]">
                  Shipping Price
                </td>
                <td className=" pb-[14.97px] text-[16px] text-end leading-[20px] text-[rgba(0,0,0,0.7)]">
                  $ {Shipping.toFixed(2)}
                </td>
              </tr>
              <tr className="">
                <td className="pb-[19.64px] text-[16px] leading-[20px] text-[rgba(0,0,0,0.7)] font-[500]">
                  VAT 5%
                </td>
                <td className="pb-[19.64px] text-[16px] text-end leading-[20px] text-[rgba(0,0,0,0.7)]">
                  $ {tax.toFixed(2)}
                </td>
              </tr>
              <tr className="border-y border-t-[rgba(148,74,7,0.5)] border-b-[#944A07] ">
                <td className="py-[14.98px] font-[700] text-[18px] leading-[24px] text-[rgba(0,0,0,0.7)] ">
                  Total
                </td>
                <td className="text-[18px] leading-[24px] font-[500] text-end text-[#7B3D11]">
                  $ {total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-[31.95px]">
            <h4 className="text-[18px] pb-[19.97px] leading-[26px] text-[#643001]  font-[500] ">
              Payment Method
            </h4>
            <Image
              src={payment_img}
              width={323.44}
              height={40.93}
              className="w-full h-auto"
              alt="payment logo"
            />
          </div>
          <div className="form-control mt-[62.88px]">
            <label className="label justify-start gap-4 cursor-pointer">
              <input
                onClick={() => setIsChecked(!isChecked)}
                type="checkbox"
                className="checkbox w-5 h-5 rounded-none checkbox-xs text-white checkbox-primary"
              />
              <span className="label-text leading-[20px] text-[rgba(0,0,0,0.7)] text-[15px]">
                I agree all terms & condition
              </span>
            </label>
          </div>

          <div className="mt-[23.95px]">
            <button
              onClick={() => router.push("/checkout")}
              style={{ filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))` }}
              disabled={!isChecked}
              className="btn disabled:btn-primary rounded-none disabled:text-white disabled:opacity-80 border-none btn-animate text-[18px] leading-8 btn-primary h-14 w-full text-white"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
