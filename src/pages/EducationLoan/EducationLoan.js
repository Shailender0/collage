
import { Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import Border from './components/Border';
import EduLoan from './components/EduLoan';
import EmiCalculator from './components/EmiCalculator';
import Application from './components/Application';
import TopLoan from './components/TopLoan';

function EducationLoan() {
  return (
    <>   
<Container>
       <HeroSection/>  
       <Border/>
       <EduLoan/>
      <EmiCalculator/>
      <Application/>
      <TopLoan/>
</Container>

    </>
  );
}

export default EducationLoan;
