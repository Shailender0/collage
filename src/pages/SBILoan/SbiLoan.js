import { Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import EdulLoan from "./components/EdulLoan";
import EmiCalculator from "./components/EmiCalculator";
import LoanEligible from "./components/LoanEligible";
import LoanDetails from "./components/LoanDetails";
import ApplyLoam from "./components/ApplyLoam";
import Expens from "./components/Expens";
import Documents from "./components/Documents";
import Scheme from "./components/Scheme";
import Faq from "./components/Faq";
import DataTable from "./components/DataTable";

function SbiLoan() {
  return (
    <>
      <Container>
        <HeroSection />
        <EdulLoan/>
        <EmiCalculator/>
        <LoanEligible/>
        <DataTable/>
        <ApplyLoam/>
        <LoanDetails/>
        {/* <Looking/> */}
        <Expens/>
        <Documents/>
        <Scheme/>
        <Faq/>
      </Container>
    </>
  );
}

export default SbiLoan;
