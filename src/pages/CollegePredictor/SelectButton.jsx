import React from "react";
import FilterButton from "../../components/Buttons/FilterButton";
import { Box, Typography } from "@mui/material";
import BoldHeading from "./Components/BoldHaeding";
import PageNameHeading from "../Institutes/Components/PageNameHaeding";
import Bar from './Bar'
const SelectButton = () => {
  return (
    <Box>
      <Box sx={{marginTop:"2rem"}}>
      <PageNameHeading>College Pridictor</PageNameHeading>
      </Box>

      <BoldHeading >
      College Predictor 2023 for JEE Main, NEET, DU and other top 
      Universities and Exams
      </BoldHeading>

      <Bar/>


      <Box sx={{ display: "flex", gap: "1rem", alignItems: "flex-start", }}>
        <BoldHeading>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontSize: "1rem",
              lineHeight: "2rem",
              letterSpacing: "0em",
              color: "#2F1370",
              fontWeight: "500",
              marginBottom: "1rem",
            }}
          >
            Select Course Tag :
          </Typography>
        </BoldHeading>
        <FilterButton>BE/B.Tech</FilterButton>
        <FilterButton>BA</FilterButton>
        <FilterButton>B.Sc</FilterButton>
        <FilterButton>M.Com</FilterButton>
        <FilterButton>B.Ed</FilterButton>
        <FilterButton>B.Com</FilterButton>
        <FilterButton>M.Sc</FilterButton>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <BoldHeading>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontSize: "1rem",
              lineHeight: "2rem",
              letterSpacing: "0em",
              color: "#2F1370",
              fontWeight: "500",
              marginBottom: "1rem",
            }}
          >
            Select State :
          </Typography>
        </BoldHeading>
        <FilterButton>Andhra Pradesh</FilterButton>
        <FilterButton>Tamil Nadu</FilterButton>
        <FilterButton>Delhi</FilterButton>
        <FilterButton>Kerala</FilterButton>
        <FilterButton>Madhya Pradesh</FilterButton>
      </Box>
    </Box>
  );
};

export default SelectButton;
