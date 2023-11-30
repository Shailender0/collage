import { Box, Container, Typography, } from '@mui/material'
import Avatar from '@mui/material/Avatar'

import React from 'react'

export default function RelatedQues({ques,ans,avatar,name,avcolor}) {
    return (
        <Container>
            <Box sx={{
                width: '411px',
                
                padding: '10px 20px 10px 20px',
                gap: '16px',
                boxShadow: '0px 0px 40px 0px #7B90FF26'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '25px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    marginBottom:'1rem',
                    color: '#210366',
                }}>Related Questions</Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '25px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color:'#210366E5',
                 }}>{ques}</Typography>
 
 <Box sx={{display:'flex',
 marginTop:'1rem'
}}>
 <Avatar sx={{ bgcolor: '{avcolor}' }}>{avatar}</Avatar>
  <Typography sx={{marginTop:'10px',marginLeft:'1rem'}}>{name}</Typography>
</Box>

<Box>
    <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'#210366',
        width: '362px',
height: '80px',
 marginTop:'2rem'
    }}>{ans}</Typography>
    <Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
textDecoration:'underline',
color:'#FF7900'
}}>Read More</Typography>
</Box>





            </Box>

        </Container>
    )
}

