import React from "react";
import QuestionSet from "./QuestionSet";
import Question from "./Question";
import { Box, Container } from "@mui/material";
import MyButton from "./MyButton";
import Typography from "@mui/material/Typography";

const StudyAbroad = () => {
  const buttons = [
    {
      label: "NEW ZEALAND",
      link: "#",
    },
    {
      label: "UK",
      link: "#",
    },
    {
      label: "CANADA",
      link: "#",
    },
    {
      label: "USA",
      link: "#",
    },
    {
      label: "HONGKONG",
      link: "#",
    },
    {
      label: "SWEDEN",
      link: "#",
    },

    {
      label: "FRANCE",
      link: "#",
    },
    {
      label: "UAE",
      link: "#",
    },
    {
      label: "NETHERLANDS",
      link: "#",
    },
    {
      label: "FRANCE",
      link: "#",
    },
    {
      label: "ITALY",
      link: "#",
    },
    {
      label: "AUSTRALIA",
      link: "#",
    },
    {
      label: "IRELAND",
      link: "#",
    },
    {
      label: "MALAYSIA",
      link: "#",
    },
    {
      label: "SINGAPORE",
      link: "#",
    },
  ];

  return (
    <>
      {/* <Container maxWidth="lg"> */}
      {/* <Box sx={{ margin: "0", marginBottom: "4rem", marginTop: "2rem" }}> */}

      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 18,
          marginTop: 2,
          display: "inline-flex",
        }}
      >
        <Box
          sx={{
            borderShadow: 303,
            height: 2756,
            width: 303,
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              width: 379,
              height: 451,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 0.1,
              display: "inline-flex",
              marginLeft:-1,
            }}
          >
            <Typography
              sx={{
                width: 239,
                color: "#41355D",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Study Abroad Countries
            </Typography>

            <Container
              maxWidth="m"
              sx={{
                gap: 0.8,
                marginTop: "18px",
                height: 23,
                margin:-2
              }}
            >
              {buttons.map((button, index) => (
                <MyButton key={index} label={button.label} link={button.link} />
              ))}
            </Container>
          </Box>

          <QuestionSet />
        </Box>
        <Question />
      </Box>
    </>
  );
};

export default StudyAbroad;
