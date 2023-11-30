import { Container, Box } from "@mui/material";
import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import PageNameHeading from "../../components/Headings/PageNameHeading";
import EarnUpto from "./components/EarnUpto";
import HowEarnCard from "./components/HowEarnCard";
import BoldHeading from "../../components/Headings/BoldHeading";
import FilledButton from "../../components/Buttons/FilledButton";
import LeaderBoard from "./components/LeaderBoard";
import DoDont from "./components/DoDont";
import FreQeuentlyAkedQ from "./components/FreQeuentlyAkedQ";
const WriteReview = () => {
  const earnData = [
    {
      img: img1,
      way: "Write a Review & EarnUp to",
      amount: "10",
    },
    {
      img: img2,
      way: "Reward For Selected Colleges Reviews",
      amount: "10",
    },
    {
      img: img4,
      way: "Get Reviews From Your Friends & Earn",
      amount: "10",
    },
    {
      img: img5,
      way: "Achieve Milestone and Earn Up to",
      amount: "10",
    },
  ];
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "0px ",
        paddingTop: "2rem  !important",
        fontFamily: "'Poppins', sans-serif !important",
      }}
    >
      <PageNameHeading>Write a review</PageNameHeading>
      <Box>
        <EarnUpto />
      </Box>
      <Box>
        <BoldHeading textAlign="center">
          How do you earn after writing a review?
        </BoldHeading>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {earnData.map((earn, index) => {
            return <HowEarnCard key={index} {...earn} index={index} />;
          })}
        </Box>
      </Box>
      <Box>
        <BoldHeading>Collegedunia Reviews Leaderboard- This Month</BoldHeading>

        <LeaderBoard />
      </Box>
      <Box>
        <BoldHeading textAlign="center">
          Do’s & Dont’s - Points to Consider While Writing a Review
        </BoldHeading>
        <DoDont />
      </Box>
      <Box>
        <BoldHeading textAlign="center">
          Frequently asked Question and (FAQS)
        </BoldHeading>
        <FreQeuentlyAkedQ />
      </Box>
    </Container>
  );
};

export default WriteReview;
