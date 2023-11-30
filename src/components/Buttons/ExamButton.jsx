import React from "react";
import { Box } from "@mui/material";

const ExamButton = ({ label, link }) => {
  return (
      <Box 
        sx={{
            fontFamily: 'Poppins',
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "16px",
            textTransform: "uppercase",
            color: "#210366",
        }}href={link}
        >
          {label}
        </Box>
  );
};

export default ExamButton;
