import React from "react";
import Footer from "../../components/footer/Footer";
import Banner2 from "../../components/headers/Banner2";
import BottomHeader2 from "../../components/headers/BottomHeader2";
import MiddleHeader2 from "../../components/headers/MiddleHeader1";
import TopHeader2 from "../../components/headers/TopHeader2";
import AboutCookies from "../../components/home/AboutCookies";
import AppleCake from "../../components/home/appleCake/AppleCake";
import ProductCategory from "../../components/home/productCategory/ProductCategory";
import SpecialOrder from "../../components/home/specialOrder/SpecialOrder";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const Home2 = () => {
  return (
    <div className="bg-[#ffffff]">
      <header className="bg-white">
        {/* =========== top header start ======== */}
        <TopHeader2 />
        {/* =========== top header end ======== */}
        {/* =========== middle header start ======== */}
        <MiddleHeader2 />
        {/* =========== middle header end ======== */}
        {/* =========== bottom header start ======== */}
        <BottomHeader2 />
        {/* =========== bottom header end ======== */}
        {/* =========== banner start ======== */}
        <Banner2 />
        {/* =========== banner end ======== */}
      </header>
      <main className="bg-[rgba(255,161,17,0.05)]">
        {/*===========  product category start ===========*/}
        <section className="max-w-[1200px] py-8 lg:mx-auto mx-5">
          <ProductCategory />
        </section>
        {/*===========  product category  end =============*/}
        {/*===========  Apple Cake  start =============*/}
        <section className="max-w-[1200px] py-8 lg:mx-auto mx-5">
          <AppleCake />
        </section>
        {/*===========  Apple Cake  end =============*/}
        {/*===========  Special Orders  start =============*/}
        <section className="max-w-[1200px] pt-8 lg:mx-auto mx-5">
          <SpecialOrder />
        </section>
        {/*===========  Special Orders  end =============*/}
        {/* ======== about cookies start ======= */}
        <section className="mt-[6px] mb-[100px]">
          <div className="bg-white">
            <AboutCookies />
          </div>
        </section>
        {/* ======== about cookies end ======= */}
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home2;
