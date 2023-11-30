import React from "react";
import { Box, Button, Stack } from "@mui/material";
import Books from './assets/Books.png';
import Character from './assets/Character.png';
import Plant from './assets/Plant.png'
import SearchBar from "../SearchBar";


const Course = () => {

 
  return (
    <>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        
        sx={{
          marginTop: "2rem",
          gap: 2,
        }}
      >
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          BTech
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          MBA
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          MBBS
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Law
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Science
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Study Abord
        </Button>
        <Button
          sx={{
            opacity: 0.8,
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          All Course
        </Button>
      </Stack>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        justifyContent={'space-around'}
        sx={{
          marginTop: "2rem",
          gap: 2,
        }}
      >
        <Box
          sx={{
            color: "#210366",
            fontSize: 30,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          List of Top courses in Indian Colleges 2023
        </Box>
        <Box> 
        <img
        src={Books}
        alt="background"
        style={{
          width: "5vw",
          height: "8vh",
          marginRight:'0.8rem'
          
        }}/>
        <img
        src={Character}
        alt="background"
        style={{
          width: "8vw",
          height: "13vh",
          marginRight:'0.8rem'
          
          
        }}/>
        <img
        src={Plant}
        alt="background"
        style={{
          width: "3vw",
          height: "10vh",
          
        }}/>
       </Box>
      </Stack>
      <Stack 
      sx={{
        display: "flex",
        flexDirection: "",
        flexWrap: "wrap",
        alignItems: "left",
      }} >
       
        <SearchBar placeholder="Search Goals" />
      
    </Stack>
    </>
  );
};

export default Course;
