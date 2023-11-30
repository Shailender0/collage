import { Button } from '@mui/material';
import React from 'react';

const FoundCollege = (props) => {
  return (
    <Button 
      variant='text'
      sx={{
        backgroundColor: '#7B90FF',
        borderRadius:'12px',
        // height:'2.5rem',
        color:'white',
        minWidth:'4rem',
        minHeight:'2rem',
        // marginRight : '1rem',
        marginBottom : '2rem',
        marginLeft: '0.5rem',
        // padding:'1rem 2rem',
        textAlign:'center',
        justifyContent:'center',
        fontFamily:'Poppins',
        fontSize:'1.4rem',
        fontWeight:'550',
        letterSpacing:'0rem',
        textTransform:'none',
        boxShadow : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        '&:hover':{
          backgroundColor:'white',
          color:'#7B90FF',
        }
      }}
      
    >{props.dt}</Button>
  )
}

export default FoundCollege;
