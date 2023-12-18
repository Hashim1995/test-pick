import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import CountryDetails from "../components/sections/CountryDetails";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Country Details" />
        <CountryDetails />
      </Layout>
    </>
  );
}
