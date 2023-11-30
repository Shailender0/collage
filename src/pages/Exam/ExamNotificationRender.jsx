import React from "react";
import ExamNotifications from "../../components/Cards/ExamNotificationCard";
import {ExamNotificationData} from "./Data";
import { Box, Typography } from "@mui/material";

const ExamNotificationsRender = () => {
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
          marginBottom: "40px",
          filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        }}
      >
       <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          boxSizing: "border-box",
          height: "57px",
          width: "375px",
          background: "#FFFFFF",
          borderBottom: "2.5px solid #7B90FF",
          borderRadius: "20px 20px 0px 0px",
          textAlign: "center",
        }}
      >      
      <Box
      sx={{
        boxSizing: "border-box",
        height: "66px",
        borderBottom: "1.5px solid rgba(123, 144, 255, 0.4)",
      }}
    >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            color: "#210366",
            textAlign: "center",
            paddingTop: "6px",
            marginTop: "16px",
          }}
        >
          Exams Notification
        </Typography>
        </Box>
      </Box>

        <Box
          sx={{
            // position: "fixed",
            width: "375px",
            height: "393.97px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
            borderRadius: "0px 0px 20px 20px",
            // display: "flex",
            // flexDirection: "row"
          }}
        >
          {/* <Stack direction='column' flexWrap='wrap' justifyContent="center"
            alignItems="center" marginTop="2rem"> */}
          {ExamNotificationData.map((item, id) => {
            return (
              <ExamNotifications
                key={id}
                name={item.name}
                date={item.date}
                img={item.img}
              />
            );
          })}
          {/* </Stack> */}
        </Box>
      </Box>
    </>
  );
};

export default ExamNotificationsRender;
