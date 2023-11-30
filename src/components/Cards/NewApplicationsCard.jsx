import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import ApplyNowButton from "../Buttons/ApplyNow";

const NewApplicationCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        marginTop: "1rem",
        width: "100%",
        marginLeft: "3rem",
      }}
    >
      <Avatar
        src={props.img}
        sx={{
          height: "60",
          width: "60",
          padding: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          backgroundColor: "#FFFFFF",
          border: "0.1px solid #7B90FF",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "0.8rem",
            color: "#210366",
          }}
        >
          {props.recruits}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "0.8rem",
            color: "#210366",
          }}
        >
          Highest CTC - {props.ctc}
        </Typography>
        <Typography
          sx={{
            marginTop: "1rem",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "0.7rem",
            width: "20rem",
            height: "2rem",
            color: "#210366",
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.about}
        </Typography>
        <ApplyNowButton link={props.link} />
      </Box>
    </Box>
  );
};

export default NewApplicationCard;
