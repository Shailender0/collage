import { Box, Typography } from "@mui/material";
import ExamFaq from "../../components/Cards/ExamFaqCard";
import {ExamFaqData} from "./Data";
import { useState } from "react";

const ExamFaqRender = (props) => {
  const [showID, setShowID] = useState("");
  return (
    <Box sx={{marginBottom:"80px"}}>
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
      </style>

      <Box
        sx={{
          marginLeft: "100px",
          width: "1052px",
          height: "493px",
          background: "#FAFBFF",
          borderRadius: "20px",
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            // position: "absolute",
            width: "530px",
            height: "23px",
            marginLeft: "21px",
            marginBottom: "40px",
            // marginTop: "44px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "80px",
            color: "#210366",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {ExamFaqData.map((item, id) => (
          <ExamFaq key={id} ques={item.ques} ans={item.ans} showID={showID} />
        ))}
      </Box>
    </Box>
  );
};

export default ExamFaqRender;
