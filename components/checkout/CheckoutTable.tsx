import Image from "next/image";
import React from "react";
import img from "../../assets/product-img/subscribeOffer.png";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

const CheckoutTable = ({ cartProducts, onSubmit }: any) => {
  let totalPrice;
  const price = cartProducts.map((product: any) => product.price * product.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce(
      (previous: any, current: any) => previous + current,
      initialValue
    );
    totalPrice = sumReduce;
  }

  let Shipping = 15;
  Shipping = cartProducts.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <div className="border border-[1px solid rgba(0,0,0,0.5)]">
      <Table className="w-full">
        <Thead>
          <Tr className="bg-[#F0F0F0] border-b border-b-[#944A07]">
            <Th className="text-[18px] pl-5 text-start py-[23px] leading-[25px] font-[500] text-primary">
              Product
            </Th>
            <Th className="text-[18px] py-[23px] leading-[25px] font-[500] text-primary">
              Quantity
            </Th>
            <Th className="text-[18px] pr-5 py-[23px] leading-[25px] font-[500] text-primary">
              Sub Total
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className={"border-b border-b-[#944A07]"}>
            <Td className="pl-5 py-[14.5px]">
              <div className="flex items-center gap-[15px]">
                <Image width={64} height={62} className="w-16 h-[62px]" src={img} alt="product" />
                <h4 className="text-[15px] text-[#7B3D11] leading-5">
                  Bake Coco Cookies <br /> with Cheese
                </h4>
              </div>
            </Td>
            <Td className="text-center text-[#7B3D11] font-[500] text-[15px]">1</Td>
            <Td className="text-center text-[#7B3D11] font-[500] text-[15px]">$08</Td>
          </Tr>
          <Tr className={"border-b border-b-[#944A07]"}>
            <Td className="pl-5 py-[14.5px]">
              <div className="flex items-center gap-[15px]">
                <Image width={64} height={62} className="w-16 h-[62px]" src={img} alt="product" />
                <h4 className="text-[15px] text-[#7B3D11] leading-5">
                  Bake Coco Cookies <br /> with Cheese
                </h4>
              </div>
            </Td>
            <Td className="text-center text-[#7B3D11] font-[500] text-[15px]">1</Td>
            <Td className="text-center text-[#7B3D11] font-[500] text-[15px]">$08</Td>
          </Tr>
        </Tbody>
      </Table>
      <div></div>
    </div>
  );
};

export default CheckoutTable;
