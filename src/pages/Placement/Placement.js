import { Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import BasicTable from "./component/BasicTable";
import Alltable from "./component/Alltable";
import Highest from "./component/Highest";
import Faq from "./component/Faq";
// import Graph from "./component/Graph";
import Barrtwo from "./component/Barrtwo";
import LabelingBar from "./component/LabelingBar";
import HeroSection from "./component/HeroSection";
import Part from "./component/Part";

const Placement = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <Part />
        <BasicTable />
        <Alltable />
        <Faq />
        <Highest />
        {/* <Graph /> */}
        <LabelingBar />
        <Barrtwo />
      </Container>
    </>
  );
};
export default Placement;
