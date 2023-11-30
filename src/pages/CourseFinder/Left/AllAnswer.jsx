import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import reviews from "./Data"
import Card from "./Card.jsx";
const AllAnsSet = () => {
  return (
    <Stack>
        <Box>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 25,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              marginTop:5
            }}
          >
            Found 17175 Course
          </Typography>
        
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          
          gap:1
          }} >

          {reviews.map((Answer, index) => {
            return <Card key={index} {...Answer}  />;
          })}
      
      </Stack>
    </Stack>
  );
};

export default AllAnsSet;