import { Typography, Box, Divider } from "@mui/material";
import React from "react";
// import QsBar from "./QsBar";

const QsRankParameter = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        // boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop:2,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    }}
>
      <Typography
        sx={{
          width: 641,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore QS Global Ranking 2022 Parameter-Wise Scores
      </Typography>
      
      <Typography
        sx={{
          width: 924,
          height: 14,
          color: "#210366",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        The following list of parameters decide the overall ranking and scores
        in IIM Bangalore QS Global Rankings 2022:-
      </Typography>
      {/* <QsBar/> */}
    </Box>
  );
};

export default QsRankParameter;
