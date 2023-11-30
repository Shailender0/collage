import React from "react";
import SAMainBtn from "./../../components/Buttons/SAMainBtn";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Img from './images/canada.png';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
    console.log(`Search term: ${searchTerm}`);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // marginY: "2rem",
          // marginX: "4rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            borderRadius: "2rem",
            width: "100%",
            height: "500px",
            backgroundImage: `url(${Img})`,
            backgroundSize: "cover",
            backdropFilter: "blur(100px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontWeight: "600",
              textAlign: "center",
              color: "white",
              marginTop: "2rem",
            }}
          >
            Find Study Abroad Universities and Programs
            <br />
            Step to Your Career
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <input
              style={{
                width: "700px",
                height: "60px",
                paddingLeft: "0.8rem",
                borderRadius: "0.5rem 0 0 0.5rem",
                border: "none",
              }}
              type="text"
              placeholder="Search University and Programs..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                fontweight: "500",
                backgroundColor: "#7B90FF",
                padding: "0.2rem 1rem 0.2rem 1rem",
                color: "white",
                textTransform: "capitalize",
                borderRadius: "0 0.5rem 0.5rem 0",
              }}
            >
              Search Course
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "1rem",
              padding: "0.5rem",
              paddingX: "1rem",
              borderRadius: "0.5rem",
              marginTop: '2rem'
            }}
          >
            Need Help? Get 1 on 1 Counselling
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;