import { Box, Button, Typography} from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchBar from "./SearchBar";

const Search = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, marginTop: 2 }}>
      <Box
        sx={{
          width: 624,
          boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.20)",
          justifyContent: "flex-between",
          alignItems: "center",
          gap: 8,
          display: "inline-flex",
        }}
      >
     <SearchBar placeholder="Search Questions"/>
        
        <Box               
          sx={{
            boxShadow: 300,
          }}
        >
          <Button
            sx={{
              // left: 20.17,
             
              top: 9,
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: "DM Sans",
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop: -2,
              alignItems: "center",
              width: 253,
              height: 40,
              background: "#7B90FF",
              display: "flex",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            Search Course
          </Button>
        </Box>
      </Box>
      <Box
        style={{
          width: 253,
          height: 40,
          background: "#FF7900",
          borderRadius: 15,
          marginTop: 10,
        }}
      >
        <Button
          sx={{
            left: 30.17,

            alignItems: "center",
            marginTop: "-0.3",
            // textAlign: "center",
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
            wordWrap: "break-word",
            marginLeft: 3,
          }}
        >
          Add Question
        </Button>
      </Box>
      <Box>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            background: "white",
            borderRadius: 20,
            border: "2px #7B90FF solid",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
            width: 253,
            height: 40,
            marginTop: 1,
          }}
        >
          <MenuItem value="">
            <em>Sort By:Most Relevant</em>
          </MenuItem>
          <MenuItem value={10}>last year</MenuItem>
          <MenuItem value={20}>Most common</MenuItem>
          <MenuItem value={30}>Most frequent</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Search;
