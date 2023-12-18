import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TrainingDetails from "../components/sections/TrainingDetails";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Training Details" />
        <TrainingDetails />
      </Layout>
    </>
  );
}
