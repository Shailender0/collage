import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

const SuggestionCards = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "430px",
          borderRadius: "2rem",
          backgroundColor: "white",
          margin: "1rem",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "180px",
            borderRadius: "1rem 1rem 0 0",
            backgroundImage: `url(${props.image})`,
            // filter: "brightness(80%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginX: "2rem",
            }}
          >
            <Avatar src={props.img_logo} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  textAlign:"left",
                  fontFamily: "Poppins",
                  fontWeight: "800",
                  marginX: "1rem",
                  marginTop: "0.5rem",
                  color: "white",
                }}
              >
                {props.img_title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "11px",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  marginTop: "0.5rem",
                  color: "white",
                }}
              >
                {props.img_body}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginX: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: "700",
                // marginX: "1rem",
                marginTop: "0.5rem",
                color: "#210366",
              }}
            >
              {props.card_title}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "0.6rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#210366",
              }}
            >
              {props.title_text}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={props.review_icon}
              sx={{ width: "20px", height: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginX: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "0.6rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  // marginX: "1rem",
                  marginTop: "0.5rem",
                  color: "#210366",
                }}
              >
                {props.review_rate}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "0.6rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#210366",
                }}
              >
                {props.review_cnt}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            marginX: "1rem",
            flexDirection: "column",
          }}
        >
          <Button
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.5rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
              paddingY: "0.5rem",
            }}
          >
            {props.btn_contents}
          </Button>
          <Button
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.2rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
            }}
          >
            {props.btn2}
          </Button>
          <Button
            variant="text"
            sx={{
              width: "95%",
              marginY: "0.3rem",
              backgroundColor: "rgba(123, 142, 255, 0.3)",
              color: "#210366",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {props.btn3}
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "40%",
              marginY: "0.5rem",
              color: "#210366",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "600",
              borderRadius: "0.8rem",
              textTransform: "capitalize",
              textAlign: "left",
              borderWidth: "2px",
            }}
          >
            {props.btn4}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestionCards;
