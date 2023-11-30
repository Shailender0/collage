import { Box, Link, Typography } from "@mui/material";
import React from "react";

const CourseAboutCard = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
          borderRadius: "20px",
          height: "250px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "1rem",
          // marginRight: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "0rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              paddingLeft: "1rem",
              paddingTop: "0.3rem",
              height: "2.5rem",
              background: "rgba(123, 144, 255, 0.4)",
              borderRadius: "0px 12px 12px 0px;",
              paddingRight: "1.5rem",
              paddingTop: "1.5rem",
              paddingBottom: "2.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontFamily: "Poppins",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "0.9rem",
                letterSpacing: "0.01rem",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              {props.deg}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "rgba(123, 144, 255, 0.4)",
              borderRadius: " 12px 0px 0px 12px;",
              justifyContent: "space-between",
              paddingLeft: "0.4rem",
              paddingRight: "0.4rem",
              paddingTop: "0.8rem",
              paddingBottom: "0.8rem",
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              {props.type}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
            }}
          >
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: "4.2rem",
              paddingLeft:"1rem",
            }}>
              <Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Duration:
              </Typography><Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                {props.duration}
              </Typography>
              
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            
            }}>
              <Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Total Avg.Fees :
              </Typography><Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                {props.fee}
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: "4.1rem",
            
            }}>
              <Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Colleges :
              </Typography><Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                {props.cllgs}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Link
          sx={{
            margin: "1rem",
            color: "#210366",
            fontSize: "16px",
            fontWeight: "700",
            fontFamily: "Poppins",
            alignSelf: "center ",
            textDecoration:"none",
            cursor: "pointer",
          }}
        >
          Courses overview
        </Link>
      </Box>
    </>
  );
};

export default CourseAboutCard;
