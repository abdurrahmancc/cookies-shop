import React from "react";
import about from "../../assets/home/about.png";

const AboutCookies = () => {
  return (
    <div
      style={{ backgroundImage: `url(${about.src})` }}
      className="lg:h-[388px] h-[300px] bg-no-repeat bg-cover bg-center"
    >
      <div className=" flex justify-center items-center h-full mx-5 md:mx-0">
        <div className="xl:max-w-[890px] lg:max-w-[720px] md:max-w-[580px] text-center mx-auto">
          <h2 className="text-primary text-center xl:text-[48px] xl:leading-[62px] lg:text-3xl sm:text-2xl text-xl  font-[Candal]">
            Meet The Cookies Bakery
          </h2>
          <p className=" lg:mt-6 mt-4 text-center text-[16px] lg:leading-[32px] leading-6 text-secondary">
            Cookies Bakery are processed from fresh locally sourced ingredients, processed in plants
            ensuring international quality. It have been the number one bakery product in the
            country.
          </p>
          <button
            style={{ boxShadow: ` 0px 4px 4px rgba(0,0,0,0.25)` }}
            className="rounded-[46px] mt-[26px] shadow-md bg-[rgba(123,61,17,0.02)] py-[14px] px-10 border border-[#643001] font-[500] text-lg  text-primary "
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCookies;
