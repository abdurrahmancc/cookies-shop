import React, { useState } from "react";
import { Product } from "../../types/types";
import Pagination from "./Pagination";
import ShopCard from "./ProductCard";
import bg from "../../assets/bg-img/shop.png";
import ShopFilter from "./ShopFilter";
import { useRouter } from "next/router";

interface Products {
  products: Product[];
}

const Shop = ({ products }: Products) => {
  const [page, setPage] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(7);
  const router = useRouter();

  const isRightFilterShop = router.pathname.includes("/shop/shop2");
  products.length = 6;

  return (
    <div className="xl:max-w-[1200px] container mx-auto lg:mx-auto">
      <div className=" flex flex-col md:flex-row gap-8 w-full mx-auto">
        {/* ======== filter start ======== */}
        <div
          className={`md:w-[272px] max-h-[1143.5px] w-full bg-primary ${
            isRightFilterShop ? "order-2" : "order-1"
          }`}
        >
          <ShopFilter />
        </div>
        {/* ======== filter end ======== */}
        {/* ======== product start ======== */}
        <div
          className={`w-full  md:max-w-[464px] lg:max-w-[720px] xl:max-w-[896px] ${
            isRightFilterShop ? "order-1" : "order-2"
          }`}
        >
          <div className="h-[45px] flex gap-10 lg:gap-0 justify-between ">
            <div className="bg-primary  lg:max-w-[370px]  xl:max-w-[470px] w-full h-full flex pl-4 items-center text-[#ffffff] text-sm leading-[16px]">
              72 items in Search
            </div>
            <div className="bg-primary max-w-[300px] w-full flex items-center md:px-[30px] px-5  text-lg leading-6 text-[#ffffff]">
              Default Sorting
            </div>
          </div>
          <div className=" mt-[46px] mx-auto ">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-[288px] mx-auto sm:max-w-[592px] md:max-w-[896px] gap-x-4 gap-y-[30px]">
              {products?.map((product: Product) => (
                <ShopCard key={product?._id} product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-[45px] btn-group">
              <Pagination pageCount={pageCount} setPage={setPage} />
            </div>
          </div>
        </div>
        {/* ======== product end ======== */}
      </div>
    </div>
  );
};

export default Shop;
