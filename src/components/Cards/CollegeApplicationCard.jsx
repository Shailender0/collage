import React from 'react';
import { Box, Typography } from '@mui/material';

const CollegeApplicationCard = (props) => {
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
        width: '250px',
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
        <Typography variant='inherit' sx={{paddingLeft: '1rem'}}>{props.university}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0px',
        justifyContent: 'space-between',
        width: '760px',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '16px',
        color: '#210366'
      }}>
        <Typography variant='inherit' sx={{width:  '200px', fontSize: '14px', fontWeight: '600'}}>{props.events}</Typography>
        <Typography variant='inherit' sx={{paddingRight: '8rem'}}>{props.start}</Typography>
        <Typography variant='inherit' sx={{fontWeight: '600', paddingRight: '6rem'}}>{props.end}</Typography>
      </Box>
    </Box>
  )
}

export default CollegeApplicationCard;
