import React from "react";
import CollegeCardsthree from "../../components/Cards/CollegeComponentCard";
import { Box, Stack } from "@mui/material";
import { CollegeCardsData } from "./Data";

const CollegesCards = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex', 
       gridTemplateColumns: 'repeat(3, 1fr)',
          //flexDirection: "row",
          //justifyContent: "center",
          //flexWrap: "wrap",
        }}
      >
    
        <Stack
          direction="row"
          flexWrap="wrap"
          // justifyContent="center"
          alignItems="center"
          // marginTop="2rem"
        >
          {CollegeCardsData.map((val, index) => {
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
