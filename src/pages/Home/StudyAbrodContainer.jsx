import React from "react";
import { Abroad } from "../../data/DataFile";
import CardComponent from "../../components/Cards/StudyAbroadCard";
import { Box, Container, Stack } from "@mui/material";
import Heading from "../../components/Headings/Heading";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const StudyAbrodContainer = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
          }}
        >
          <Heading head="Our Suggestion"></Heading>
          <Box
            //add 5px gap between elements
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ViewMoreButton />
          </Box>
        </Box>

        <Box
          sx={{
            // padding: "1rem",
            margin: "1rem",
            justifyItems: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {Abroad.map((val) => {
              return (
                <CardComponent
                  img={val.imgg}
                  name={val.cardName}
                  check={val.check}
                  no={val.no}
                  fee={val.fee}
                  guide1={val.guide1}
                  guide2={val.guide2}
                  guide3={val.guide3}
                  guide4={val.guide4}
                ></CardComponent>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default StudyAbrodContainer;
