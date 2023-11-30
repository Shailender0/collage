import React from "react";
import { Box, Container } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";
import MyHeading from "../../components/Headings/MyHeading";

const Class10th = () => {
  const heading = "CBSE Class 10th Board Exam ";
  const buttons = [
    {
      label: "CBSE Class 10",
      link: "#",
    },
    {
      label: "CBSE Class 10th result",
      link: "#",
    },
    {
      label: "CBSE Class 10th Exam Date",
      link: "#",
    },
    {
      label: "CBSE Class 10th Syllabus",
      link: "#",
    },
    {
      label: "CBSE",
      link: "#",
    },
    {
      label: "CBSE Class 10th Admit card",
      link: "#",
    },
    {
      label: "CBSE Class 10th Previous Year Paper",
      link: "#",
    },
    {
      label: "NCERT Solutions Class 10th Science",
      link: "#",
    },
    {
      label: "CBSE Class 10th Question Bank",
      link: "#",
    },
    {
      label: "CBSE Class 10th Previous Year Toppers",
      link: "#",
    },
    {
      label: "CBSE 10th Student Testimonials",
      link: "#",
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <MyHeading headingName={heading} />
        <Box
          sx={{ margin: "2rem 0" }}
        >
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Class10th;
