import React from 'react';
import { useState, useEffect } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';

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
  const [images, setImages] = useState([
    'Main.png',
    'Main2.png',
    'Main3.png',
    'Main4.png',

  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginY: "2rem",
          marginX: "4rem",
          flexWrap: "wrap"
        }}>
        <Box
          sx={{
            borderRadius: "2rem", width: "1200px", height: "500px",
            backgroundImage: `url(${images[currentIndex]})`,
            backdropFilter: "blur(100px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",

          }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontWeight: "600",
              textAlign: "center",
              color: "white",
              marginTop: "-2rem"

            }}>
            Find Over A Thousand Colleges Across India<br />Step to Your Career
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem"

            }}>
            <input
              style={{
                width: "700px",
                height: "60px",
                paddingLeft: "0.8rem",
                borderRadius: "0.5rem 0 0 0.5rem",
                border: "none"
              }}
              type="text"
              placeholder="Search for colleges, exams, courses and more..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant='conatined'
              sx={{
                fontFamily: "Poppins",
                fontweight: "500",
                backgroundColor: "#7B90FF",
                padding: "0.2rem 1rem 0.2rem 1rem",
                color: "white",
                textTransform: "capitalize",
                borderRadius: "0 0.5rem 0.5rem 0",

              }}>
              Search Course
            </Button>

          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem"
            }}>
            <Button variant='contained'
              sx={{
                backgroundColor: "white",
                color: "#7B90FF",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: "550",
                width: "200px",
                height: "60px",
                textTransform: "capitalize",
                marginRight: "1rem"
              }}>
              Popular Courses
            </Button>
            <Button variant='contained'
              sx={{
                backgroundColor: "white",
                color: "#7B90FF",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: "550",
                width: "200px",
                height: "60px",
                textTransform: "capitalize",
                marginRight: "1rem"
              }}>
              Popular Career
            </Button>
          </Box>
          <Box sx={{
            width: "800px",
            height: "100px",
            backgroundColor: "#160048",
            zIndex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.8rem",
            position: "absolute",
            marginBottom: "-30.5rem",
            padding: "0.8rem"
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Avatar src="Vector.png" alt="">

              </Avatar>
              <Typography sx={{
                fontWeight: "550",
                fontFamily: "Poppins",
                color: "white",
                marginLeft: "0.5rem"
              }}>
                25,000+ Special Colleges
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Avatar src="Vector (1).png" alt="">

              </Avatar>
              <Typography sx={{
                fontWeight: "550",
                fontFamily: "Poppins",
                color: "white",
                marginLeft: "0.5rem"
              }}>
                450,000+ Enrolled Students
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Avatar src="Vector 442.png" alt="">

              </Avatar>
              <Typography sx={{
                fontWeight: "550",
                fontFamily: "Poppins",
                color: "white",
                marginLeft: "0.5rem"
              }}>
                50,000+ Course Professionals
              </Typography>
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default HeroSection;
