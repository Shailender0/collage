import { Box } from "@mui/material";
import React from "react";
import reviews from "./Data.js";
import Card from "./Card.jsx";
const  AllAnsCard = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {reviews.map((Answer,index) => {
        return <Card key={index} {...Answer} getbgColor={getbgColor} />;
      })}

    </Box>
  );
};

export default AllAnsCard;