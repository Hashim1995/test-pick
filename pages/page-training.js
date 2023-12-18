import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TrainingInner from "../components/sections/TrainingInner";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Training Grid" />
        <TrainingInner />
      </Layout>
    </>
  );
}
