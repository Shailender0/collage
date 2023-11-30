import { Container } from "@mui/material";
import GetAns from "./Components/GetAns";
import NumRating from "./Components/NumRating";
import Search from "./Components/Search";
import StudyAbroad from "./Components/StudyAbroad";
import QuestionCol from "./Components/QuestionCol";
import PentIcon from "./Components/PentIcon";
function QandA() {
  return (
    <>
      <Container>
      
              <PentIcon />
        <GetAns />
        <Search />
        <StudyAbroad />
        <QuestionCol />
        <NumRating/>
              </Container>
      
    </>
  );
}

export default QandA;
