import React from "react";
import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "./Images/image.png";
import WhiteFilledBtn from "../../components/Buttons/WhiteFilledBtn";

const HeroSection = () => {
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
          marginY: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            borderRadius: "2rem",
            width: "100%",
            height: "600px",
            backgroundImage: `url(${img1})`, // Use backgroundImage property
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
              fontSize: "3rem",
              fontWeight: "700",
              textAlign: "center",
              color: "white",
              marginTop: "2rem",
            }}
          >
            Get Admission in Best Colleges
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontWeight: "600",
              textAlign: "center",
              color: "white",
            }}
          >
            Step to your Career
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
              placeholder="Search for colleges, exams, courses and more..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                fontweight: "500",
                backgroundColor: "#7B90FF",

                color: "white",
                textTransform: "capitalize",
                borderRadius: "0 0.5rem 0.5rem 0",
              }}
            >
              Search colleges
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <WhiteFilledBtn label="Choose Colleges" link="" />
            <WhiteFilledBtn label="Search Courses" link="" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "1rem",
            }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            ></Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginBottom: "0.5rem",
              }}
            ></Stack>
          </Box>
          <Box
            sx={{
              backgroundColor: "#7B90FF",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1rem",
              padding: "0.5rem",
              paddingX: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            Need Help? Get 1 on 1 Counselling
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
