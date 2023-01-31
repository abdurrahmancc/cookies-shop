import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BillingDetailsForm from "../../components/checkout/BillingDetailsForm";
import CheckoutTable from "../../components/checkout/CheckoutTable";
import Footer from "../../components/footer/Footer";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import SEO from "../../components/SEO/SEO";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import { useAppSelector } from "../../redux/app/reduxHooks";

type FromData = {
  searchItems: string;
};

const Checkout = () => {
  const { cart } = useAppSelector((state) => state);
  const [product, setProduct] = useState<any>([]);
  const { query } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  const onSubmit = handleSubmit((data) => console.log(data));
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
        <Banner1 />
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
                    <CheckoutTable cartProducts={product} onSubmit={onSubmit} />
                  ) : (
                    <CheckoutTable cartProducts={cart.carts} onSubmit={onSubmit} />
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* ======== Newsletter start ======= */}
        <section className="max-w-[1200px] pb-[48px] mt-[100px] lg:mx-auto mx-5">
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
