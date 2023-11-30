import React from "react";
import { Box, Container } from "@mui/material";
import MyHeading from "../../components/Headings/MyHeading";
import MyButton from "../../components/Buttons/MyButton";
import ParentComponent from "./ParentComponent";

const LatestNews = () => {
  const heading = "Latest News & Stories";
  const buttons = [
    {
      label: "Exam Aleart",
      link: "#",
    },
    {
      label: "College Aleart",
      link: "#",
    },
    {
      label: "Admission Aleart",
      link: "#",
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <MyHeading headingName={heading} />

        <Box sx={{ margin: "2rem 0" }}>
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
          <ParentComponent />
        </Box>


      </Container>
    </>
  );
};

export default LatestNews;
