import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Card = ({ heading, find, reviews }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

    
    <Stack
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        width:"115%",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        marginX: -4,
      }}
    >
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          // width:"80%",
          height: 35,
          background: "#7B90FF",
          borderBottom: "0.50px rgba(0, 0, 0, 0.20) solid",
          borderRadius: 15,
          border: "1px solid #7B90FF",
          color: "white",
        }}
      >
        <MenuItem value="" c>
          <em>{heading}</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          // width:"80%",
          height: 20,
          background: "white",
          borderBottom: "0.50px rgba(0, 0, 0, 0.20) solid",
          borderRadius: 15,
          border: "1px solid #7B90FF",
          paddingTop: 2,
        }}
      >
        <Typography
          sx={{
            width: 185,
            height: 16.22,
            color: "#210366",
            fontSize: 15,
            fontFamily: "Poppins",
            fontWeight: "600",
            wordWrap: "break-word",
            marginTop: -1,
            alignItems: "center",
          }}
        >
          {find}
        </Typography>
        <SearchIcon sx={{ alignItems: "center", marginTop: -1 }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 1 }}>
        {reviews.map(({ Answer }, index) => {
          return (
            <Box
              sx={{
                
                color: "#2F1370",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                display: "flex",
                leadingTrim: "both",
                textEdge: "cap",
              
              }}
              kye={index}
            >
              <List>
                <ListItem>
                  <ListItemButton sx={{ marginTop:-6,}}>
                    <Checkbox {...label} />
                    <ListItemText>{Answer}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Card;
