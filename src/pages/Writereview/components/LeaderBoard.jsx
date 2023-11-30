import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import data from "../data.js";
import Top3Ranker from "./Top3Ranker.jsx";
import FilledButton from "../../../components/Buttons/FilledButton.jsx";

const LeaderBoard = () => {
  function getTopRankers(data) {
    const sortedData = data.sort((a, b) => a.rank - b.rank);
    const topRankers = sortedData.slice(0, 3);
    return topRankers;
  }

  // Usage example:
  const topRankers = getTopRankers(data);
  const [filterData, setFilterData] = useState(data);

  const handleFilter = () => {
    const k = data.filter(({ date }) => {
      const reviwDate = date.split("-");
      const currdate = new Date();
      const month = currdate.getMonth();
      return month === parseInt(reviwDate[1]);
    });

    setFilterData(k);
  };

  console.log(topRankers);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FilledButton color="orange" handleclick={handleFilter}>
          This Month
        </FilledButton>
        <FilledButton color="#7B90FF">This Week</FilledButton>
        <FilledButton color="#7B90FF">This Quater</FilledButton>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {topRankers.map((ranker, index) => {
          return <Top3Ranker key={index} {...ranker} />;
        })}
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            width: "10%",
            color: "#2F1370",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Rank
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            width: "30%",
            color: "#2F1370",
            fontWeight: "700",
          }}
        >
          Student Name & College Name
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            width: "30%",
            color: "#2F1370",
            fontWeight: "700",
          }}
        >
          Course
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            width: "15%",
            color: "#2F1370",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Review Count
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            width: "15%",
            color: "#2F1370",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Cash Earned
        </Typography>
      </Box>
      {filterData.map((item) => (
        <Box
          key={item.rank}
          sx={{
            width: "100%",
            display: "flex",
            fontSize: "0.9rem",
            lineHeight: "1.3rem",
            fontWeight: "500",
            gap: "1rem",
          }}
        >
          <Typography
            variant="p"
            sx={{ width: "10%", color: "2F1370", textAlign: "center" }}
          >
            #{item.rank}
          </Typography>
          <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <Typography variant="p" color="#2F1370">
              {item.name}
            </Typography>
            <Typography variant="p" color="gray">
              {item.college}
            </Typography>
          </Box>
          <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <Typography variant="p" color="#2F1370">
              {item.stream}
            </Typography>

            <Typography variant="p" color="gray">
              {item.courses.join(", ")}
            </Typography>
          </Box>

          <Typography
            variant="p"
            sx={{ width: "15%", color: "#2F1370", textAlign: "center" }}
          >
            {item.reviewsCount}
          </Typography>
          <Typography
            variant="p"
            sx={{ width: "15%", color: "#2F1370", textAlign: "center" }}
          >
            ₹{item.cashEarned}
          </Typography>
        </Box>
      ))}
      <FilledButton color="#7B90FF">Check more Details</FilledButton>
    </Box>
  );
};

export default LeaderBoard;
