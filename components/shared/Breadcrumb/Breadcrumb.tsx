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
    <div className="max-w-[1200px] lg:mx-auto mx-5 py-5">
      <ul className="flex items-center gap-2 text-[16px] leading-[18.38px] text-[rgba(0,0,0,0.7)]">
        {breadcrumbData.map((bread: any, index: any) => {
          return (
            <li key={index} className={"flex"}>
              {index === isLast ? (
                <p>{bread?.label}</p>
              ) : (
                <div className="flex items-center">
                  <Link href={`${bread?.value}`}>{bread?.label}</Link>
                  <HiOutlineChevronRight />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;