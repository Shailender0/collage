import React from "react";
import { Container} from "@mui/material";
import AllAnsCol from "./AllAnsCol";


const QuestionCol = () => {
  const colorData = [
    { A: "#2196F3" },
    { B: "#4CAF50" },
    { C: "#FF5722" },
    { D: "#2196F3" },
    { E: "#9C27B0" },
    { F: "#F44336" },
    { G: "#FFEB3B" },
    { H: "#009688" },
    { I: "#673AB7" },
    { J: "#FF9800" },
    { K: "#03A9F4" },
    { L: "#E91E63" },
    { M: "#8BC34A" },
    { N: "#FFC107" },
    { O: "#795548" },
    { P: "#00BCD4" },
    { Q: "#607D8B" },
    { R: "#FF4081" },
    { S: "#CDDC39" },
    { T: "#FF5722" },
    { U: "#009688" },
    { V: "#F44336" },
    { W: "#3F51B5" },
    { X: "#4CAF50" },
    { Y: "#9C27B0" },
    { Z: "#2196F3" },
  ];

  const getbgColor = (latter) => {
    const foundColor = colorData.find(
      (colorObject) => Object.keys(colorObject)[0] === latter
    );
    return foundColor[latter] || "#000000";
  };
  return (
    <Container>  
    <AllAnsCol getbgColor={getbgColor }/>
   
    </Container>
  );
};

export default QuestionCol;