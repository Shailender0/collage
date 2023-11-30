import { Avatar, Box, Typography } from "@mui/material";

const ExamsJEEMain = (props) => {
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
          width: "292px",
          height: "134px",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "27px 16px 26.2px",
          isolation: "isolate",
          background: "#FFFFFF",
          boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "28px",
        }}
      >
        <Avatar
          src={props.img}
          sx={{
            width: "75px",
            height: "75px",
          }}
        ></Avatar>

        <Typography
          sx={{
            // position: "absolute",
            height: "21px",
            marginTop: "8px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#333333",
            width: "260px",
          }}
        >
          {props.name}
        </Typography>

        <Typography
          sx={{
            marginTop: "9px",
            width: "182px",
            height: "21px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#333333",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1px 12.4px 0px 12.59px",
          }}
        >
          {props.date}
        </Typography>
      </Box>
    </>
  );
};

export default ExamsJEEMain;
