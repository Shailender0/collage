import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';

export default function QuestionCard({ques,ans,ansby}) {
  return (
    <>
      <Box sx={{
        width: '995px',
        
        top: '4786.28125px',
        left: '216px',
       borderColor: '#FFFFFF',
        marginBottom:'2rem'

       }}>

        <Box display="flex" marginLeft="0.3rem">
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '31px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#FF7900',
                marginRight:'28rem',
                marginTop:'2rem',
            paddingLeft:'1rem'

            }}>
            IIM Bangalore: 224 Answered Questions
            </Typography>

          <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '32px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#FF7900',
                marginTop:'2rem'
            }}>
            VIEW ALL
            </Typography> 
</Box>

<Box sx={
    {
        width: '955px',
height: '125px',
top: '115px',
left: '20px',
marginLeft:'1rem',
marginBottom:'2rem'
    }
}>
<Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginTop:'2rem',
    color:'#210366'
}}>{ques}                                 
 </Typography>

 <Typography sx={{
   fontFamily: 'Poppins',
   fontSize: '16px',
   fontWeight: '400',
   lineHeight: '25px',
   letterSpacing: '0em',
   textAlign: 'left',
   color:'#21036699'
    }}>{ansby}
</Typography>

<Typography sx={{
    color:'#210366',
    fontFamily: 'Poppins',
   fontSize: '16px',
   fontWeight: '500',
   lineHeight: '25px',
   letterSpacing: '0em',
   textAlign: 'left',
}}>{ans}</Typography>
<Typography sx={{
    color:'#FF7900',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
   
}}>Read more</Typography>

</Box>


<Box display="flex" marginBottom='1rem'>
   <ThumbUpAltIcon sx={{
    width: '16px',
    height: '16px',
    top: '271px',
    left: '29px',
    border: '2px',
    color:'#7B90FF',
    marginLeft:'1rem',
    marginRight:'1rem',
    marginTop:'0.5rem'
   }}/> <Typography sx={{
    fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '400',
lineheight: '25px',
letterSpacing: '0em',
textAlign: 'left',
color:'#7B90FF',
marginRight:'1rem',


   }}>0</Typography>

   <ThumbDownAltIcon sx={{
        width: '16px',
        height: '16px',
        top: '271px',
        left: '29px',
        border: '2px',
        color:'#FF7900',
        marginRight:'1rem',
        marginTop:'0.5rem',
        marginLeft:'1rem'
   }}/>
   <Typography sx={{
    fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '400',
lineheight: '25px',
letterSpacing: '0em',
textAlign: 'left',
color:'#FF7900',
marginRight:'1rem',

   }}>0</Typography>
    
    <ShareIcon sx={{width: '19.007474899291992px',
height: '24px',
top: '267px',
left: '181.6103515625px',
color:'#FF7900',
marginTop:'0.2rem'
}}/>



<Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '400',
    lineheight: '25px',
    letterSpacing: '0em',
    // textAlign: 'left',
    color:'#FF7900',
    marginRight:'1rem',
    marginLeft:'4rem',
    
}}>2 Answers</Typography>




</Box>
 
<Divider/>


</Box>


    
    </>
  )
}
