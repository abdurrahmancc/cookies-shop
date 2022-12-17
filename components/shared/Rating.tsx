import Image from "next/image";
import React from "react";
import start from "../../assets/icons/star.svg";
import start2 from "../../assets/icons/star-2.svg";

interface Stars {
  height: string;
  width: string;
}

interface StarsModel {}

const Rating = ({ height, width }: Stars) => {
  return (
    <div className="flex gap-[1.3px] items-center">
      <Image src={start} className={`${width} ${height}`} alt="start" />
      <Image src={start} className={`${width} ${height}`} alt="start" />
      <Image src={start} className={`${width} ${height}`} alt="start" />
      <Image src={start} className={`${width} ${height}`} alt="start" />
      <Image src={start2} className={`${width} ${height}`} alt="start" />
    </div>
  );
};

export default Rating;
