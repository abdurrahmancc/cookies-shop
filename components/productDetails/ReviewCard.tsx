import Image from "next/image";
import React from "react";
import Rating from "../shared/Rating";
import user1 from "../../assets/user-img/review-1.png";

const ReviewCard = () => {
  return (
    <div className="bg-[rgba(224,224,224,0.5)] flex gap-[46px] px-8 py-[26px]">
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
        <div className="flex mt-[20px] justify-between items-center">
          <span className="text-primary text-[15px] leading-[20px]">Dec 22, 2022</span>
          <Rating height="h-[20.5px]" width="w-[20px]" />
        </div>
        <p className="text-[16px] mt-[26px] leading-[24px] text-[rgba(0,0,0,0.8)]">
          “SO GOOD. I was shocked at how good these are and I love how they have no soy or dairy due
          to my disorder.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
