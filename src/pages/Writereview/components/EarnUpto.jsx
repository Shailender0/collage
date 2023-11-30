import { Box, Typography, Link } from "@mui/material";
import React from "react";
import img from "../images/3.png";
import BoldHeading from "../../../components/Headings/BoldHeading";
import Orangespan from "../../../components/Headings/Orangespan";
import FilledButton from "../../../components/Buttons/FilledButton";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const EarnUpto = () => {
  console.log(img, "kkk");
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        color: "#2F1370",
      }}
    >
      <Box
        sx={{
          flex: "2.5",
        }}
      >
        <Box sx={{ marginBottom: "2rem" }}>
          <BoldHeading>
            Write a Review & Earn Up to <Orangespan>₹500*</Orangespan>
          </BoldHeading>
          <Typography sx={{ color: "#2F1370", fontWeight: "600" }}>
            Refer & Earn ₹40 for Every Approved Review
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            paddingLeft: "1rem",
          }}
        >
          <Box>
            <Typography>
              ₹500 for writing the Review of{" "}
              <Orangespan>Selected Colleges</Orangespan>
            </Typography>
            <Typography>Up to ₹200 for the colleges</Typography>
          </Box>
          <Typography>
            *Only the first 20 Reviewers (In this month) of a College will get
            the Full Reward, and the Reward amount will decrease afterward.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <FilledButton color="#7B90FF">Start Writing</FilledButton>
            <Link sx={{ textDecoration: "none", curser: "pointer" }}>
              <Orangespan>Read Guidelines</Orangespan>
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box sx={{ padding: "1rem", textAlign: "center" }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <RequestQuoteOutlinedIcon
                  sx={{ color: "#FFA500", marginRight: "1rem" }}
                />
                Cash rewarded
              </Typography>
              <Typography variant="h6">13.1.Lakhs</Typography>
            </Box>
            <Box sx={{ padding: "1rem", textAlign: "center" }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <RateReviewOutlinedIcon
                  sx={{ color: "#FFA500", marginRight: "1rem" }}
                />
                Reviews Collected
              </Typography>
              <Typography variant="h6">13.1k+ Reviews</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: "2",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img src={img} alt="log" style={{ width: "70%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default EarnUpto;
