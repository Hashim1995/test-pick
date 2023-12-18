import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import VisaInner from "../components/sections/VisaInner";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Visa Grid" />
        <VisaInner />
      </Layout>
    </>
  );
}
