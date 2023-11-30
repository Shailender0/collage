import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function TopPlacesInCanada(props) {
  return (
    <Box sx={{marginBottom:'20px'}}>
      <Link href="#" sx={{textDecoration: 'none'}}>
        <Box sx={{
          boxSizing: "border-box",
          width: '140px',
          height: '180px',
          marginTop: '20px',
          borderRadius: '12px',
          boxShadow: '0px 0px 40px 0px #7B90FF26',
          paddingTop: '25px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#F3EEFF'
          },
        }}>
          <Box sx={{
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex', 
            flexDirection: 'column',
          }}>
            <img src={props.img} style={{width: '80px', height: '70px'}} />
            <Typography sx={{
              fontFamily: 'poppins',
              fontStyle: 'bold',
              fontWeight: '600',
              fontSize: '12px',
              color: '#210366',
              marginTop: '1rem'
            }}>{props.place}</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}