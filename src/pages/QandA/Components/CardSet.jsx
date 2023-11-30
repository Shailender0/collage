import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CardSet = ({
  // heading1,
  heading,
  find,
  reviews,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  }








  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        width: 410,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
      marginX:-4,

      }}
    >
      <Box  sx={{
         
          textAlign:"center",
          width: 380,
          height: 35,
          background: '#7B90FF',
          borderBottom: "0.50px rgba(0, 0, 0, 0.20) solid",
          borderRadius: 15 ,
          border: "1px solid #7B90FF",
      
        }}>
        
      <Box>
      <Typography
            sx={{
              width: 180,
               color: "white",
              fontSize: 16,
              marginTop:0.6,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word", 
                    }}
          >
            {heading}
                      </Typography>
      </Box>
    </Box>
      <Box
        sx={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          width: 380,
          height: 20,
        
          background: "white",
          borderBottom: "0.50px rgba(0, 0, 0, 0.20) solid",
          borderRadius: 15 ,
border: "1px solid #7B90FF",
paddingTop:2,
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
            alignItems:"center"
          }}
        >
          {find}
         
        </Typography>
        <SearchIcon sx={{alignItems:"center",marginTop:-1,}}/>
      </Box>

     
        <Box sx={{ display: "flex",
                  flexDirection:"column",
                marginTop:1,
                  }}>
          {reviews.map(({ Answer }, index) => {
            return (
              <Box
                sx={{                
                  width: 388,              
                  color: "#2F1370",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display:"flex",
                     leadingTrim: "both",
                   textEdge:"cap",

                }}
                kye={index}
              >
                <List>
                  <ListItem >
                    <ListItemButton sx={{marginTop:-6}}>
                    <Checkbox {...label} />
    <ListItemText > 
    {Answer  }
    </ListItemText>
                       
                </ListItemButton>
                </ListItem>
                </List>
              </Box>
            );
          })}
        </Box>
      </Box>
   
  );
};

export default CardSet;
