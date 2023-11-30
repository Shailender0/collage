import React from "react";
import { UpcomingExamsData } from "./Data";
import { Box, Typography } from "@mui/material";
import UpcomingExams from "../../components/Cards/UpcomingExamCard";

const UpcomingExamRender = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          // position: "absolute",
          marginBottom: "40px",
          // width: "375px",
          // height: "450.91px",
          filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        }}
      >
        <Box
          sx={{
            boxSizing: "border-box",
            height: "57px",
            width: "375px",
            background: "#FFFFFF",
            borderBottom: "2.5px solid #7B90FF",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <Typography
            // variant="h5"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              color: "#210366",
              paddingTop: "6px",
              textAlign: "center",
            }}
          >
            Upcoming Exams
          </Typography>
        </Box>

        <Box
          sx={{
            width: "375px",
            height: "393.97px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          {UpcomingExamsData.map((item, id) => {
            return (
              <UpcomingExams
                key={id}
                name={item.name}
                date={item.date}
                img={item.img}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default UpcomingExamRender;
