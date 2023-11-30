import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CollegeCardsthree = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: "2rem",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "400px",
          width: "273px",
          height: "254.94px",
          backgroundColor: "white",
          marginX: "3rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
          borderRadius: "28px",
          overflow: "hidden", // Ensure the content is clipped within the curved borders
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            height: "111.54px", // Set the fixed height for the image
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: "273px", // Set the width of the image
              height: "111.54px", // Set the height of the image
              borderRadius: "28px", // Add curve to the image
            }}
            src={props.img}
            alt=""
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#111",
              padding: "4px", // Adjusted padding to make it smaller
              borderRadius: "12px",
              height: "fit-content", // Adjusted height to fit the content
              width: "fit-content", // Adjusted width to fit the content
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "5px", // Adjusted font size to make it smaller
              lineHeight: "6px", // Adjusted line height to make it smaller
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                margin: 0, // Remove default margin
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box>
            <FavoriteBorderIcon
              sx={{
                fontSize: "16px",
                color: "#FFC72C",
                "&:hover": {
                  color: "white",
                },
              }}
            />
          </Box>
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginX: "2rem",
          }}
        >
          <img src={props.icon} />
        </Stack>

        <Typography
          sx={{
            textAlign: "center",            
            fontSize: "1rem",
            fontFamily: "Poppins",
            fontWeight: "700",
            marginX: "1rem",
            marginTop: "0.5rem",
            color: "#210366",
            height: "3.5rem", // Set a fixed height for the content
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.contents}
        </Typography>
        <Box
          sx={{
            width: "80%",
            opacity: "0.7",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <hr />
        </Box>
        <Link href="#">
          <Typography
            sx={{
              color: "#FFC72C",
              display: "flex",
              justifyContent: "center",
              padding: "5px",
              marginBottom: "6px",
            }}
          >
            {props.content_link}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default CollegeCardsthree;
