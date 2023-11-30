import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import PageTitle from "../../../components/Headings/PageTitle";

const HeroSection = () => {
  return (
    <>
    <PageTitle title="Education Loans" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          // marginY: 4,
        }}
      >
        <Box
          sx={{
            borderRadius: "2rem",
            width: "110%",
            // height: "450px",
            backgroundImage: `url(${"https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80"})`, // Use backgroundImage property
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Box sx={{ width:"40%",marginTop: 4, marginLeft: 6 }}>
            <Typography
              sx={{
                
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "white",
                fontSize: 32,
                marginBottom: 2,
                marginTop: 4,
              }}
            >
              Education Loans in India and Abroad
            </Typography>
            <Typography
              sx={{
                
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "white",
                fontSize: 18,
              }}
            >
              Education Loans are designed to extend financial assistance to
              students aspiring to pursue their higher studies in reputed
              colleges in India or Abroad.
            </Typography>
            <Box
              sx={{
                marginTop: 2,
              }}
            >
              <Button
                sx={{
                  width: 160,
                  background: "#FF7900",
                  borderRadius: 2,
                  color: "white",
                  marginRight: 2,
                }}
              >
                Apply Now
              </Button>
              <Button
                sx={{
                  width: 160,
                  color: "#FF7900",
                  background: "white",
                  borderRadius: 2,
                }}
              >
                Check Eligibilty
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "1rem",
            }}
          >
            <Card
              sx={{
                width: 170,
                height: 210,
                background: "white",
                boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 4,
                marginX: 0.3,
                marginBottom: 6,
              }}
            >
              <img
                style={{ width: 80, marginLeft: 45 }}
                src={require("./../aseets/Home/graduate.png")}
                alt=""
              />
              <Typography
                sx={{
                  width: 142,
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Scholar Loan Scheme
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
              
                Why settle for less? Compare which bank offers the most
              </Typography>
            </Card>
            <Card
              sx={{
                width: 170,
                height: 240,
                background: "white",
                boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 4,
                marginX: 1,
                marginBottom: 8,
              }}
            >
                <img
                  style={{ width: 60, marginLeft: 45,marginTop:20}}
                  src={require("./../aseets/Home/book.png")}
                  alt=""
                />
              <Typography
                sx={{
                  width: 152,
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  
                }}
              >
                Student Loan Scheme
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                installments will you have to pay for the repayment of your
                Wondering how many education loan? Check Now!
              </Typography>
            </Card>
            <Card
              sx={{
                width: 170,
                height: 210,
                background: "white",
                boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 4,
                marginBottom: 6,
              }}
            >
                <img
                  style={{ width: 80, marginLeft: 45,marginTop:10}}
                  src={require("./../aseets/Home/rafiki.png")}
                  alt=""
                />
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                 
                }}
              >
                Global Ed- Vantage Loan Scheme
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Why settle for less? CompareWhy settle for less? Compare
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
