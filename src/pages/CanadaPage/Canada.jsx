import React from 'react';
import { Container } from '@mui/material';
import AcadCounsel from './AcadCounsel';
import Hero from './Hero';
import TopPlaces from './TopPlaces';
import TopColleges from './TopColleges';
import Article from './Article';
import AcademicCounsellor from './AcademicCounsellor';
import ChooseFuture from './ChooseFuture';
import FoundColleges from './FoundColleges';
import CollegeRanking from './CollegeRanking';
import PopularScholarship from './PopularScholarship';
import Exams from './Exams';
import SubPageTitle from '../../components/Headings/SubPageTitle';
import CanadaFAQs from './CanadaFAQs';
import ApplicationDates from './ApplicationDates';

const Canada = () => {
  return (
    <>
    <Container maxWidth="lg">
      <SubPageTitle title="Study Abroad" subtitle="Canada" />
      <Hero />
      <AcadCounsel />
      <TopPlaces />
      <TopColleges />
      <Article />
      <AcademicCounsellor />
      <ChooseFuture />
      <FoundColleges />
      <CollegeRanking />
      <ApplicationDates />
      <PopularScholarship />
      <Exams />
      <CanadaFAQs />
    </Container>
    </>
  )
}

export default Canada
