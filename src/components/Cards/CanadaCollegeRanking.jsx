import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CanadaCollegeRanking(props) {
  return (
    <Box sx={{
      display: 'flex',
      width: "100%",
      margin: "0px",
      justifyContent: "space-between",
      padding: '0px 40px 0px 40px',
      marginTop: '1rem',
      marginBottom: '0.5rem'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366'
      }}>
        <img src={props.img} />
        <Typography variant='inherit' sx={{paddingLeft: '2rem'}}>{props.college}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0px',
        justifyContent: 'space-between',
        width: '380px',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366'
      }}>
        <Typography variant='inherit'>{props.ranking}</Typography>
        <Typography variant='inherit' sx={{paddingRight: '2.5rem'}}>{props.streams}</Typography>
      </Box>
    </Box>
  )
}