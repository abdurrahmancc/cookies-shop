import Head from "next/head";
import React from "react";

type PageTitle = {
  pageTitle: string;
};

const SEO = ({ pageTitle }: PageTitle) => {
  return (
    <Head>
      <title>{pageTitle && pageTitle + "-"} Cookies Shop</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;