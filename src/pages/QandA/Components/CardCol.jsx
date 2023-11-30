import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
const CardCol = ({
  heading,
  avatar,
  userav,
  user,
  reviews,

  getbgColor,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box>      

    <Box
    
    sx ={{ display: "flex",
    //  width : 1000,
      flexDirection:"row",
       gap : "1rem" }}

    >
      

      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          width: 380,
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          id="review_haeding"
          sx={{
            fontStyle: "normal",
            color: "#2F1370",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "600",
            width: 375,
            wordWrap: "break-word",
          }}
        >
          {heading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.8rem !important",
            alignItems: "center",
          }}
        >
          <Avatar
            src={avatar}
            name={userav}
            sx={{
              width: 70,
              height: 70,
              left: 0,
              top: 0,
              borderRadius: 9999,
              bgcolor: getbgColor(userav[(0, 0)].toUpperCase()),
              textTransform: "uppercase",
            }}
          >
            {userav}
          </Avatar>

          <Typography
            id="name"
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            {user}
          </Typography>
        </Box>

        {/* <Box
        sx={{
          height: `${show ? "fit-content" : "5.8 rem"}`,
          overflow: "hidden",
                transition: "height 0.3s ease-in-out",
        }}
      >    */}
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {reviews.map(({ Answer }, index) => {
            return (
              <Box
                sx={{
                  width: 568,
                  height: 86,
                  color: "#2F1370",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
                kye={index}
              >
                {Answer}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleClick}
            sx={{
              display: `${show ? "none" : "block"}`,
              width: 120,
              color: "#FF7900",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              textDecoration: "underline",
              wordWrap: "break-word",
              "&:hover": {
                border: "none",
                Border: "none",
              },
            }}
          >
            Read more
          </Button>
          <Button
            onClick={handleClick}
            sx={{
              display: `${!show ? "none" : "block"}`,
              color: "#FF7900",
              padding: "0",
              background: "none",
              Border: "none",
              width: 120,
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              textDecoration: "underline",
              wordWrap: "break-word",
              "&:hover": {
                background: "none",
                border: "none",
              },
            }}
          >
            Readless
          </Button>
        </Box>
      </Box>
    </Box> 
     </Box> 
    // </Box>
  );
};

export default CardCol;
