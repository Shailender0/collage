import { Box, Container, Stack } from "@mui/material";
import React from "react";

import Card from "./Card";
import Admission2023Data from "./DataFile";
import HeroSection from "./HeroSection";
import PageTitle from "../../components/Headings/PageTitle";
import { Typography } from "@mui/material";
import RatingBox from "../../components/Cards/RatingBox";
import { Pagination } from "@mui/material";
import RatingFooter from "../../components/Cards/RatingFooter";

const Admission2023 = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <PageTitle title="Admission 2023" />
      <HeroSection />
      <Stack direction="row" spacing={5} useFlexGap flexWrap="wrap">
        {Admission2023Data.map((val, index) => {
          return (
            <Card
              key={index}
              imag={val.imag}
              course={val.course}
              datee={val.datee}
              data={val.data}
              about={val.about}
            />
          );
        })}
      </Stack>
      <RatingFooter />
    </Container>
  );
};

export default Admission2023;
