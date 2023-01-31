import React from "react";
import BlogSec from "../../components/blogs/BlogSec";
import Faq from "../../components/Faq/Faq";
import FaqQuestionForm from "../../components/Faq/FaqQuestionForm";
import Footer from "../../components/footer/Footer";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import SEO from "../../components/SEO/SEO";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const FaqPage = () => {
  return (
    <>
      <SEO pageTitle="faq" />
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
          <Faq />
        </section>
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <FaqQuestionForm />
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

export default FaqPage;
