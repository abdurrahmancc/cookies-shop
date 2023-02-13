import React from "react";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import UserOrders from "../../components/dashboard/UserOrders";
import SEO from "../../components/SEO/SEO";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer1";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "Dashboard", value: "/dashboard/userDashboard" },
  { label: "Order", value: "/dashboard/order" },
];

const OrdersPage = () => {
  return (
    <>
      <SEO pageTitle="dashboard" />
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
      <main className="bg-[#ffffff]">
        <section className="max-w-[1200px] pt-16 lg:mx-auto mx-5">
          <UserOrders />
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

export default OrdersPage;
