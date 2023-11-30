import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import GrayButton from "../Buttons/GrayButton";
import OrangeButton from "../Buttons/OrangeButton";
import BlueButton from "../Buttons/BlueButton";

const CollegeCard = (props) => {
  return (
    <Box
      sx={{
        height: "160px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        marginTop: "2rem",
        boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "1.5rem",
          color: "#41355D",
          display: "flex",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "1rem",
        }}
      >
        {props.id}
      </Typography>
      <Avatar
        src={props.img}
        sx={{
          height: "120px",
          width: "120px",
          padding: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          border: "0.1px solid #7B90FF",
        }}
      />
      <Box
        sx={{
          display: "flex",
          marginLeft: "2rem",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "0.7rem",
          width: "47%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          {props.location}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "0.2rem" }}>
          <GrayButton text="View Details" />
          <GrayButton text="Placements" />
          <BlueButton text="Add To Compare" link={props.reviews} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.2rem",
            whiteSpace: "nowrap",
          }}
        >
          <GrayButton text={`Course & Fees: ${props.fees}`} />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1rem",
              color: "#210366",
              marginLeft: "0.3rem",
              paddingTop: "0.2rem",
            }}
          >
            {props.otherfee}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "0.7rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          marginLeft: "1rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft: "0.3rem",
            paddingTop: "0.2rem",
          }}
        >
          {props.stars}
        </Typography>

        <Rating
          name="read-only"
          value={props.stars}
          sx={{ color: "#7B90FF" }}
          precision={0.1}
          readOnly
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginRight: "1rem",
        }}
      >
        <OrangeButton text="Brochure" link={props.brochure} />
        <OrangeButton text="Enquire" link={props.enquire} />
      </Box>
    </Box>
  );
};

export default CollegeCard;
