import React from "react";
import { Typography, Box, Link, Stack, Container } from "@mui/material";

const TrendingCard = (props) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "0.5rem", 
          width: "340px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#210366",
            marginBottom: "1rem",
          }}
        >
          {props.heading}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#210366",
              marginTop: "0.5rem",
              marginLeft:"1rem",
              paddingTop:"0.5rem",
            }}
          >
            <Link href="#" underline="none" color="#210366" sx={{}}>
              {props.content1}
            </Link>

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
                
              }}
            >
              {props.date}
            </Typography>
            <Box
              sx={{ borderBottom: "1px solid #7F56DA4D", paddingTop: "0.5rem" }}
            ></Box>
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#210366",
              marginTop: "0.5rem",
              marginLeft:"1rem"
            }}
          >
            <Link href="#" underline="none" color="#210366">
              {props.content2}
            </Link>

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
              }}
            >
              {props.date}
            </Typography>
            <Box
              sx={{ borderBottom: "1px solid #7F56DA4D", paddingTop: "0.5rem" }}
            ></Box>
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#210366",
              marginTop: "0.5rem",
              marginLeft:"1rem"
            }}
          >
            <Link href="#" underline="none" color="#210366">
              {props.content3}
            </Link>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
              }}
            >
              {props.date}
            </Typography>
            <Box
              sx={{ borderBottom: "1px solid #7F56DA4D", paddingTop: "0.5rem" }}
            ></Box>
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#210366",
              marginTop: "0.5rem",
              marginLeft:"1rem"
            }}
          >
            <Link href="#" underline="none" color="#210366">
              {props.content4}
            </Link>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
              }}
            >
              {props.date}
            </Typography>
            <Box
              sx={{ borderBottom: "1px solid #7F56DA4D", paddingTop: "0.5rem" }}
            ></Box>
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#210366",
              marginTop: "0.5rem",
              marginLeft:"1rem",
              paddingBottom:"0.5rem"
            }}
          >
            <Link href="#" underline="none" color="#210366">
              {props.content5}
            </Link>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
              }}
            >
              {props.date}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TrendingCard;
