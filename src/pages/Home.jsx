import { Typography } from "@mui/material";
import React from "react";
import { Banner, Faqs, Work, WorkMethod } from "../components/home";

function Home() {
  return (
    <>
      <Banner />
      <WorkMethod />
      <Work />
      <Faqs />
    </>
  );
}

export default Home;
