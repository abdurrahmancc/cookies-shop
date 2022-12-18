import React, { useState } from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import Pagination from "../shop/Pagination";
import BlogCard from "./BlogCard";
import BlogCart from "./BlogCard";
import BlogsFilter from "./BlogsFilter";
const blogs: any = [
  {
    _id: "1",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
  {
    _id: "2",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
  {
    _id: "3",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
  {
    _id: "4",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
  {
    _id: "5",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
  {
    _id: "6",
    title: "Something New  About Cookies 2022",
    date: "Dec 22, 2022",
    img: "https://i.ibb.co/Yjsh4Ft/image-37.png",
    description:
      "Things you should know about cakes Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.",
  },
];

const BlogSec = () => {
  const [page, setPage] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(7);

  return (
    <div className="flex md:flex-row flex-col gap-5">
      <div className="max-w-[912px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {blogs.map((blog: any) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="flex justify-center mt-[45px] btn-group">
          <Pagination pageCount={pageCount} setPage={setPage} />
        </div>
      </div>
      <div className="md:w-[268px] max-h-[1621.44px] mx-auto mt-16 md:mt-0 max-w-[446px] w-full md:max-w-full bg-[#D9D9D980]">
        <BlogsFilter />
      </div>
    </div>
  );
};

export default BlogSec;
