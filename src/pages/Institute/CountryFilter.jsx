import React from "react";
import { Box } from "@mui/material";
import Btns from "./Data";
import CountryFilterButton from "../../components/Buttons/CountryFilterButton";

const CountryFilter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {Btns.map((btn) => (
        <CountryFilterButton key={btn.index} index={btn.index} name={btn.name} />
      ))}
    </Box>
  );
};

export default CountryFilter;
