import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import AboutOne from "../components/sections/AboutOne";
import CountryOne from "../components/sections/CountryOne";
import VisaOne from "../components/sections/VisaOne";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="About Us" />
        <AboutOne />
        <CountryOne />
        <VisaOne />
      </Layout>
    </>
  );
}
