import React, { useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Product } from "../../types/types";
import SliderCardSec from "../shared/SliderCardSec";

interface ProductModel {
  products: Product[];
}

const RelatedItems = ({ products }: ProductModel) => {
  const [isNavigationHidden, setIsNavigationHidden] = useState<boolean>(false);
  return (
    <div>
      <h2 className="text-[34px] mb-[46px] text-primary font-[700] leading-[39.07px]">
        Related Items
      </h2>
      <SliderCardSec products={products} />
    </div>
  );
};

export default RelatedItems;
