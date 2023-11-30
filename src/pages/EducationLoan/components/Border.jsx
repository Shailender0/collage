import React from "react";
// import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Typography, Card } from "@mui/material";
import Button from "@mui/material/Button";
import Axis from "./Axis";
import Bob from "./Bob";
import Pnb from "./Pnb";
import Hdfc from "./Hdfc";

const Border = () => {
  return (
    <>
      <Stack width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}>
        
        <Stack
        width={"90%"}
        display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8rem"}
          sx={{
            
            background: "#7B90FF",
            borderRadius: "4rem",
            marginTop: "10rem",
            
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            All Bank
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Gov. Bank{" "}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Private Bank{" "}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Cooprative{" "}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            NDFC{" "}
          </Typography>
        </Stack>

        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"4rem"}
          sx={{
            width: "100%",
            // marginLeft: "8rem",
            marginTop: "1rem",
          }}
        >
          <Typography
            sx={{
        
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Bank Name
          </Typography>
          <Typography
            sx={{
        
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Intrest Rate
          </Typography>
          <Typography
            sx={{
        
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Max Time
          </Typography>
          <Typography
            sx={{
        
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Loan Type
          </Typography>
          <Typography
            sx={{
        
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Scheme
          </Typography>
          <Typography
            sx={{
              
              textAlign: "center",
              color: "#210366",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Compare
          </Typography>
        </Stack>

        <Stack
         width={"85%"}
         display={"flex"}
         flexDirection={"row"}
        
         marginTop={2}
        >
          <Card
            style={{
              width: "26%",
              height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
              borderTopLeftRadius: 27,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 28,
            }}
          >
            <div
              style={{
                height: 32,
                background: "#E4E4E4",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  width: 170,
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 12,
                  fontFamily: "Poppins",
                  fontWeight: "550",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                100% Paper Less Approved{" "}
              </Typography>
            </div>

            <img
              style={{ height: 30, marginTop: 20 }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png"
              alt=""
            />

            <Typography
              sx={{
                textAlign: "center",
                color: "#210366",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "550",
                wordWrap: "break-word",
                marginTop: 3,
              }}
            >
              Historical Interest rates
            </Typography>
          </Card>

          <Card
            style={{
              width: "26%",
              height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            }}
          >
            <Box
              style={{
                width: 140,
                height: 100,
                position: "relative",
                textAlign: "center",
                color: "#210366",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "550",
                wordWrap: "break-word",
                marginTop: 42,
                marginLeft: 6,
              }}
            >
              <div style={{ left: 4, top: 0 }}>Up to INR 7.50 Lacs:</div>
              <div style={{ left: 48, top: 33 }}>10.55%</div>
              <div style={{ left: 0, top: 66, marginTop: 20 }}>
                Above INR 7.50 Lacs:
              </div>
              <div style={{ left: 48, top: 99 }}>10.80%</div>
            </Box>
          </Card>
          <Card
            style={{
              width: "26%",
              height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
              textAlign: "center",
            }}
          >
            <Typography
              style={{
                color: "#210366",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "550",
                wordWrap: "break-word",
                marginTop: 70,
              }}
            >
              15 years
            </Typography>
          </Card>
          <Card
            style={{
              width: "26%",
               height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#210366",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "550",
                lineHeight: 11.71,
                wordWrap: "break-word",
              }}
            >
              Student
            </div>
          </Card>
          <Card
            style={{
              width: "26%",
              // height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
            }}
          >
            <div
              style={{
                width: 125,
                height: 84,
                position: "relative",
                textAlign: "center",
                color: "#210366",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
                marginTop: 45,
                marginLeft: 12,
              }}
            >
              <div style={{ left: 47, top: 33 }}>CSIS</div>
              <div style={{ left: 9, top: 0, lineHeight: 3 }}>
                Padho Pardesh
              </div>
              <div style={{ left: 0, top: 60, lineHeight: 1 }}>
                Skill Loan Scheme
              </div>
            </div>
          </Card>
          <Card
            sx={{
              width: "26%",
              // height: 161,
              background: "white",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.14)",
              border: "0.50px rgba(123.25, 144.32, 255, 0.20) solid",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: 145,
                height: 35,
                background: "#FF7900",
                borderRadius: 10,
                marginTop: 2,
                marginLeft: 1,
              }}
            >
              Details
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 145,
                height: 35,
                background: "#FF7900",
                borderRadius: 10,
                marginTop: 1,
                marginLeft: 1,
              }}
            >
              Compare
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 145,
                height: 35,
                background: "#FF7900",
                borderRadius: 10,
                marginTop: 1,
                marginLeft: 1,
              }}
            >
              Apply Now
            </Button>
          </Card>
        </Stack>
        
          <Axis />
          <Bob />
          <Pnb />
          <Hdfc />
       
      </Stack>
    </>
  );
};

export default Border;
