import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link, Avatar } from "@mui/material";

const MoreNewsComponent = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "340px",
          borderRadius: "0.8rem 0.8rem",
          backgroundColor: "white",
          margin: "1rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        }}
      >
        <Avatar
          sx={{ borderRadius: "0.5rem", width: "350px", height: "180px" }}
          alt=" "
          src={props.img}
        />
        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.6rem",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#210366",
          }}
        >
          {props.date}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.9rem",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#210366",
          }}
        >
          {props.heading}
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            margin: "0.5rem 1rem 0rem 1rem",
            fontSize: "0.6rem",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#210366",
          }}
        >
          {props.content}
        </Typography>
        <Link href="#">
          <Typography
            sx={{
              textAlign: "left",
              margin: "0.5rem 1rem 0rem 1rem",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#FF7900",
              textTransform: "capitalize",
              textDecoration: "underline",
            }}
          >
            {props.read_link}{" "}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default MoreNewsComponent;
