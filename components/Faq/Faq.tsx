import React from "react";
import Collapsible from "react-collapsible";
import { FaMinus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Faq = () => {
  return (
    <div>
      <h2 className="text-[34px] text-center text-primary font-[700] leading-[36px]">
        Frequently Ask Questions
      </h2>
      <p className="text-[20px] mt-8 text-[rgba(0,0,0,0.7)] leading-[30px] text-center">
        Discover your questions from the submission box below.
      </p>
      <div className="mt-16">
        <div id="faq-Collapsible" className="max-w-[1100px] mx-auto">
          <div className="bg-[rgba(240,240,240,0.5)] box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              open={true}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  1. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-1"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-1"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="bg-[rgba(240,240,240,0.5)] mt-5 box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  2. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-2"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-2"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="bg-[rgba(240,240,240,0.5)] mt-5 box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  3. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-3"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-3"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="bg-[rgba(240,240,240,0.5)] mt-5 box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  4. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-4"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-4"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="bg-[rgba(240,240,240,0.5)] mt-5 box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  5. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-5"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-5"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="bg-[rgba(240,240,240,0.5)] mt-5 box-border border-[#fff0] border hover:border-[rgba(0,0,0,0.5)]">
            <Collapsible
              className="w-full"
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-primary p-5 leading-6 font-[500]">
                  6. Lorem ipsum dolor sit amet?
                  <GoPlus key={"faq-trigger-6"} className="text-[20px] text-primary plus" />
                  <FaMinus key={"faq-trigger-6"} className="text-[20px] text-primary minus" />
                </span>
              }
            >
              <div className="p-5 pt-0">
                <div className="h-[1px] box-border bg-[rgba(148,74,7,0.5)]"></div>
                <p className="lg:text-[16px] pt-5 text-sm text-[rgba(0,0,0,0.7)] leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam
                  velit ipsum assumenda perferendis eveniet aspernatur, quaerat officiis
                  reprehenderit optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum
                  eum pariatur consectetur laboriosam odit accusantium quisquam sequi nostrum
                  dolores. Labore enim blanditiis obcaecati ullam sint est vero nihil quisquam!
                </p>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
