import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Footer from "../../components/footer/Footer1";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import TopProductDetails from "../../components/productDetails/TopProductDetails";
import { Product } from "../../types/types";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import data from "../../database/data.json";
import axios from "axios";
import BottomProductDetails from "../../components/productDetails/BottomProductDetails";
import RelatedItems from "../../components/productDetails/RelatedItems";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import SEO from "../../components/SEO/SEO";

interface ProductModel {
  product: Product;
  products: Product[];
}

const Details = ({ product, products }: ProductModel) => {
  const breadcrumbData = [
    { label: "Shop", value: "/shop" },
    { label: product?.name, value: product?._id },
  ];

  return (
    <div className="bg-[#ffffff]">
      <SEO pageTitle={product?.name} />
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
        {/* =========== breadcrumb start ======== */}
        <Breadcrumb breadcrumbData={breadcrumbData} />
        {/* =========== breadcrumb end ======== */}
      </header>
      <main>
        <section className="max-w-[1200px] pt-[26px] lg:mx-auto mx-5">
          <TopProductDetails product={product} />
        </section>
        <section className="max-w-[1200px] mt-16 lg:mx-auto mx-5">
          <BottomProductDetails product={product} />
        </section>
        {/* =========== Related Items start ========== */}
        <section className="max-w-[1200px] mt-16 lg:mx-auto mx-5">
          <RelatedItems products={products} />
        </section>
        {/* =========== Related Items start ========== */}

        {/* ======== Newsletter start ======= */}
        <section className="mt-8">
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
    </div>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();

  const paths = products.map((product: any) => ({
    params: {
      id: product._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch(`https://cookies-shop.vercel.app/api/products/${id}`);
  const product = await res.json();
  const responds = await fetch(`https://cookies-shop.vercel.app/api/products`);
  const products = await responds.json();
  return {
    props: {
      product,
      products,
    },
  };
};
