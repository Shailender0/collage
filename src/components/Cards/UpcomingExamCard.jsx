import * as React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function UpcomingExams(props) {
  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>

      <Box
        sx={{
          boxSizing: "border-box",

          // position: "absolute",
          width: "345.5px",
          height: "66px",
          display: "flex",
          flexDirection: "row",
          borderBottom: "1.5px solid rgba(123, 144, 255, 0.4)",
          marginLeft: "16px",
          marginBottom: "12px",
        }}
      >
        {/* <Avatar src={props.img} alt='image' sx={{ width: "80px", height: "80px",paddingLeft:"16px", paddingTop:"27px" }}/>  */}
        <Avatar
          src={props.img}
          sx={{
            // position: "absolute",
            width: "45px",
            height: "45px",
            marginLeft: "0px",
            marginTop: "5px",
            borderRadius: "12px",
            //   position:"absolute",
            //   width: "45px",
            //   height: "45px",
            //   borderRadius:"12px",
            //   marginTop: "8px",
            //   marginBottom: "13px",
          }}
        ></Avatar>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
            padding: "0px",
            //   position: "absolute",
            width: "298px",
            height: "30px",
          }}
        >
          <Typography
            // variant="h5"
            sx={{
              width: "298px",
              height: "30px",
              // paddingLeft: "40px",
              marginLeft: "32px",
              marginRight: "3px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "18px",
              marginTop: "10px",
            }}
          >
            {props.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "0.29px 137.83px 0px 0px",
              gap: "4px",
              width: "281.83px",
              height: "16.29px",
            }}
          >
            <CalendarTodayOutlinedIcon
              color="primary"
              fontSize="small"
              sx={{
                fontSize: 15,
                marginLeft: "75.25px",
                marginTop: "5.92px",
              }}
            />
            <Typography
              sx={{
                width: "136px",
                height: "16px",
                marginTop: "5.29px",
                marginLeft: "5.25px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "10px",
                color: "#7B90FF",
                fontWeight: "400",
                lineHeight: "16px",
                marginBottom: "15.71",
              }}
            >
              {props.date}
            </Typography>
          </Box>

          <Button
            variant="text"
            style={{ minWidth: "30px", minHeight: "10px" }}
            sx={{
              fontFamily: "Poppins",
              fontSize: "6px",
              backgroundColor: "#7B90FF",
              marginLeft: "150px",
              marginTop: "-8px",
              padding: "5px 8px",
              color: "white",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "white",
                color: "#7B90FF",
              },
            }}
          >
            Online Exam
          </Button>
        </Box>
      </Box>
    </div>
  );
}
