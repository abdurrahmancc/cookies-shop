import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import BlogComments from "../../components/blogDetails/BlogComments";
import BlogDetails from "../../components/blogDetails/BlogDetails";
import Footer from "../../components/footer/Footer1";
import BottomHeader1 from "../../components/headers/BottomHeader1";
import MiddleHeader1 from "../../components/headers/MiddleHeader1";
import TopHeader1 from "../../components/headers/TopHeader1";
import Banner1 from "../../components/home/banner/Banner1";
import SEO from "../../components/SEO/SEO";
import Newsletter from "../../components/shared/newsletter/Newsletter1";
import ScrollUpBtn from "../../components/shared/ScrollUpBtn";
import { blogsData } from "../../database/models/data";
import { BlogsDataModel } from "../../types/types";
import RelatedPosts from "../../components/blogDetails/RelatedPosts";
import BreadCrumbBanner from "../../components/shared/Breadcrumb/BreadCrumbBanner";

type Props = {
  blog: BlogsDataModel;
  blogs: BlogsDataModel[];
};

const breadcrumbData = [
  { label: "home", value: "/" },
  { label: "Blog Details", value: "/blogs" },
];

const BlogDetailsPage = ({ blog, blogs }: Props) => {
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
          <BlogDetails blog={blog} />{" "}
        </section>
        {/* =========== blog comment start ============= */}
        <section className="max-w-[1200px] lg:mx-auto mx-5">
          <BlogComments />{" "}
        </section>
        {/* =========== blog comment end ============= */}
        {/* =========== blog Related Posts start ============= */}
        <section className="max-w-[1200px] pt-[64px] lg:mx-auto mx-5">
          <RelatedPosts blogs={blogs} />
        </section>
        {/* =========== blog Related Posts end ============= */}

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

export default BlogDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = blogsData;
  const paths = blogs.map((blog: any) => ({
    params: {
      id: blog._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const blogs = blogsData;
  const blog = blogs.find((prod) => prod?._id === id);

  return {
    props: {
      blog,
      blogs,
    },
  };
};
