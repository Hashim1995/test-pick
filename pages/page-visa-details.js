import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import VisaDetails from "../components/sections/VisaDetails";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Visa Details" />
        <VisaDetails />
      </Layout>
    </>
  );
}
