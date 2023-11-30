import React from "react";
import { Box, Container } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";
import MyHeading from "../../components/Headings/MyHeading";

const Class12th = () => {
  const heading = "CBSE Class 12th Board Exam";
  const buttons = [
    {
      label: "CBSE Class 12",
      link: "#",
    },
    {
      label: "CBSE Class 12th result",
      link: "#",
    },
    {
      label: "CBSE Class 12th Previous Year Paper",
      link: "#",
    },
    {
      label: "CBSE Class 12th Syllabus",
      link: "#",
    },
    {
      label: "NCERT Solutions Class 12th Physics",
      link: "#",
    },
    {
      label: "CBSE Class 12th Exam Date",
      link: "#",
    },
    {
      label: "CBSE Class 12th Admit card",
      link: "#",
    },
    {
      label: "CBSE Class 12th Student Testimonials",
      link: "#",
    },
    {
      label: "CBSE Class 12th Question Bank",
      link: "#",
    },
    {
      label: "CBSE Class 12th Hall Ticket",
      link: "#",
    },
    {
      label: "CBSE Previous year Toppers",
      link: "#",
    },
    {
      label: "CBSE Toppers",
      link: "#",
    },
    {
      label: "CBSE Question Pattern",
      link: "#",
    },
    {
      label: "CBSE Class 12th Notes",
      link: "#",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" >
        <MyHeading headingName={heading} />
        <Box sx={{ margin: "2rem 0" }}>
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Class12th;
