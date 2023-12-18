import React from "react";
import Layout from "../components/layout/Layout";
import CountryInner from "../components/sections/CountryInner";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Country Grid" />
        <CountryInner />
      </Layout>
    </>
  );
}
