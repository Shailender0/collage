import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HostelImg from './images/hostel.png';

const HostelFees = () => {
  return (
    <>
      <Typography
        sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#210366',
            marginLeft: '1rem'
        }}
      >IIM Bangalore Hostel Fees Structure</Typography>
      <Typography 
        sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontStyle: 'bold',
            color: '#210366',
            fontSize: '12px',
            marginLeft: '1rem'
        }}
      >The details for IIM Bangalore Hostels is as follows:-</Typography>
      <Box sx={{marginLeft: '1rem', marginTop: '1rem', marginBottom: '2rem'}}>
        <Stack direction="row" sx={{width: '100%'}}>
          <Stack spacing={1} sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '14px',
            color: '#210366',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            backgroundColor: '#EEECFE'}}>
            <Typography variant='inherit' sx={{fontWeight: '700', fontSize: '15px', color: '#EEECFE', backgroundColor: '#7B90FF', width: '315px', height: '40px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>Sample Costs for On-Campus Housing</Typography>
            <Typography variant='inherit'>Hostel (dorm) Room Rent and Service</Typography>
            <Typography variant='inherit'>Charge/term</Typography>
            <Typography variant='inherit'>Students Mess (Veg Food)</Typography>
          </Stack>
          <Stack spacing={1} sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '14px',
            color: '#210366',
            alignItems: 'center', 
            justifyContent: 'center', 
            display: 'flex', 
            backgroundColor: '#EEECFE'
          }}>
            <Typography variant='inherit' sx={{fontWeight: '700', fontSize: '15px', color: '#EEECFE', backgroundColor: '#210366', width: '315px', height: '40px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>Cost</Typography>
            <Typography variant='inherit'>INR 20,000 per term</Typography>
            <Typography variant='inherit'>(Single Room Occupancy)</Typography>
            <Typography variant='inherit'>INR 30,000 per month</Typography>
          </Stack>
        </Stack>
      </Box>

      <Box 
        sx={{marginLeft: '1rem', backgroundColor: '#EEECFE', height: '720px', width: '630px', borderRadius: '28px'}}
      >
        <Stack spacing={1} sx={{padding: '10px', position: 'absolute', marginTop: '0.5rem'}}>
          <Stack direction="row" spacing={1}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontStyle: 'bold',
                fontSize: '12px',
                color: '#FF7900',
              }}
            >To know more click here</Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontStyle: 'bold',
                fontSize: '12px',
                color: '#210366',
              }}
            >IIM Bangalore Ranking</Typography>
          </Stack>
          <img src={HostelImg} alt="hostel" style={{width: '600px', height: '650px', marginTop: '1rem'}} />
        </Stack>
      </Box>
    </>
  );
}

export default HostelFees;