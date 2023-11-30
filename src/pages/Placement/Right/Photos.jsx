import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
// import Img1 from '../images/Img1';
// import Img2 from '../images/Img2';
// import Img3 from '../images/Img3';
// import Img4 from '../images/Img4';
// import Img5 from '../images/Img5';
// import Img6 from '../images/Img6';

const Photos = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem', 
        borderRadius: '28px',  
        backgroundColor: '#FFFFFF', 
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle : 'bold',
            fontSize: '20px',
            color: '#210366',
            marginLeft: '-18rem'
          }}
        >Photos</Typography>
        {/* <Stack spacing={1} sx={{marginTop: '1rem'}}>
          <Stack direction="row" spacing={1}>
            <img src={Img1} style={{width: '176px', height: '70px'}} />
            <img src={Img2} style={{width: '176px', height: '70px'}} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <img src={Img3} style={{width: '176px', height: '70px'}} />
            <img src={Img4} style={{width: '176px', height: '70px'}} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <img src={Img5} style={{width: '176px', height: '70px'}} />
            <img src={Img6} style={{width: '176px', height: '70px'}} />
          </Stack>
        </Stack> */}
        <Button
          sx={{
            padding: '8px 28px 8px 28px',
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '14px',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            backgroundColor: '#FF7900',
            borderRadius: '12px',
            marginTop: '1rem',
          }}
        >View All</Button>
      </Box>
    </>
  )
}

export default Photos;
;