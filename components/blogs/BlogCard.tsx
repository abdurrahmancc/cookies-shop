import Image from "next/image";
import React from "react";
import Blogs from "../../pages/blogs";

const BlogCard = ({ blog }: any) => {
  return (
    <div
      style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.1)` }}
      className="max-w-[446px] mx-auto border border-[#D9D9D9]"
    >
      <figure>
        <Image
          src={blog?.img}
          className={"z-10 max-w-[446px] w-full h-[295px]"}
          width={446}
          height={295}
          alt="blog image"
        />
      </figure>
      <div className="text-[#000000] inline-block z-20 relative left-[15px] bottom-[15px] bg-[#FFA111] py-[7.5px] px-[20px] leading-[15px] text-[15px] ">
        {blog?.date}
      </div>
      <div className="px-4 pb-[30px]">
        <h3 className="text-[20px] mb-4 text-primary leading-[25px] font-[500]">{blog?.title}</h3>
        <p className="text-[16px] mb-4 text-[rgba(0,0,0,0.7)] leading-[20px] ">
          {blog?.description}
        </p>
        <button className="text-[#643001] text-[15px] font-[500] leading-[15px] ">
          Read More...
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
