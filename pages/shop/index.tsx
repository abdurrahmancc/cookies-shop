import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Shops from "../../components/shop/Shop";
import ShopBanner from "../../components/shop/ShopBanner";
import { Product } from "../../types/types";
import { GetStaticProps } from "next";
import Footer from "../../components/footer/Footer";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import SpecialOffer from "../../components/shop/SpecialOffer";
import data from "../../database/data.json";
import axios from "axios";

interface Products {
  products: Product[];
}

const Shop1 = ({ products }: Products) => {
  return (
    <>
      <header className="bg-white">
        {/* =========== top header start ======== */}
        <TopHeader1 />
        {/* =========== top header end ======== */}
        {/* =========== middle header start ======== */}
        <MiddleHeader1 />
        {/* =========== middle header end ======== */}
        {/* =========== bottom header start ======== */}
        <BottomHeader1 />
        {/* =========== bottom header end ======== */}
        {/* =========== banner start ======== */}
        <ShopBanner />
        {/* =========== banner end ======== */}
      </header>
      <main className="bg-[#FFF6E8]">
        {/* ========  products start ======= */}
        <section className="pt-16 md:mx-auto mx-5">
          <Shops products={products} />
        </section>
        {/* ========  products end ======= */}
        {/* ======== subscribe & special offer start ======= */}
        <section className="mt-16 pb-[112px] lg:mx-auto max-w-[1200px] mx-5">
          <SpecialOffer />
        </section>
        {/* ======== subscribe & special offer end ======= */}
        {/* ======== scroll up button start ======= */}
        <ScrollUpBtn />
        {/* ======== scroll up button end ======= */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Shop1;

export const getStaticProps: GetStaticProps = async () => {
  // const { data: products } = await axios.get("");
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
