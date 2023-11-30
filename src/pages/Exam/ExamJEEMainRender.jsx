import React from "react";
import { Box, Typography } from "@mui/material";
import ExamsJEEMain from "../../components/Cards/ExamJEEMainCard";
import { JEEMainData } from "./Data";

const ExamJEEMainRender = () => {
  return (
    <Box>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          // height: "52px",
          // width: "312px",
          // borderRadius: "nullpx",
          fontFamily: "Poppins",
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "24px",
          // letterSpacing: "0em",
          // textAlign: "left",
          color: "#210366",
          // marginLeft: "100px",
          whiteSpace: "nowrap",
        }}
      >
     {/* Top JEE Main Previous Year Papers */}
        <Typography variant='h5' sx={{
                    color: "#210366",
                    fontSize: "2.25rem",
                    paddingTop: '1rem',
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif"

                }} >  Top JEE Main Previous Year Papers</Typography>
      </Box>
      <Box
        sx={{
          // position: "absolute",
          marginTop: "40px",
          marginLeft: "170px",
          flexDirection: "row",
          display: "flex",
          gap: "40px",
          width: "956px",
          height: "191.2px",
          marginBottom: "50px",
        }}
      >
        {JEEMainData.map((item, id) => {
          return (
            <ExamsJEEMain
              key={id}
              name={item.name}
              date={item.date}
              img={item.img}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ExamJEEMainRender;
