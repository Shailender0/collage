import React from "react";
import { Button } from "@mui/material";

const FilledButton = ({ color, children, handleclick }) => {
  return (
    <Button
      sx={{
        background: color,
        borderRadius: "12px",
        color: "#fff",
        padding: "5px 19px",
        fontWeight: "600",
        textTransform: "capitalize",
        width: "fit-content",
        "&:hover": {
          color: "#2f1370",
          textDecorationColor: "#2f1370",
        },
      }}
      onClick={handleclick}
    >
      {children}
    </Button>
  );
};

export default FilledButton;
