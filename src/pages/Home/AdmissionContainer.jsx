import React from "react";
import { Box, Container } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";
import MyHeading from "../../components/Headings/MyHeading";

const AdmissionContainer = () => {
  const heading = "Admission 2023";
  const buttons = [
    {
      label: "MBA",
      link: "#",
    },
    {
      label: "MBBS 2023",
      link: "#",
    },
    {
      label: "MBA 2023",
      link: "#",
    },
    {
      label: "M Tech",
      link: "#",
    },
    {
      label: "B Ed",
      link: "#",
    },
    {
      label: "MBBS",
      link: "#",
    },
    {
      label: "Ph.D",
      link: "#",
    },
    {
      label: "D El Ed",
      link: "#",
    },
    {
      label: "Bsc",
      link: "#",
    },
    {
      label: "B.Pharmacy",
      link: "#",
    },
    {
      label: "Engineering",
      link: "#",
    },
    {
      label: "Master of Arts",
      link: "#",
    },
    {
      label: "LLB",
      link: "#",
    },
    {
      label: "MCA",
      link: "#",
    },
    {
      label: "M.Com",
      link: "#",
    },
    {
      label: "BBA",
      link: "#",
    },
    {
      label: "B.Com",
      link: "#",
    },
    {
      label: "M.E",
      link: "#",
    },
    {
      label: "B.E",
      link: "#",
    },
    {
      label: "Bachelor of Arts",
      link: "#",
    },
    {
      label: "Bachelor of Engineering",
      link: "#",
    },
    {
      label: "Commerce",
      link: "#",
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ margin: "0", marginBottom: "4rem", marginTop: "2rem" }}>
          <MyHeading headingName={heading} />
          {/* <Container maxWidth="m" sx={{ gap: 6, marginTop: "20px" }}> */}
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
          {/* </Container> */}
        </Box>
      </Container>
    </>
  );
};

export default AdmissionContainer;
