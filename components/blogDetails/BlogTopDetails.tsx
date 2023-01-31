import Image from "next/image";
import React from "react";
import { BlogsDataModel } from "../../types/types";
import img from "../../assets/blogs/details.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

type Props = {
  blog: BlogsDataModel;
};

const BlogTopDetails = ({ blog }: Props) => {
  return (
    <div>
      <figure>
        <Image
          width={912}
          height={727}
          src={blog?.img}
          className={"xl:min-h-[727px]"}
          alt="blog image"
        />
      </figure>
      <div className="text-[#000000] flex justify-center items-center z-20 relative left-[20px] bottom-[25px] bg-[#FFA111]  max-w-[213.33px] w-full h-[50px] leading-[28px] text-[18px] ">
        {blog?.date}
      </div>
      <h2 className="text-primary font-[500] mb-[30px] text-[34px] leading-[36px]">
        {blog?.title}
      </h2>
      <p className="text-[20px] leading-[30px] text-[rgba(0,0,0,0.7)]">
        Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat
        volutpat. Morbi in orci risus. Things you should know about cakes Donec sed erat ut magna
        suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Things you should know about
        cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.
        Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat
        volutpat. Morbi in orci risus. Things you should know about cakes Donec sed erat ut magna
        suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Things you should know about
        cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.{" "}
      </p>
      <div className="my-[46px] flex lg:flex-row flex-col gap-[30px]">
        <Image
          width={409}
          height={413}
          className={
            "max-h-[413px] max-w-[409px] lg:w-[350px] h-auto xl:w-[409px] xl:h-[413px] w-full"
          }
          src={img}
          alt="details img"
        />
        <p className="text-[20px] leading-[30px] text-[rgba(0,0,0,0.7)]">
          Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat
          volutpat. Morbi in orci risus. Things you should know about cakes Donec sed erat ut magna
          suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Things you should know about
          cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.
          Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat
          volutpat. Morbi in orci risus. Things you should know about cakes Donec sed erat ut magna
          suscipit mattis. Aliquam erat volutpat.Things you should know about cakes Donec sed erat
          ut.
        </p>
      </div>
      <div className="flex w-full gap-5 items-center">
        <div className="flex items-center gap-2">
          <BsFacebook className="text-[30px] text-primary" />
          <RiInstagramFill className="text-[37px] text-primary" />
          <BsTwitter className="text-[37px] text-primary" />
          <BsYoutube className="text-[37px] text-primary" />
        </div>
        <div className="max-w-[99px] flex items-center">
          <div className="h-[2px] w-[93px] bg-primary"></div>
          <div className="w-[6px] h-[6px] bg-primary rounded-full"></div>
        </div>
        <span className="text-[20px] leading-[25px] text-[rgba(0,0,0,0.7)]">Share Us</span>
      </div>
    </div>
  );
};

export default BlogTopDetails;
