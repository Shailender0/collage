import { Box, Typography, Avatar, Container } from '@mui/material'
import React from 'react'

export default function ViewedQues({ques,ans,avatar,name}) {
  return (
    <>
    <Container sx={{
}}>

    
   <Box sx={{
   
    padding: '10px 20px 10px 20px',
    borderRadius: '28px',
    gap: '16px',
    boxShadow: '0px 0px 40px 0px #7B90FF26',
    marginBottom:'1rem',
    
}}>
    <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'#210366',
        marginBottom:'1rem'
    }}>Most Viewed Questions</Typography>

    <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'#210366E5',
        
    }}>{ques}</Typography>

    <Box sx={{display:'flex',marginTop:'1rem'}}>
    <Avatar sx={{ }}>{avatar}</Avatar>
    <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
lineHeight: '20px',
letterSpacing: '0em',
textAlign: 'left',
color:'#210366',
marginTop:'0.7rem',
marginLeft:'0.8rem'
}}>{name}</Typography>
    </Box>
    
    <Typography sx={{
        marginTop:'2rem',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'#210366'
    }}>{ans}</Typography>
   

     <Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
color:'#FF7900',
marginTop:'1.5rem',
textDecoration:'underline'
}}>Read more </Typography>

   </Box>

   </Container>
      
    </>
  )
}
