import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import imgg from "./Images/1.png";

const Card = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          width: "340px",
          height: "390px",
          borderRadius: "28px",
          boxShadow: "0px 0px 40px 0px rgba(123, 144, 255, 0.20)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          margin: "0.5rem",
          paddingBottom: "1.5rem",
          textAlign: "left",
          position: "relative", // Add this line
        }}
      >
        <Avatar
          src={props.imag}
          sx={{
            height: "160px",
            width: "100%",
            borderRadius: "28px",
            backgroundColor: "white",
            margin: "0rem",
            padding: "0rem",
          }}
        >
          A
        </Avatar>

        {/* Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "0.5rem 1rem",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "0rem",
                fontSize: "0.7rem",
                lineHeight: "0.8rem",
                color: "#210366",
              }}
            >
              {props.course}
            </Typography>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  letterSpacing: "0rem",
                  fontSize: "0.6rem",
                  lineHeight: "0.8rem",
                  color: "#210366",
                }}
              >
                {props.datee}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              margin: "1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0.03rem",
              fontSize: "0.8rem",
              lineHeight: "1rem",
              color: "#210366",
            }}
          >
            {props.data}
          </Typography>
          <Typography
            sx={{
              margin: "0.5rem 1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0rem",
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              color: "#210366",
            }}
          >
            {props.about}
          </Typography>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7B90FF",
            borderRadius: "28px",
            height: "2rem",
            color: "white",
            marginTop: "2rem",
            alignSelf: "center",
            padding: "1rem 1.3rem",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontWeight: "600",
            width: "fit",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Apply Now
        </Button>
      </Box>
    </>
  );
};

export default Card;
