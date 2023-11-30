import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const SimpleDropDown = ({ type, options }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl
      sx={{
        backgroundColor: "#7B90FF",
        borderRadius: "0.75rem",
        fontWeight: "600",
        border: "none",
        fontSize: "0.875rem",
        width: "12.5rem",
      }}
    >
      <Select
        value={selectedOption}
        onChange={handleChange}
        sx={{
          width: "auto",
          fontSize: "1rem",
          color: "#FFF",
          border: "none",
          borderRadius: "0.75rem",
          "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              padding: "0.4125rem 0.625rem !important",
            },
        }}
        displayEmpty
      >
        <MenuItem value="" disabled>
          {type}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
            sx={{
              fontWeight: 200,
              fontSize: "1rem",
            }}
            classes={{
              selected: "Mui-selected",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SimpleDropDown;
