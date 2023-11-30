import React from "react";
import { Box, Container, Pagination } from "@mui/material";
import CountryFilter from "./components/CountryFilter";

import AllScolarshipCard from "./components/AllScolarshipCard";
import DropDownFilter from "./components/DropDownFilter";
import PageNameHeading from "../../components/Headings/PageNameHeading";
import BoldHeading from "../../components/Headings/BoldHeading";

const Scholarship = () => {
  return (
    <Container
      sx={{
        padding: "2rem 0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {/* page name */}
      <PageNameHeading>Scholarship</PageNameHeading>
      {/* study Abroad */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BoldHeading>Scholarships to study Abroad</BoldHeading>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CountryFilter />
          <DropDownFilter />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BoldHeading>Found 527 Scholarship</BoldHeading>
        <AllScolarshipCard />
      </Box>
      <Pagination
        count={10}
        sx={{
          alignItems: "center",
          "& .css-wjh20t-MuiPagination-ul": {
            width: "fit-content",
            margin: "0 auto",
          },
        }}
      />
    </Container>
  );
};

export default Scholarship;
