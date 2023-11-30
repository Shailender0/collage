import React from "react";
import { Box, Stack, Typography, Link, Button } from "@mui/material";

const CollegesCards = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "450px",
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "1rem",
          // marginRight:"2rem",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "180px",
            borderRadius: "1rem 1rem 0 0",
            backgroundColor: props.bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img  src={props.img} width="200px" height="160px" />
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginX: "2rem",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              backgroundColor: "#7B90FF",
              fontFamily: "Poppins",
              fontSize: "0.5rem",
              fontWeight: "700",
              marginY: "0.5rem",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              paddingX: "1rem",
            }}
          >
            {props.titles}
          </Button>
          <img src={props.icon} />
        </Stack>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "Poppins",
            fontWeight: "700",
            marginX: "1rem",
            marginTop: "0.5rem",
            color: "#210366",
          }}
        >
          {props.contents}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.8rem",
            fontFamily: "Poppins",
            fontWeight: "600",
            margin: "1rem",
            color: "#210366",
            height: '130px'
          }}
        >
          {props.contents_body}
        </Typography>
        <Link href="#">
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#210366",
              textTransform: "capitalize",
              textDecoration: "underline",
              fontWeight:"bold",
            }}
          >
            {props.content_link}{" "}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default CollegesCards;
