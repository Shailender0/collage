import React from "react";
import { Container, Typography } from "@mui/material";

const Links = (props) => {
  return (
    <Container>    <Typography
      sx={{
        boxSizing:"border-box",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "18px",
        display: "flex",
        alignItems: "center",
        letterSpacing: " 0.03em",
        justifyContent: "center",
        color: " #210366",
        borderRight: "1px solid rgba(123, 144, 255, 0.33)"
      }}
    >{props.text}</Typography>
    </Container>

  );
};

export default Links;
