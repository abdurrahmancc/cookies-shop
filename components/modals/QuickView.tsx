import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Product } from "../../types/types";
import QuickViewDetails from "./QuickViewDetails";

interface Props {
  product: Product | {} | undefined;
}

const QuickView = ({ product }: Props) => {
  return (
    <div>
      <input type="checkbox" onChange={() => {}} id="quick-view" className="modal-toggle" />
      <label htmlFor="quick-view" className="modal bg-[rgba(0,0,0,0.46)] cursor-pointer">
        <label className="modal-box py-10 xl:py-0 xl:flex justify-center items-center p-0 shadow-none rounded-none relative bg-[#FFFFFF] 2xl:max-w-[1200px] flex-col container xl:max-w-[1000px] w-full mx-auto px-5 min-h-[700px] 2xl:min-h-[739px]  max-w-[400px] sm:max-w-[512px]">
          <div className="flex flex-col justify-center 2xl:items-center lg:max-w-full mx-auto max-w-[550px] xl:flex-row xl:gap-12 pb-10 lg:pb-0 gap-10">
            <QuickViewDetails product={product} />
          </div>
        </label>
      </label>
    </div>
  );
};

export default QuickView;
