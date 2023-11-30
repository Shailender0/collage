import React from "react";
import { Box, Typography } from '@mui/material';
 import imgTop from './images/imgTop.png';
 import imgTop2 from './images/imgTop2.png';

const Top = () => {
    return (
    <>
    <Box sx={{display: 'flex', paddingTop: 3  }}>
        <Box>
     <img src= {imgTop} alt="" />
     </Box>
     <Box sx={{marginLeft: '9px', marginTop: 0}}>
        <Box sx={{display: 'flex',  alignItems: 'stretch'}}>
        <Box 
        sx={{color: '#7B90FF', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            Akanksha Singh
        </Box>
        <Box sx={{marginTop: '5px', marginLeft: '9px'}}>
            <img src={imgTop2} alt="" />
        </Box>
        </Box>
        <Box sx={{paddingTop: '2px', color: '#210366', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            Updated On - June 9th, 2023 05:30 AM IST
            </Box>
     </Box>

    
    
     </Box>


    </>
    )
}
export default Top;
