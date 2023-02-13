import React, { FC, useState, useEffect } from "react";
import TopFilter from "./TopFilter";
import bg from "../../assets/bg-img/shop.png";
import ShopCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product } from "../../types/types";
import QuickView from "../modals/QuickView";
import ShopProductCard from "./ShopProductCard";

interface Products {
  products: Product[];
}

const Shop3 = ({ products }: Products) => {
  const [page, setPage] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(7);

  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="lg:bg-contain xl:bg-cover bg-center bg-no-repeat"
    >
      <TopFilter />
      <div className="max-w-[1200px] mt-[46px] lg:mx-auto mx-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-[288px] mx-auto sm:max-w-[592px] md:max-w-[896px] lg:max-w-full lg:grid-cols-4 gap-x-4 gap-y-6">
          {products?.map((product: Product) => (
            <ShopProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-[46px] mb-10 btn-group">
          <Pagination pageCount={pageCount} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop3;
