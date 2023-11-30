import React from "react";
import data from "../utils/data";
import ScolarshipCard from "./ScolarshipCard";
import { Box } from "@mui/material";

const AllScolarshipCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {data.map((scholarship, index) => (
        <ScolarshipCard key={index} {...scholarship} />
      ))}
    </Box>
  );
};

export default AllScolarshipCard;
