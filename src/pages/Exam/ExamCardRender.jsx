import React from "react";
import CardComponent from "../../components/Cards/ExamComponentCard";
import { Box, Stack } from "@mui/system";
import {ExamCardData as Data} from "./Data";

const ExamCard = () => {
  return (
    <Box
     sx={{
        display: "flex",
        // flexDirection: "row",
        // maxWidth: "1340px", // Updated maxWidth property
        backgroundColor: "rgba(250, 251, 255, 1)",
        gridTemplateColumns: "repeat(2, 1fr)",
        //borderRadius: "20px",
        // marginRight: "2rem"
      }}
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        // justifyContent="center"
        alignItems="center"
        // marginTop="2rem"
      >
        {Data.map((item) => (
          <CardComponent
            key={item.id}
            name={item.name}
            title={item.title}
            examDate={item.examDate}
            applicationDate={item.applicationDate}
            announceDate={item.announceDate}
            img={item.img}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExamCard;
