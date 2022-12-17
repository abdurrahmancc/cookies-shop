import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import WishlistTable from "../../components/wishlist/WishlistTable";
import { useAppDispatch, useAppSelector } from "../../redux/app/reduxHooks";
import { removeToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { Product } from "../../types/types";

interface Products {
  products: Product[];
}

const Wishlist = ({ products }: Products) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Cookies Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
        <Banner1 />
        {/* =========== banner end ======== */}
      </header>
      <main className="bg-white">
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <WishlistTable products={products} />
        </section>
        <section className="max-w-[1200px] text-[#643001] font-[700] mt-[100px] lg:mx-auto mx-5">
          <h3 className="text-[34px] text-center leading-[40px]">Add to Various Favorite Items</h3>
          <div className="mt-[50px]">
            <button
              onClick={() => router.push("/shop")}
              style={{ boxShadow: ` 0px 4px 4px rgba(0,0,0,0.25)` }}
              className="text-[20px] mx-auto box-border border-primary rounded-[4px] border h-[60px] w-[286px] bg-gradient-to-r from-primary to-primary btn-animate hover:text-white flex justify-center items-center"
            >
              Return To Shop
            </button>
          </div>
        </section>
        {/* ======== Newsletter start ======= */}
        <section className="max-w-[1200px] mt-[100px] lg:mx-auto mx-5">
          <Newsletter />
        </section>
        {/* ======== Newsletter end ======= */}
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

export default Wishlist;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
