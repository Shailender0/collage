import React from "react";
import { Container } from "@mui/material";
import ExamButton from "./../../components/Buttons/ExamButton";

const ExamButtonRender = () => {
  const buttons = [
    {
      label: "JEE Main",
      link: "#",
    },
    {
      label: "NEET",
      link: "#",
    },
    {
      label: "CAT",
      link: "#",
    },
    {
      label: "GATE",
      link: "#",
    },
    {
      label: "CLAT",
      link: "#",
    },
    {
      label: "JEE Advanced",
      link: "#",
    },
    {
      label: "COMEDK UGET",
      link: "#",
    },
    {
      label: "AP EAPCET",
      link: "#",
    },
    {
      label: "WBJEE",
      link: "#",
    },
    {
      label: "KCET",
      link: "#",
    },


  ];

  return (
    <Container
    sx={{ 
      margin: "0.2 0",
      marginTop: "4rem",
      height: "30px",
      left: "218px",
      top: "451px",
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center",
      gap: "19px",
    }}
    >
          {buttons.map((button, index) => (
            <ExamButton key={index} label={button.label} link={button.link} />
          ))}
    </Container>
  );
};

export default ExamButtonRender;
