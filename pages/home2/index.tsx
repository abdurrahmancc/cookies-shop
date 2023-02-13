import { GetStaticProps } from "next";
import React from "react";
import Footer from "../../components/footer/Footer1";
import Banner2 from "../../components/home/banner/Banner2";
import BottomHeader2 from "../../components/headers/BottomHeader2";
import MiddleHeader2 from "../../components/headers/MiddleHeader1";
import TopHeader2 from "../../components/headers/TopHeader2";
import AboutCookies from "../../components/home/AboutCookies";
import AppleCake from "../../components/home/appleCake/AppleCake";
import DealsProduct from "../../components/home/dealsProduct/DealsProduct";
import PopularProducts from "../../components/home/popularProducts/PopularProducts";
import ProductCategory from "../../components/home/productCategory/ProductCategory";
import SpecialOrder from "../../components/home/specialOrder/SpecialOrder";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import { Product } from "../../types/types";
import Newsletter2 from "../../components/shared/newsletter/Newsletter2";
import Footer2 from "../../components/footer/Footer2";

interface Products {
  products: Product[];
}

const Home2 = ({ products }: Products) => {
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
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <ProductCategory />
        </section>
        {/*===========  product category  end =============*/}
        {/* ======== deals products start ======= */}
        <section className="max-w-[1200px] mt-[32px] lg:mx-auto mx-5">
          <DealsProduct products={products} />
        </section>
        {/* ======== deals products end ======= */}
        {/*===========  Apple Cake  start =============*/}
        <section className="max-w-[1200px] pt-[32px] lg:mx-auto mx-5">
          <AppleCake />
        </section>
        {/*===========  Apple Cake  end =============*/}
        {/*===========  Special Orders  start =============*/}
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <SpecialOrder />
        </section>
        {/*===========  Special Orders  end =============*/}
        {/* ======== Newsletter start ======= */}
        <section className="pt-[64px]">
          <Newsletter2 />
        </section>
        {/* ======== Newsletter end ======= */}
        {/* ======== Popular Products start ======= */}
        <section className="max-w-[1200px] mt-[64px] lg:mx-auto mx-5">
          <PopularProducts products={products} />
        </section>
        {/* ======== Popular Products end ======= */}
        {/* ======== about cookies start ======= */}
        <section className="bg-white mt-[32px]">
          <AboutCookies />
        </section>
        {/* ======== about cookies end ======= */}

        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer>
        <Footer2 />
      </footer>
    </div>
  );
};

export default Home2;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
