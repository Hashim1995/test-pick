import React from "react";
import Layout from "../components/layout/Layout";
import AboutFour from "../components/sections/AboutFour";
import AboutThree from "../components/sections/AboutThree";
import BannerOne from "../components/sections/BannerOne";
import ClientTwo from "../components/sections/ClientTwo";
import CountryTwo from "../components/sections/CountryTwo";
import FaqTwo from "../components/sections/FaqTwo";
import FunFactTwo from "../components/sections/FunFactTwo";
import GalleryTwo from "../components/sections/GalleryTwo";
import NewsTwo from "../components/sections/NewsTwo";
import ProcessOne from "../components/sections/ProcessOne";
import TeamOne from "../components/sections/TeamOne";
import TestimonialTwo from "../components/sections/TestimonialTwo";
import TrainingTwo from "../components/sections/TrainingTwo";
import WhyChooseTwo from "../components/sections/WhyChooseTwo";

export default function Home2() {
  return (
    <>
      <Layout HeaderStyle="two">
        <BannerOne />
        <TrainingTwo />
        <AboutThree />
        <CountryTwo />
        <AboutFour />
        <ProcessOne />
        <GalleryTwo />
        <TeamOne />
        <WhyChooseTwo />
        <FunFactTwo />
        <TestimonialTwo />
        <ClientTwo />
        <NewsTwo />
        <FaqTwo />
      </Layout>
    </>
  );
}
