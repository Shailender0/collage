import React from 'react';
import HostelDetailsCard from '../../components/Cards/HostelDetailsCard';
import {HostelDetailsData} from './Data';
import { Typography, Box, Stack } from '@mui/material';

const HostelDetails = () => {
  return (
    <>
      <Box 
        sx={{
          marginLeft: '1rem', 
          marginTop: '2rem', 
          marginBottom: '2rem', 
          backgroundColor: '#EEECFE', 
          width: '630px',
        }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '20px',
            color: '#210366',
            paddingTop: '2%'
          }}
          >IIM Bangalore Hostel Details</Typography>
          <Stack direction="row" sx={{width: '100%', marginTop: '2rem'}}>
            <Stack spacing={2} sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: 600,
              fontSize: '14px',
              color: '#210366',
              alignItems: 'center', 
              justifyContent: 'center', 
              display: 'flex'}}>
              <Typography variant='inherit' sx={{fontWeight: 700, fontSize: '15px', color: '#EEECFE', backgroundColor: '#7B90FF', width: '315px', height: '40px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Hostel Component</Typography>
              <Typography variant='inherit'>Hostel Blocks</Typography>
              <Typography variant='inherit'>Executive Block</Typography>
              <Typography variant='inherit'>Executive Accomodation Block- At MDC</Typography>
            </Stack>
            <Stack spacing={2} sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: 600,
              fontSize: '14px',
              color: '#210366',
              alignItems: 'center', 
              justifyContent: 'center', 
              display: 'flex'
            }}>
              <Typography variant='inherit' sx={{fontWeight: 700, fontSize: '15px', color: '#EEECFE', backgroundColor: '#210366', width: '315px', height: '40px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Availability(in number)</Typography>
              <Typography variant='inherit'>10</Typography>
              <Typography variant='inherit'>1</Typography>
              <Typography variant='inherit'>1</Typography>
            </Stack>
          </Stack>
      </Box>

      <Box sx={{
        marginTop: '1rem',
        marginLeft: '1rem',
        width: '630px',
        backgroundColor: '#EEECFE',
        boxShadow: '0px 0px 40px 0px #7B90FF26'
      }}>
        {HostelDetailsData.map((item, id) => {
          return (
            <HostelDetailsCard
              key={id}
              {...item}
            />
          )
        })}
      </Box>
    </>
  )
}

export default HostelDetails;
