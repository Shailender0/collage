import React from 'react';
import { Box } from "@mui/material";
import MyButton from "./MyButton";

const CollegeArticleCard = () => {
  const buttons = [
    {
        label: "BE/B.Tech Exams",
        link: "#",
    },
    {
        label: "Medical (UG) Exams",
        link: "#",
    },
    {
        label: "State Exam B.e/B.Tech",
        link: "#",
    },
    {
        label: "Placement Test",
        link: "#",
    },
    {
        label: "CBSE Class XII",
        link: "#",
    },
    
  ];

  return (
    <>
      <Box sx={{ margin: "0", marginBottom: "4rem", marginTop: "2rem", marginLeft: "1rem" }}>
        {
buttons.map
((button, index) => (
        <MyButton key={index} label={button.label} link={
button.link
} />
        ))}
      </Box>
    </>
  )
}

export default CollegeArticleCard; 