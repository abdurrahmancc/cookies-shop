import Head from "next/head";
import Image from "next/image";
import { useEffect, memo, useMemo } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import TopHeader1 from "../components/headers/TopHeader1";
import BottomHeader1 from "../components/headers/BottomHeader1";
import Banner1 from "../components/home/banner/Banner1";
import AboutCookies from "../components/home/AboutCookies";
import DealsProduct from "../components/home/dealsProduct/DealsProduct";
import PopularProducts from "../components/home/popularProducts/PopularProducts";
import TopGiftProducts from "../components/home/topGiftProducts/TopGiftProducts";
import DarkProduct from "../components/home/darkProduct/DarkProduct";
import Newsletter from "../components/shared/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import ScrollUpBtn from "../components/shared/ScrollUpBtn";
import MiddleHeader1 from "../components/headers/MiddleHeader1";
import { GetStaticProps } from "next";
import { Product } from "../types/types";
import { useAppDispatch, useAppSelector } from "../redux/app/reduxHooks";
import { fetchWishlist } from "../redux/features/wishlist/wishlistSlice";

interface Products {
  products: Product[];
}

const Home = ({ products }: Products) => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleIncrese = () => {
    // dispatch(ordered(1));
  };

  let results: Product[] = [];

  const keys = ["6391e205bb97e83bf5c2119e", "6391e209bb97e83bf5c211a0"];
  products.forEach((product) => {
    keys.filter((key) => {
      if (key === product._id) {
        results.push(product);
      }
    });
  });

  console.log(results);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  console.log(state);

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
      <main className="bg-[#FFFAF3]">
        {/* ======== about cookies start ======= */}
        <section>
          <AboutCookies />
        </section>

        {/* ======== about cookies end ======= */}
        {/* ======== deals products start ======= */}
        <section className="max-w-[1200px] mt-[23px] lg:mx-auto mx-5">
          <DealsProduct />
        </section>
        {/* ======== deals products end ======= */}
        {/* ======== Popular Products start ======= */}
        <section className="max-w-[1200px] mt-4 lg:mx-auto mx-5">
          <PopularProducts products={products} />
        </section>
        {/* ======== Top Products end ======= */}
        {/* ======== Popular Gift Products start ======= */}
        <section className="max-w-[1200px] mt-4 lg:mx-auto mx-5">
          <TopGiftProducts />
        </section>
        {/* ======== Popular Gift Products end ======= */}
        {/* ======== dark chocolate Products start ======= */}
        <section className="max-w-[1200px] mt-4 lg:mx-auto mx-5">
          <DarkProduct />
        </section>
        {/* ======== DARK chocolate Products end ======= */}
        {/* ======== Newsletter start ======= */}
        <section className="max-w-[1200px] mt-5 lg:mx-auto mx-5">
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

export default Home;

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
