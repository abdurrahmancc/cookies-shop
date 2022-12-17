import Head from "next/head";
import React from "react";
import AboutSec from "../../components/about/AboutSec";
import Categories from "../../components/about/Categories";
import Services from "../../components/about/Services";
import Footer from "../../components/footer/Footer";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const About = () => {
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
        <section className="max-w-[1200px] pt-[100px] lg:mx-auto mx-5">
          <AboutSec />
        </section>
        <section className="max-w-[1200px] mt-[100px] lg:mx-auto mx-5">
          <Services />
        </section>
        <section className="mt-[146px]">
          <Categories />
        </section>

        {/* ======== Newsletter start ======= */}
        <section className="max-w-[1200px] pb-[60px] mt-[100px] lg:mx-auto mx-5">
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

export default About;
