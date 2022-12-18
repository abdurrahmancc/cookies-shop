import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import bg from "../../assets/login/register-bg.png";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Register from "./Register";
import Login from "./Login";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const LoginSlider = () => {
  return (
    <div>
      <input type="checkbox" id="signUp" className="modal-toggle" />
      <label htmlFor="signUp" className="modal bg-[rgba(0,0,0,0.6)]  cursor-pointer">
        <label
          className="h-[748px] lg:max-w-[650px] md:max-w-[500px] sm:max-w-[450px] max-w-[350px] w-full bg-none relative"
          htmlFor=""
        >
          <div className="relative max-w-[592px] md:max-w-[896px] lg:max-w-[1200px] mx-auto">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              cssMode={true}
              navigation={{
                nextEl: ".custom_next",
                prevEl: ".custom_prev",
              }}
            >
              <SwiperSlide>
                <Login />
              </SwiperSlide>
              <SwiperSlide>
                {/* <div
                  style={{ backgroundImage: `url(${bg.src})` }}
                  className="h-[748px] w-[650px] bg-cover bg-no-repeat"
                >
                  <div className="text-end pr-3 pt-3">
                    <label htmlFor="signUp" className="inline-block cursor-pointer">
                      <IoCloseCircle className="text-primary w-[35px] h-[35px]" />
                    </label>
                  </div>
                  <div className="px-10">
                    <h2 className="text-[42px] text-center font-[700]  leading-[32px]  text-primary ">
                      Sign Up
                    </h2>
                    <div className="mt-[46px]">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-[16px] leading-5 text-primary">
                            Email
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Email"
                          className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                        />
                      </div>
                      <div className="form-control mt-[22px]">
                        <label className="label">
                          <span className="label-text text-[16px] leading-5 text-primary">
                            Password
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Password"
                          className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                        />
                      </div>
                      <div className="form-control mt-[22px]">
                        <label className="label">
                          <span className="label-text text-[16px] leading-5 text-primary">
                            Confirm Password
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Confirm Password"
                          className="input rounded-none text-black placeholder:text-[rgba(0,0,0,0.5)] leading-6 h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#944A07]"
                        />
                      </div>
                      <div className="mt-10">
                        <button className="bg-primary text-[30px] leading-8 text-white h-[60px] w-full">
                          Login
                        </button>
                      </div>
                      <div className="mt-8">
                        <p className="text-[25px] text-center leading-[30px] text-[rgba(0,0,0,0.7)]">
                          Already Have An Account?{" "}
                          <span className="text-[#944A07] font-[700]">Log In</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <Register />
              </SwiperSlide>
            </Swiper>
          </div>
        </label>
      </label>
    </div>
  );
};

export default LoginSlider;
