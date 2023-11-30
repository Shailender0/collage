import React from "react";
import { Box, Typography, Button } from "@mui/material";
import gift from "../Assets/gift.png";
const SignIn = () => {
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
         background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        width: 554,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box>
        <img
          src={gift}
          alt="gift.png"
          style={{ width: 390, height: 298, alignItems: "center" }}
        />
      </Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        ANSWER THE FOLLOWING
      </Typography>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        QUESTIONS AND WIN ₹ 20
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-evenly",
          //         alignItems:"space-between"
        }}
      >
        <Button
          sx={{
            background: "#FF7900",
            color: "white",
            fontSize: 18,
            fontWeight:"400",
            wordWrap: "break-word",

          }}
        >
          Sign In
        </Button>
        <Button
          sx={{
            background: "white",
            alignItems: "center",
            color: "#210366",
            fontSize: 18,
            fontWeight:400,
            fontFamily: "Poppins",
            wordWrap: "break-word",
            marginLeft:15,
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        Check Terms and Conditions
      </Typography>
    </Box>
  );
};

export default SignIn;
