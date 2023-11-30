import React from 'react';
import { Container } from '@mui/material';
import SubPageTitle from '../../components/Headings/SubPageTitle';
import Hero from '../CanadaPage/Hero';
import AcadCounsel from './AcadCounsel';
import TopPlaces from './TopPlaces';
import TopColleges from './TopColleges';
import Article from './Article';
import AcademicCounsellor from './AcademicCounsellor';
import ChooseFuture from './ChooseFuture';
import FoundColleges from './FoundColleges';
import CollegeRanking from './CollegeRanking';
import ApplicationDates from './ApplicationDates';
import Scholarships from './Scholarships';
import Exams from './Exams';
import FAQs from './FAQs';

const SwedenPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <SubPageTitle title="Study Abroad" subtitle="Sweden" />
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
        <Scholarships />
        <Exams />
        <FAQs />
      </Container>
    </>
  )
}

export default SwedenPage;
