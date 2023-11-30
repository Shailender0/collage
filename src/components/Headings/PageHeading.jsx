import React from "react";
import { Box, Typography } from "@mui/material";

const TopCollegeHeading = (props) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "2rem",
          textAlign: "left",
          color: "#41355D",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

export default TopCollegeHeading;
