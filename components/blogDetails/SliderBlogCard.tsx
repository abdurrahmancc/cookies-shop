import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogsDataModel } from "../../types/types";
import img from "../../assets/blogs/post-7.png";

interface Props {
  blog: BlogsDataModel;
}

const SliderBlogCard = ({ blog }: Props) => {
  return (
    <div
      style={{ boxShadow: `` }}
      className="card relative mb-5 max-w-[288px] product-card-shadow bg-white shadow rounded-none w-full border hover:border-[#FFA111] ease-linear transition duration-400"
    >
      <figure>
        <Image src={img} width={286} height={267} alt="product image" className="w-full h-auto" />
      </figure>
      <div className="text-[#000000] z-20 relative left-[16px] bottom-[15px] bg-[#FFA111] max-w-[128px] h-[30px] w-full flex justify-center items-center leading-[15px] text-[15px] ">
        {blog?.date}
      </div>
      <div className="card-body pb-5 pt-0 relative px-4">
        <Link href={`/productDetails/${blog?._id}`}>
          <h4 className="card-title font-[500] text-primary text-[20px] leading-[25px]">
            {blog?.title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default SliderBlogCard;
