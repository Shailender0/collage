import React from "react";
import { Container } from "@mui/material";
import PageTitle from "../../components/Headings/PageTitle";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import LatestNotification from "./LatestNotification";
import FoundCollegeHeading from "../../components/Headings/FoundCollegeHeading";
import Colleges from "./Colleges";
import DropDown from "./DropDown";

const TopUniversities = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="Top Colleges" />
      <TopCollegeHeading text="List of Top Colleges in Indian Based on 2023 Ranking" />
      <LatestNotification />
      <DropDown />
      <FoundCollegeHeading />
      <Colleges />
    </Container>
  );
};

export default TopUniversities;
