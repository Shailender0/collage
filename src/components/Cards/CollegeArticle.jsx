import React from "react";
import { Box, Stack, Typography, Link, Button } from "@mui/material";

const CollegeArticle = (props) => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            height: "400px",
            borderRadius: "1rem",
            backgroundColor: "white",
            margin: "1rem",
            boxShadow: '0px 0px 40px 0px #7B90FF26'
          }}
        >
          <Box
            sx={{
              width: "350px",
              height: "140px",
              borderRadius: "1rem 1rem 0 0",
            }}
          >
            <img width="350px" height="140px" src={props.img} />    
            <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginX: "2rem",
              marginTop: "-3rem"
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#210366",
                backgroundColor: "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "0.5rem",
                fontWeight: "700",
                marginY: "0.5rem",
                borderRadius: "0.8rem",
                textTransform: "capitalize",
                paddingX: "1rem",
              }}
            >
              {props.date}
            </Button>
            <img src={props.icon} />
          </Stack>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
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
              height: '130px',
              textAlign: "center",
              fontSize: "12px",
              fontFamily: "Poppins",
              fontWeight: "600",
              margin: "1rem",
              color: "#210366",
            }}
          >
            {props.contents_body}
          </Typography>
          <Link href="#">
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#210366",
                textTransform: "capitalize",
                textDecoration: "underline",
                fontWeight:"bold"
              }}
            >
              {props.content_link}{" "}
            </Typography>
          </Link>
        </Box>
      </>
    );
  };
  
  export default CollegeArticle;