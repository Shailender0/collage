import React from "react";
import CollegeCardsthree from "../../components/Cards/CollegeComponentCard";
import { CollegeCardsTwoData } from "./Data";
import { Box, Stack } from "@mui/material";

const CollegesCards = () => {
  return (
    <>
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "center",
          // flexWrap: "wrap",
          // marginBottom: "2rem",
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto, auto)'
        }}
      >
        <Stack
          direction="row"
          //flexWrap="wrap"
          //justifyContent="center"
          alignItems="center"
          marginTop="2rem"
        >
          {CollegeCardsTwoData.map((val, index) => {
            return (
              <CollegeCardsthree
                key={index}
                img={val.img}
                date={val.date}
                icon={val.icon}
                contents={val.contents}
                content_link={val.content_link}
              />
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default CollegesCards;
