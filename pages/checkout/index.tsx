import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import BillingDetailsForm from "../../components/checkout/BillingDetailsForm";
import CheckoutTable from "../../components/checkout/CheckoutTable";
import Footer from "../../components/footer/Footer1";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import SEO from "../../components/SEO/SEO";
import BreadCrumbBanner from "../../components/shared/Breadcrumb/BreadCrumbBanner";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import { useAppSelector } from "../../redux/app/reduxHooks";
import { Product } from "../../types/types";

type FromData = {
  searchItems: string;
};

type Products = {
  products: Product[];
};

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "Checkout", value: "/checkout" },
];

const Checkout = ({ products }: Products) => {
  const { cart } = useAppSelector((state) => state);
  const { query } = useRouter();

  const [items, setItems] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  useEffect(() => {
    let result: Product[] = [];
    products &&
      products.forEach((product: Product) => {
        cart.carts.filter((key: string) => {
          let quantity: any = cart.shoppingCartQuantity;
          if (product._id == key) {
            product.quantity = quantity[key];
            result.push(product);
          }
        });
      });
    setItems(result);
  }, [products, cart.carts, cart.shoppingCartQuantity]);

  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(items, cart);

  return (
    <>
      <SEO pageTitle="checkout" />
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
      <main className="bg-[#FFFFFF]">
        <section className="max-w-[1200px] pt-16 lg:mx-auto mx-5">
          <form onSubmit={onSubmit}>
            <div className="flex gap-8">
              <div className="max-w-[700px] w-full">
                <h3 className="bg-primary text-[20px] text-center leading-6 font-[500] pl-5 py-6 text-white">
                  Billing Information
                </h3>
                <div className="mt-[26px]">
                  <BillingDetailsForm register={register} errors={errors} />
                </div>
              </div>
              <div className="max-w-[468px] w-full">
                <h3 className="bg-primary text-[20px] text-center leading-6 font-[500] pl-5 py-6 text-white">
                  YOUR ORDER
                </h3>
                <div className="mt-[26px]">
                  {query ? (
                    <CheckoutTable cartProducts={items} onSubmit={onSubmit} />
                  ) : (
                    <CheckoutTable cartProducts={cart.carts} onSubmit={onSubmit} />
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* ======== Newsletter start ======= */}
        <section className="mt-[100px]">
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

export default Checkout;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://cookies-shop.vercel.app/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
