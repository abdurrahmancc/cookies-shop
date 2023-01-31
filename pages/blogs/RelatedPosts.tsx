import React from "react";
import SliderBlogs from "../../components/blogDetails/SliderBlogs";
import { BlogsDataModel } from "../../types/types";

interface Props {
  blogs: BlogsDataModel[];
}

const RelatedPosts = ({ blogs }: Props) => {
  return (
    <div className="relative">
      <h2 className="text-primary text-[34px] leading-[39.07px] font-[700] pb-8 ">Related Posts</h2>

      <SliderBlogs blogs={blogs} />
    </div>
  );
};

export default RelatedPosts;
