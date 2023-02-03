import Link from "next/link";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BreadcrumbModel } from "../../../types/types";

interface breadModel {
  breadcrumbData: BreadcrumbModel[];
}

const Breadcrumb = ({ breadcrumbData }: breadModel) => {
  let isLast = breadcrumbData.length - 1;

  return (
    <div className="bg-[#E8E7E7]">
      <div className="max-w-[1200px] lg:mx-auto mx-5 py-5">
        <ul className="flex items-center gap-2 text-[16px] leading-[18.38px] text-primary">
          {breadcrumbData.map((bread: any, index: any) => {
            return (
              <li key={index} className={"flex capitalize items-center"}>
                {index === isLast ? (
                  <p className="text-[#7D7D7D]">{bread?.label}</p>
                ) : (
                  <div className="flex items-center">
                    <Link href={`${bread?.value}`}>{bread?.label}</Link>
                    <HiOutlineChevronRight className="md:mx-[10px] mx-1 text-[#7D7D7D] text-[12px]" />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
