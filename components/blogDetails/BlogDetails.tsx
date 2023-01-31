import Image from "next/image";
import React from "react";
import { BlogsDataModel } from "../../types/types";
import BlogsFilter from "../blogs/BlogsFilter";
import BlogTopDetails from "./BlogTopDetails";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

type Props = {
  blog: BlogsDataModel;
};

const BlogDetails = ({ blog }: Props) => {
  return (
    <div className="flex md:flex-row flex-col gap-5 pb-[46px] border-b border-[#D9D9D9]">
      <div className="max-w-[912px] w-full">
        <BlogTopDetails blog={blog} />
      </div>
      <div className="md:w-[268px] max-h-[1621.44px] mx-auto mt-16 md:mt-0 max-w-[446px] w-full md:max-w-full bg-[#D9D9D980]">
        <BlogsFilter />
      </div>
    </div>
  );
};

export default BlogDetails;
