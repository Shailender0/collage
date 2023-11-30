import React from "react";
import { Button } from "@mui/material";

const CountryFilterButton = (props) => {
  return (
    <Button
      sx={{
        background: "#7B90FF",
        borderRadius: "12px",
        color: "#fff",
        padding: "5px 19px",
        fontWeight: "600",
        "&:hover": {
          color: "#2f1370",
          textDecorationColor: "#2f1370",
        },
      }}
    >
      {props.name}
    </Button>
  );
};

export default CountryFilterButton;
