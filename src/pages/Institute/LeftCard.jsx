import React from "react";
import { Box } from "@mui/material";
import { Typography, CardContent } from "@mui/material";
import Dropdown from "../../components/Cards/LeftDropDownMenuCard";

const LeftCard = () => {
  return (
    <Box
      sx={{
        minWidth: "32%",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: " 0px 0px 40px 0px rgba(123, 144, 255, 0.15)",
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: "1000",
            lineHeight: "21px",
            textAlign: "left",
            color: "#210366",
          }}
        >
          Found 6715 Institue
        </Typography>
      </CardContent>
      <Dropdown />
    </Box>
  );
};

export default LeftCard;
