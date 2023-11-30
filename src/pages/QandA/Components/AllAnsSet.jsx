import { Box, Typography } from "@mui/material";
import React from "react";
import reviews from "./DataSet.jsx";
import CardSet from "./CardSet.jsx";
const AllAnsSet = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        width: 431,
        // height: 1776,
        background: "white",
        marginRight:6,
        borderRadius: 8,
            }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-around",
           alignItems:"center",
          // width: 330,
          marginTop:3,
          // marginRight:50,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Found 6715 Institute
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              marginRight: 1,
            }}
          >
            Set default
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
            gap: "1rem",
          marginBottom: "2rem",
                }}
      >

          {reviews.map((Answer, index) => {
            return <CardSet key={index} {...Answer} getbgColor={getbgColor} />;
          })}
      
      </Box>
    </Box>
  );
};

export default AllAnsSet;
