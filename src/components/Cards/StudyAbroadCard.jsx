import { Avatar, Box, Link, SvgIcon, Typography } from "@mui/material";
import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import OurSuggestionButton from "../Buttons/OurSuggestionButton";

const StudyAbroadCard = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "340px",
        height: "400px",
        borderRadius: "28px",
        boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15);",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        padding: "1.5rem",
        margin: "0.5rem",
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          src={props.img}
          sx={{
            height: "4.5rem",
            width: "4.5rem",
            backgroundColor: "white",
            margin: "0rem",
            padding: "0rem",
          }}
        ></Avatar>
        <Box
          sx={{
            backgroundColor: "rgba(123, 144, 255, 0.2);",
            width: "100%",
            borderRadius: "0 10px 10px 0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              color: "#210366",
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              fontWeight: "700",
              lineHeight: "1.2rem",
              letterSpacing: "0.03rem",
              //nowrap
              whiteSpace: "nowrap",
              textAlign: "left",
              padding: "0.5rem 0 0 0.5rem",
            }}
          >
            {props.name}
          </Typography>
          <Link
            sx={{
              // margin:'1rem',
              color: "#210366",
              fontSize: "0.6rem",
              fontWeight: "700",
              fontFamily: "Poppins",
              letterSpacing: "0.00001em",
              alignSelf: "left",
              padding: "0.15rem 0 0.5rem 0.5rem  ",
            }}
          >
            {props.check}
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={SchoolOutlinedIcon}
            sx={{
              color: "#210366",
              marginRight: "1rem",
              height: "1.25rem",
              width: "1.25rem",
            }}
          ></SvgIcon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0rem",
              padding: "0rem",
              // height:'2px'
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.6rem",
                fontWeight: "900",
                color: "#210366",
                paddingBottom: "0rem",
                lineHeight: "0.5rem",
                letterSpacing: "0rem",
              }}
            >
              {props.no}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.5rem",
                fontWeight: "900",
                color: "#210366",
                paddingBottom: "0rem",
                lineHeight: "1rem",
                letterSpacing: "0.02rem",
              }}
            >
              No. of colleges
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "0.25rem",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={PaidOutlinedIcon}
            sx={{
              color: "#210366",
              marginRight: "1rem",
              height: "1.25rem",
              width: "1.25rem",
            }}
          ></SvgIcon>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0rem",
              padding: "0rem",
              // height:'2px'
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.6rem",
                fontWeight: "900",
                color: "#210366",
                paddingBottom: "0rem",
                lineHeight: "0.5rem",
                letterSpacing: "0rem",
              }}
            >
              {props.fee}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.5rem",
                fontWeight: "700",
                color: "#210366",
                paddingBottom: "0rem",
                lineHeight: "1rem",
                letterSpacing: "0.02rem",
              }}
            >
              Avg study cost
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "0.7rem",
          fontWeight: 1000,
          color: "#210366",
          paddingBottom: "0rem",
          lineHeight: "1rem",
          letterSpacing: "0.02rem",
          marginTop: "0.5rem",
        }}
      >
        Guides
      </Typography>

      <Box
        sx={{
          alignItems: "left",
          marginTop: "1rem",
        }}
      >
        <OurSuggestionButton label={props.guide1}></OurSuggestionButton>
        <OurSuggestionButton label={props.guide2}></OurSuggestionButton><br/>
        <OurSuggestionButton label={props.guide3}></OurSuggestionButton>
        <OurSuggestionButton label={props.guide4}></OurSuggestionButton>
      </Box>
    </Box>
  );
};

export default StudyAbroadCard;
