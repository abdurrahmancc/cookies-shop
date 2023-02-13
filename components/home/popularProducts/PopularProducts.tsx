import React, { useState } from "react";
import { Product } from "../../../types/types";
import SliderCardSec from "../../shared/SliderCardSec";

interface Products {
  products: Product[];
}

const PopularProducts = ({ products }: Products) => {
  return (
    <div className="relative">
      <h2 className="text-primary xl:text-[48px] xl:leading-[62px] lg:text-3xl sm:text-2xl text-xl font-[Candal] pb-8 ">
        Popular Products
      </h2>

      <SliderCardSec products={products} />
    </div>
  );
};

export default PopularProducts;
