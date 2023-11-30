import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
const Top3Ranker = ({ name, college, cashEarned }) => {
  console.log(name);
  return (
    <Box
      sx={{
        width: "290px",
        boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.2)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <Avatar
        name={name}
        sx={{ bgcolor: "#FF4D4D", fontSize: "0.8rem", fontWeight: "600" }}
      >
        {name[0]}
        {name.split(" ")[1] && name.split(" ")[1][0]}
      </Avatar>

      <Typography
        variant="p"
        sx={{
          fontsize: "1rem",
          fontWeight: "bolder",
          lineHeight: "1.2rem",
          color: "#2F1370",
        }}
      >
        {name}
      </Typography>
      <Typography sx={{ fontsize: "1rem", color: "gray" }}>
        {college}
      </Typography>
      <Typography variant="h6" sx={{ color: "#2F1370", fontWeight: "600" }}>
        Cash Earned <span style={{ marginLeft: "2rem" }}>₹ {cashEarned}/</span>
      </Typography>
    </Box>
  );
};

export default Top3Ranker;
