import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MyButton from "./../../components/Buttons/MyButton";

const ConceptRender = () => {
  const buttons = [
    {
      label: "Mathemetics",
      link: "#",
    },
    {
      label: "Physics",
      link: "#",
    },
    {
      label: "Biology",
      link: "#",
    },
    {
      label: "Chemistry",
      link: "#",
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "4rem" }}>
        <Box
          sx={{
            // height: "52px",
            // width: "312px",
            borderRadius: "nullpx",
            fontFamily: "Poppins",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0em",
            // textAlign: "left",
            color: "#210366",
          }}
        >
          <Typography variant='h5' sx={{
                    color: "#210366",
                    fontSize: "2.25rem",
                    paddingTop: '1rem',
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif"

                }} >Concept Articles</Typography>
      
        </Box>
      </Box>
      <Container>
      <Box sx={{ margin: "0.2 0" }}>
        <Box sx={{ 
          //gap: 4 
        }}
        >
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Box>
      </Container>
    </>
  );
};

export default ConceptRender;
