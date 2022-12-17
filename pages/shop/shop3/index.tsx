import React, { FC, useEffect, useState } from "react";
import BottomHeader1 from "../../../components/headers/BottomHeader1";
import TopHeader1 from "../../../components/headers/TopHeader1";
import ShopBanner from "../../../components/shop/ShopBanner";
import Shop from "../../../components/shop/Shop3";
import Footer from "../../../components/footer/Footer";
import ScrollUpBtn from "../../../components/shared/ScrollUpBtn";
import SpecialOffer from "../../../components/shop/SpecialOffer";
import { GetStaticProps } from "next";
import { Product } from "../../../types/types";
import MiddleHeader1 from "../../../components/headers/MiddleHeader1";
import data from "../../../database/data.json";
import axios from "axios";
import axiosPrivet from "../../../library/axiosPrivet";

interface Products {
  products: Product[];
}

const Shop3 = ({ products }: Products) => {
  const [isLoading, setIsLoading] = useState(false);
  products.length = 8;

  if (!products) return <div>Loading</div>;

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
      <main className="bg-white">
        {/* ======== products start ======= */}
        <section className="pt-16 mx-auto">
          <Shop products={products} />
        </section>
        {/* ========  products end ======= */}
        {/* ======== subscribe & special offer start ======= */}
        <section className="mt-16 pb-[112px]  max-w-[1200px] mx-5 lg:mx-auto">
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

export default Shop3;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
