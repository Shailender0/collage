import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Admission2023 from "./pages/Admission2023/Admission2023";
import AlreadyRegister from "./pages/Auth/pages/AlreadyRegister";
import Canada from "./pages/CanadaPage/Canada";
import DifferentPlaces from "./pages/DifferentPlaces/DifferentPlaces";
import { PlacesData } from "./pages/DifferentPlaces/Data";
import USA from './pages/USAPage/USA';
import UK from './pages/UKPage/UKPage';
import UAE from './pages/UAEPage/UAEPage.jsx';
import Australia from './pages/AustraliaPage/AustraliaPage';
import Germany from "./pages/GermanyPage/GermanyPage";
import Ireland from './pages/IrelandPage/IrelandPage';
import Hongkong from "./pages/HongkongPage/HongkongPage";
import Singapore from "./pages/SingaporePage/SingaporePage";
import NewZealand from "./pages/NewZealandPage/NewZealandPage";
import Malaysia from "./pages/MalaysiaPage/MalaysiaPage";
import Sweden from "./pages/SwedenPage/SwedenPage";
import Netherlands from "./pages/NetherlandsPage/NetherlandsPage";
import France from "./pages/FrancePage/FrancePage";
import Italy from "./pages/ItalyPage/ItalyPage";
import ChooseCourses from "./pages/ChooseCourses/ChooseCourses";
import CollegeNews from "./pages/News/CollegeNews";
import Exam from "./pages/Exam/Exam";
import HomePage from "./pages/Home/HomePage";
import Institute from "./pages/Institute/Institute";
import Login from "./pages/Auth/pages/Login";
import MainPageLayout from "./layout/MainPageLayout";
import Next from "./pages/Auth/pages/Next";
import Register from "./pages/Auth/pages/Register";
import RequestOtp from "./pages/Auth/pages/RequestOtp";
import Review from "./pages/Review/Review";
import Scholarship from "./pages/Scholarship/Scholarship";
import StudyAbroad from "./pages/StudyAbroad/StudyAbroad";
import TopUniversities from "./pages/TopUniversities/TopUniversities";
import WriteReview from "./pages/Writereview/WriteReview";
import CollegePredictor from "./pages/CollegePredictor/CollegePredictor"
import Hostel from "./pages/Hostel/Hostel";
import TestSeries from './pages/TestSeries/TestSeries';
import Ranking from './pages/Ranking/Ranking'; 
import CutOff from './pages/CutOff/CutOff';
import PracticeAnswer from "./pages/PracticeAnswer/PracticeAnswer";
import PracticeQuestion from "./pages/PracticeQuestion/PracticeQuestion";
import Gallery from "./pages/Gallery/Gallery";
import JeeMainRank from "./pages/JeeMainRank/JeeRank/JeeRank";
import TrendingNews from "./pages/TrendingNews/TrendingNews";
import CourseFee from "./pages/CourseFee/CourseFee";
import Faculty from "./pages/Faculty/Faculty";
import TataScholarships from "./pages/TataScholarships/TataScholarships";
import QandA from "./pages/QandA/QandA";
import SbiLoan from "./pages/SBILoan/SbiLoan";
import EducationLoan from "./pages/EducationLoan/EducationLoan";
import Reviews from "./pages/Reviews/Reviews";
import CourseFinder from "./pages/CourseFinder/CourseFinder";
import Placement from "./pages/Placement/Placement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/admission" element={<Admission2023 />} />
          <Route path="/already-register" element={<AlreadyRegister />} />
          <Route path="/canada" element={<Canada />} />
          {PlacesData.map(place => (
            <Route
              key={place.id}
              path={`/canada/${place.slug}`}
              element={<DifferentPlaces place={place} />}
            />
          ))}
          <Route path="/usa" element={<USA />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/uae" element={<UAE />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/ireland" element={<Ireland />} />
          <Route path="/hong-kong" element={<Hongkong />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/new-zealand" element={<NewZealand />} />
          <Route path="/malaysia" element={<Malaysia />} />
          <Route path="/sweden" element={<Sweden />} />
          <Route path="/netherlands" element={<Netherlands />} />
          <Route path="/france" element={<France />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/choose-courses" element={<ChooseCourses />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/institutes" element={<Institute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<CollegeNews />} />
          <Route path="/next" element={<Next />} />
          <Route path="/otp" element={<RequestOtp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<Review />} />
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/top-universities" element={<TopUniversities />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/collegePredictor" element={<CollegePredictor/>}/>
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/cutoff" element={<CutOff />} />
          <Route path="/practice-answer" element={<PracticeAnswer />} />
          <Route path="/practice-questions" element={<PracticeQuestion />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/jee-rank" element={<JeeMainRank />} />
          <Route path="/trending-news" element={<TrendingNews />} />
          <Route path="/course-fee" element={<CourseFee />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/tata-scholarships" element={<TataScholarships />} />
          <Route path="/qa" element={<QandA />} />
          <Route path="/sbi-loan" element={<SbiLoan />} />
          <Route path="/education-loan" element={<EducationLoan />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/course-finder" element={<CourseFinder />} />
          <Route path="/placement" element={<Placement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
