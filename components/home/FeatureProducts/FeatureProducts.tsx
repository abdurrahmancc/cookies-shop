import React, { useState } from "react";
import { Product } from "../../../types/types";
import QuickView from "../../modals/QuickView";
import SliderCardSec from "../../shared/SliderCardSec";

interface Products {
  products: Product[];
}

const FeatureProducts = ({ products }: Products) => {
  return (
    <div className="relative">
      <h2 className="text-primary xl:text-[48px] xl:leading-[62px] lg:text-3xl sm:text-2xl text-xl font-[Candal] pb-8 ">
        Feature Products
      </h2>
      <SliderCardSec products={products} />
    </div>
  );
};

export default FeatureProducts;
