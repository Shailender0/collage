import { Box,Typography } from "@mui/material";
import React from "react";
import reviews from "./DataCol.jsx";
import CardCol from "./CardCol.jsx";
const  AllAnsCol = ({ getbgColor }) => {
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // marginTop:2,
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >       
    <Box sx={{marginTop:1}}>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 30,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        Most Viewed Questions
      </Typography>
    </Box>
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop:2,
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >      
      
      {reviews.map((Answer,index) => {
        return <CardCol key={index} {...Answer} getbgColor={getbgColor} />;
      })}

    </Box>
    </Box>
  );
};

export default AllAnsCol;