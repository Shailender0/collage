import React from "react";
import StudyGoal from "../../components/Buttons/StudyGoal";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import { Box, Container } from "@mui/material";
import Heading from "../../components/Headings/Heading";

const StudyGoals = () => {
  const results = [
    {
      label: "Engineering",
      link: "#",
    },
    {
      label: "Management",
      link: "#",
    },
    {
      label: "Medical",
      link: "#",
    },
    {
      label: "Commerce",
      link: "#",
    },
    {
      label: "Design",
      link: "#",
    },
    {
      label: "Arts",
      link: "#",
    },
    {
      label: "Law",
      link: "#",
    },
    {
      label: "Architecture",
      link: "#",
    },
    {
      label: "Animation",
      link: "#",
    },
    {
      label: "Aviation",
      link: "#",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" >
        <Box sx={{ marginTop: "6rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Heading head="Select your study goals"></Heading>
            <ViewMoreButton />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              // marginRight: "4rem",
              // marginLeft: "4rem",
              // marginBottom: "2rem",
            }}
          >
            {results.map((result, index) => (
              <StudyGoal key={index} dt={result.label} link={result.link} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default StudyGoals;
