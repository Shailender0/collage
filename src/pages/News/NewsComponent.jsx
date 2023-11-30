import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Avatar } from "@mui/material";
import NewsComponentChild from "./NewsComponentChild";

export default function NewsComponent(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "650px",
          borderRadius: "0.8rem 0.8rem",
          backgroundColor: "white",
          margin: "1rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7B90FF",
            borderRadius: "0.3rem",
            margin: "1rem",
            width: "fit",
            alignSelf: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            {props.btn_text}
          </Typography>
        </Button>
        <Box
          sx={{
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: "12px",
          }}
        >
          <Avatar
            sx={{ borderRadius: "0.5rem", width: "350px", height: "180px" }}
            alt=" "
            src={props.img}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <NewsComponentChild content={props.news?.[0]} />
            <NewsComponentChild content={props.news?.[1]} />
            <NewsComponentChild content={props.news?.[2]} />
            <NewsComponentChild content={props.news?.[3]} />
            <NewsComponentChild content={props.news?.[4]} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
