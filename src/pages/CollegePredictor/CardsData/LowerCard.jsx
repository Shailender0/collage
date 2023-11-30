import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Links from "../Components/Links";
import ExamHeading from "../Components/ExamHeading";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
const LowerCard = ({ collegeParticipating, collegeName, Images,collegeLoaction }) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "12px",
          width: "430px",
          height: "351px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // padding: "1.5rem",
          margin: "1rem auto",
          textAlign: "center",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          radius: "28px",
        }}
      >
        <Box>
          <Box
            sx={{
              padding: "1rem 1.8rem",
              height: "5.5rem",
              backgroundColor: "#7B90FF33",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 70, height: 70 }} src={Images} />
            <Box display="flex" flexDirection="column">
              
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {collegeName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                {collegeLoaction}
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Typography
              sx={{
                borderRight: "1px solid rgba(123, 144, 255, 0.33)",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "18px",
                /* or 116% */

                // display: "flex",
                alignItems: "center",
                letterSpacing: "0.03em",
                marginTop: ".5rem",
                color: "#210366",
              }}
            >
              College Particapiting
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "start",
                  letterSpacing: "0.03em",
                  color: "#210366",
                  marginTop: ".5rem",
                  justifyContent: "center",
                }}
              >
                {collegeParticipating}
              </div>
            </Typography>
          </Box>
          <hr
            style={{
              border: " 1px solid rgba(123, 144, 255, 0.33)",
            }}
          />
          <Box display="flex" flexDirection="row">
            <Links text="Admission" />
            <Links text="College Info" />
            <Links text="Course & Fees" />
          </Box>
        </Box>
        <Button
          variant="text"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            color: "#FFFFFF",
            backgroundColor: "#7B90FF",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.02em",
            borderRadius: "12px",
            margin: "0rem auto",
            marginBottom: "20px",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#3c52b2",
            },
          }}
        >
          Predict Now
        </Button>
      </Box>
    </>
  );
};

export default LowerCard;
