import React from "react";
import { Box, Typography } from "@mui/material";
import RatingBox from "./RatingBox";

const RatingFooter = () => {
    return (
        <Box
        sx={{
          display: "flex",
          paddingTop:"2rem",
          paddingBottom:"2rem",
          flexDirection: "column",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            lineHeight: "3rem",
            letterSpacing: "0em",
            color: "#2F1370",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          How likely are you to recommend collegedunia.com to a friend or a colleague?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            marginBottom: "",
          }}
        >
          <RatingBox>1</RatingBox>
          <RatingBox>2</RatingBox>
          <RatingBox>3</RatingBox>
          <RatingBox>4</RatingBox>
          <RatingBox>5</RatingBox>
          <RatingBox>6</RatingBox>
          <RatingBox>7</RatingBox>
          <RatingBox>8</RatingBox>
          <RatingBox>9</RatingBox>
          <RatingBox>10</RatingBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "rgba(33, 3, 102, 1)",
              fontFamily: "Poppins",
              fontSize: "1rem",
              marginLeft: "-1.7rem",
              lineHeight: "3rem",
              letterSpacing: "0em",
            }}
          >
            Not so likely
          </Typography>
          <Typography
            sx={{
              color: "rgba(33, 3, 102, 1)",
              fontFamily: "Poppins",
              fontSize: "1.25rem",
              lineHeight: "3rem",
              marginRight: "-2.5rem",
              letterSpacing: "0em",
              fontWeight: "bold",
            }}
          >
            Highly likely
          </Typography>
        </Box>
      </Box>
    );
}

export default RatingFooter;