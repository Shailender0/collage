import { Box, Button } from "@mui/material";
import React from "react";

const ViewMoreButton = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          width: "fit",
          height: "3rem",
          boxSizing: "border-box",
          border: "5px solid #7B90FF",
          borderRadius: "12px",
          // padding:'1rem 2rem',
          color: "#41355D",
          textAlign: "center",
          justifyContent: "center",
          fontFamily: "Poppins",
          fontSize: "0.8rem",
          fontWeight: "600",
          textTransform: "none",
          '&:hover':{
            backgroundColor:'#7B90FF',
            border: "5px solid #7B90FF",
            color:"white",
          }
        }}
      >
        View More
      </Button>
    </>
  );
};

export default ViewMoreButton;
