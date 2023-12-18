import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layout/Layout";
import AboutFive from "../components/sections/AboutFive";
import BannerTwo from "../components/sections/BannerTwo";
import ClientThree from "../components/sections/ClientThree";
import CountryThree from "../components/sections/CountryThree";
import CtaThree from "../components/sections/CtaThree";
import FeatureFive from "../components/sections/FeatureFive";
import FeatureFour from "../components/sections/FeatureFour";
import FeatureThree from "../components/sections/FeatureThree";
import NewsThree from "../components/sections/NewsThree";
import ProcessTwo from "../components/sections/ProcessTwo";
import VisaTwo from "../components/sections/visaTwo";
import TestimonialThree from "../components/sections/TestimonialThree";
import TrainingThree from "../components/sections/TrainingThree";
import WhyChooseThree from "../components/sections/WhyChooseThree";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Layout HeaderStyle="three">
        <h1>{t("about")}</h1>
        <BannerTwo />
        <FeatureThree />
        <AboutFive />
        <CountryThree />
        <CtaThree />
        <VisaTwo />
        <WhyChooseThree />
        <FeatureFour />
        <TrainingThree />
        <ProcessTwo />
        <TestimonialThree />
        <FeatureFive />
        <NewsThree />
        <ClientThree />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
