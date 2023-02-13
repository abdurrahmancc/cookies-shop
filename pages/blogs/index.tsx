import React from "react";
import BlogSec from "../../components/blogs/BlogSec";
import Footer from "../../components/footer/Footer1";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import SEO from "../../components/SEO/SEO";
import BreadCrumbBanner from "../../components/shared/Breadcrumb/BreadCrumbBanner";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "blog", value: "/blog" },
];

const Blogs = () => {
  return (
    <>
      <SEO pageTitle="blogs" />
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
        <BreadCrumbBanner breadcrumbData={breadcrumbData} />
        {/* =========== banner end ======== */}
      </header>
      <main className="bg-white">
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <BlogSec />
        </section>

        {/* ======== Newsletter start ======= */}
        <section className="mt-[100px] ">
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

export default Blogs;
