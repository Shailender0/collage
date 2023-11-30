import React from "react";
import SuggestionCards from "../../components/Cards/SuggestionCards";
import { Card2 } from "../../data/DataLanding";
import { Box, Container, Stack } from "@mui/material";
import Heading from "../../components/Headings/Heading";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import SearchButton from "../../components/Buttons/SearchButton";

const OurSuggestion = () => {
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
              gap: "5px",
            }}
          >
            <SearchButton />
            <ViewMoreButton />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // marginY: "2rem",
            // marginX: "4rem",
            flexWrap: "wrap",
          }}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            marginTop="2rem"
          >
            {Card2.map((val, index) => {
              return (
                <SuggestionCards
                  key={index}
                  image={val.image}
                  review_icon={val.review_icon}
                  img_logo={val.img_logo}
                  card_title={val.card_title}
                  title_text={val.title_text}
                  review_rate={val.review_rate}
                  review_cnt={val.review_cnt}
                  btn_contents={val.btn_contents}
                  btn2={val.btn2}
                  btn3={val.btn3}
                  btn4={val.btn4}
                  img_title={val.img_title}
                  img_body={val.img_body}
                />
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default OurSuggestion;
