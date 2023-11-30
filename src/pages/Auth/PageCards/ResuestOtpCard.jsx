import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
import OtpCard from "../components/OtpCard";
const ResuestOtpCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "900px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        gap: "1rem",
      }}
    >
      <LeftCard />
      <OtpCard />
    </Box>
  );
};

export default ResuestOtpCard;
