import Image from "next/image";
import React from "react";
import user1 from "../../assets/user-img/review-1.png";

const CommentCard = () => {
  return (
    <div className="bg-[rgba(224,224,224,0.5)] flex gap-[46px] px-8 py-5">
      <Image
        src={user1}
        className="w-[110px] h-[110px]"
        height={110}
        width={110}
        alt="review image "
      />
      <div>
        <h5 className="text-[20px] font-[500] leading-6 text-[#944A07] tracking-[1.2px]">
          Albart Washington
        </h5>

        <p className="text-primary mt-[10px] text-[15px] leading-[20px]">Dec 22, 2022</p>

        <p className="text-[16px] mt-[16px] leading-[24px] text-[rgba(0,0,0,0.8)]">
          “SO GOOD. I was shocked at how good these are and I love how they have no soy or dairy due
          to my disorder.
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
