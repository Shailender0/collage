import React from "react";
import Box from "@mui/material/Box";

import ClassTen from "./../../components/Headings/ClassTen";
import ClassTwelve from "./../../components/Headings/ClassTwelve";

import CollegeCards from "./CollegeCards";
import CollegeCardstwo from "./CollegeCardstwo";
import ConceptRender from "./ConceptRender";
import Container from "@mui/material/Container";
import ExamButtonRender from "./ExamButtonRender";
import ExamCardRender from "./ExamCardRender";
import ExamFaqRender from "./ExamFaqRender";
import ExamJEEMainRender from "./ExamJEEMainRender";
import ExamNewsRender from "./ExamNewsRender";
import ExamNotificationsRender from "./ExamNotificationRender";
import ExamsCategory from "./ExamsCategory";
import SearchBar from "../../components/Cards/SearchBar";
import UpcomingExamRender from "./UpcomingExamRender";

import img1 from "./images/ExamBoard.png";
import PageTitle from "../../components/Headings/PageTitle";
import { Grid, Typography } from "@mui/material";

const Exam = () => {
  return (
    <Container
    //maxWidth="lg"
     >
      <Box
        sx={{
      
          flexDirection: "",
          flexWrap: "wrap",
          alignItems: "left",
        }}
      >
        <Box>
          <PageTitle title="Exams" />
        </Box>
        <Grid container spacing={2}>
  <Grid item xs={6} md={9}>
  <Typography variant='h5' sx={{
                    color: "#210366",
                    fontSize: "2.25rem",
                    paddingTop: '1rem',
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif"

                }} >Entrance Exams In India</Typography>
  <SearchBar placeholder="Search Entrance Exams"  />
  <ExamButtonRender />
  </Grid>
  <Grid item xs={6} md={3}>
  <img
          src={img1}
          alt="img1"
          style={{
            width: "270px",
            height: "170px",

          }}
        />
  </Grid>
 
</Grid>
        {/* <Box sx={{display:'flex'}}>
        <SearchBar placeholder="Search Entrance Exams"  />
          <img
          src={img1}
          alt="img1"
          style={{
            width: "170px",
            height: "170px",
            // paddingTop: "1rem",
            // paddingLeft: "10rem",
     alignItems:'flex-end'
          }}
        />
         
        </Box> */}
        <ExamsCategory />
      </Box>
    
      <Box sx={{ 
        display: "flex", 
        // flexDirection: "row", 
      //flexWrap: "wrap"
         }}>
        <Box
     sx={{ width: "70%" }}
         >
          <ExamCardRender />
        </Box>
      <Box
       sx={{ width: "20%" }}
        >
          <ExamNewsRender />
          <ExamNotificationsRender />
          <UpcomingExamRender />
          </Box>
      </Box>
      <Box sx={{ display: "flex",
      //  flexDirection: "row",
      //   flexWrap: "wrap" 
        }}>
        <Box sx={{ 
          // width: "100%" 
          }}>
          <ConceptRender />
          <ClassTen />
          <CollegeCards />
          <ClassTwelve />
          <CollegeCardstwo />
          <ExamJEEMainRender />
          <ExamFaqRender />
        </Box>
      </Box>
    </Container>
  );
};

export default Exam;
