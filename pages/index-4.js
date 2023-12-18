import React from "react";
import Layout from "../components/layout/Layout";
import AboutOne from "../components/sections/AboutOne";
import AboutTwo from "../components/sections/AboutTwo";
import ClientOne from "../components/sections/ClientOne";
import CountryOne from "../components/sections/CountryOne";
import CtaOne from "../components/sections/CtaOne";
import FaqOne from "../components/sections/FaqOne";
import FeatureOne from "../components/sections/FeatureOne";
import FeatureTwo from "../components/sections/FeatureTwo";
import FunFactOne from "../components/sections/FunFactOne";
import GalleryOne from "../components/sections/GalleryOne";
import NewsOne from "../components/sections/NewsOne";
import VisaOne from "../components/sections/VisaOne";
import TestimonialOne from "../components/sections/TestimonialOne";
import TrainingOne from "../components/sections/TrainingOne";
import WhyChooseOne from "../components/sections/WhyChooseOne";
import AnimatedSlider from "../components/slider/AnimatedSlider";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <AnimatedSlider />
        <FeatureOne />
        <AboutOne />
        <CountryOne />
        <VisaOne />
        <FeatureTwo />
        <TestimonialOne />
        <AboutTwo />
        <ClientOne />
        <FunFactOne />
        <GalleryOne />
        <WhyChooseOne />
        <TrainingOne />
        <FaqOne />
        <CtaOne />
        <NewsOne />
      </Layout>
    </>
  );
}
