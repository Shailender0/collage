import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import LeftCard from "./LeftCard";
import CountryFilter from "./CountryFilter";
import PageTitle from "../../components/Headings/PageTitle";
import RatingBox from "../../components/Cards/RatingBox";
import AllRightCards from "./RightCard";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import RatingFooter from "../../components/Cards/RatingFooter";

const Institute = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "2rem 0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {/* page name */}
      <PageTitle title="Indian Institute" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopCollegeHeading text="List of Top Institute in Indian Based on 2023 Ranking" />

        <Box sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <CountryFilter />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <LeftCard />
          <AllRightCards />
        </Box>
      </Box>
      <RatingFooter />
    </Container>
  );
};

export default Institute;
