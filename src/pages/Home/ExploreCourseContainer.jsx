import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import Heading from "../../components/Headings/Heading";
import { AboutDegree, DegreeType } from "../../data/DataFile";
import Courses from "../../components/Buttons/Courses";
import CourseAboutCard from "../../components/Cards/CourseAboutCard";

const ExploreCourseContainer = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              justifyContent: "space-between",
            }}
          >
            <Heading head="Explore Courses"></Heading>

            <ViewMoreButton />

          </Box>

          <Stack direction="row" flexWrap="wrap" sx={{ marginTop: "2rem" }}>
            {DegreeType.map((val) => {
              return <Courses dt={val}></Courses>;
            })}
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            margin="2rem"
            flexWrap="wrap"
            sx={{ marginTop: "4rem" }}
          >
            {AboutDegree.map((val) => {
              return (
                <CourseAboutCard
                  deg={val.degree}
                  type={val.type}
                  duration={val.duration}
                  fee={val.avgFee}
                  cllgs={val.colleges}
                ></CourseAboutCard>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ExploreCourseContainer;
