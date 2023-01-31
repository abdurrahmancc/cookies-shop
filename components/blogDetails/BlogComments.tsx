import React from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const BlogComments = () => {
  return (
    <div className="mt-[46px] ">
      <div className="grid gap-8 lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-[32px]">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
        <div className="px-[46px] py-8 border border-[rgba(0,0,0,0.2)]">
          <h4 className="text-[25px] leading-[28px] text-primary font-[500]">Leave A Comment</h4>

          <div>
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
