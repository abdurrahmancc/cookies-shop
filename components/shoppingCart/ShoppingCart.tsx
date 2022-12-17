import React, { useEffect, useState } from "react";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { Product } from "../../types/types";
import CartTotal from "./CartTotal";
import ShoppingCartTableRow from "./ShoppingCartTableRow";

interface Products {
  products: Product[];
}

const ShoppingCart = ({ products }: Products) => {
  const [carts, setsCart] = useState<Product[]>([]);
  const { cart } = useAppSelector((state) => state);
  const [prices, setPrices] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(1);

  useEffect(() => {
    let result: Product[] = [];
    products &&
      products.forEach((product: Product) => {
        cart.carts.filter((key: string) => {
          let quantity: any = cart.shoppingCartQuantity;
          if (product._id == key) {
            product.quantity = quantity[key];
            result.push(product);
          }
        });
      });

    setsCart(result);
  }, [products, cart.carts, cart.shoppingCartQuantity]);

  useEffect(() => {
    try {
      let storageCart: any = localStorage.getItem("cookies-shop-shopping-cart");
      storageCart = JSON.parse(storageCart);
      const cartPrices: number[] =
        carts &&
        carts.map((product) => {
          const quantity = storageCart[product._id];
          return product?.price * quantity;
        });
      setPrices(cartPrices);

      const initialValue: number = 0;
      if (cartPrices?.length >= 1) {
        const sumReduce = cartPrices.reduce(
          (previous: number, current: number) => previous + current,
          initialValue
        );
        setTotalPrice(sumReduce);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  }, [carts]);

  return (
    <div className="flex gap-8 flex-col lg:flex-row justify-center">
      <div className="lg:max-w-[650px] xl:max-w-[782px] w-full">
        {/* ========== shopping cart  table start ======== */}
        <Table id="shopping-cart-table" className="w-full">
          {/* <!-- head --> */}
          <Thead className=" sm:border-b-2 sm:border-b-[#944A07] bg-[#F0F0F0]">
            <Tr className="sm:text-black">
              <Th className="font-[500] col-span-2 text-start py-[22px] pl-[50px] leading-[28px] text-[20px]">
                Product
              </Th>
              <Th className="font-[500] col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Price
              </Th>
              <Th className="font-[500] text-center col-span-1 py-[22px] leading-[28px] text-[20px]">
                Quantity
              </Th>
              <Th className="font-[500] col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Sub Total
              </Th>
              <Th className="font-[500] sm:hidden col-span-1 text-start py-[22px] leading-[28px] text-[20px]">
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {carts &&
              carts.map((product) => <ShoppingCartTableRow key={product?._id} product={product} />)}
          </Tbody>
        </Table>
        {/* ========== table end ======== */}
        <div className="mt-8">
          <h4 className="text-[20px] font-[500] text-primary leading-[24px] pb-4">Coupon Code</h4>
          <div className="flex gap-5 justify-between items-center">
            <form className="flex gap-1 sm:gap-5">
              <input
                type="text"
                placeholder="Enter a code"
                className="input text-[20px] min-w-[130px] max-w-[266px] w-full h-14 focus:border focus:border-primary rounded-none focus:right-0 focus:outline-none text-black placeholder:text-[rgba(0, 0, 0, 0.5)rgba(0,0,0,0.5)] bg-[#F0F0F0] "
              />
              <button className="font-[500] max-w-[164px] w-full flex justify-center items-center hover:bg-secondary duration-150 transition-all ease-linear bg-primary text-[#FFFFFF] h-14 text-[18px] leading-[32px] ">
                Apply
              </button>
            </form>
            <button className="font-[500] hover:opacity-95 duration-150 transition-all ease-linear bg-[#FFA111] max-w-[130px] sm:max-w-[218px] w-full flex justify-center items-center text-[#FFFFFF] h-14 text-[18px] leading-[32px] ">
              Update Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <CartTotal totalPrice={totalPrice} prices={prices} />
      </div>
    </div>
  );
};

export default ShoppingCart;
