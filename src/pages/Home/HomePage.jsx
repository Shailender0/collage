import React from "react";
import Class12th from "./Class12th";
import Class10th from "./Class10th";
import LatestNews from "./LatestNews";
import TopCourses from "./TopCourses";
import HeroSection from "./HeroSection";
import StudyGoals from "./StudyGoals";
import TopColleges from "./TopColleges";
import OurSuggestion from "./OurSuggestion";
import LetestNotification from "./LetestNotification";
import StudyAbrodContainer from "./StudyAbrodContainer";
import AdmissionContainer from "./AdmissionContainer";
import CollegeRankingContainer from "./CollegeRankingContainer";
import ExploreCourseContainer from "./ExploreCourseContainer";
import { TopSection } from "./TopSection";
// import { Container } from "@mui/material";
import { CollegeRanking } from "./CollegeRanking";

const HomePage = () => {
  return (
    <>
      {/* <Container maxWidth="xl"> */}
        <HeroSection />
        <StudyGoals />
        <TopColleges />
        <LetestNotification />
        <OurSuggestion />
        <TopSection />
        <CollegeRanking />
        <CollegeRankingContainer />
        <ExploreCourseContainer />
        <AdmissionContainer />
        <StudyAbrodContainer />
        <Class12th />
        <Class10th />
        <LatestNews />
        <TopCourses />
      {/* </Container> */}
    </>
  );
};

export default HomePage;
