import { Box, Button, Container, Typography,Stack,TextField } from '@mui/material'
import React from 'react'
import img1 from "../../assets/question.png"

export default function Trending() {
  return (
    <Container sx={{marginBottom:'1rem'}}>
       <Typography sx={{
         color: '#2F1370',
        fontFamily: 'Poppins',
         fontSize: '36px',
         fontStyle: 'normal',
         fontWeight: '600',
         letterSpacing: '0.72px',
       }}>
       Trending Topics
       </Typography>

      <Stack direction="row" sx={{
        display: 'inline-flex',
        padding: '20px 0px',
         
      flexWrap:'wrap',
        alignItems: 'flex-start',
        gap: '15px',
      }}>
        <Button sx={{
height: '45px',
padding: '12px 31px',
justifyContent: 'center',
alignItems: 'center',
borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',}}><Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>IIT Guwahati</Typography></Button>


<Button sx={{
  
  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>MBA/PGDM</Typography>
</Button>


<Button sx={{
  
  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>XLRI XSM Jamshedpur</Typography>
</Button>

<Button sx={{

  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>BE/B.Tech</Typography>
</Button>


<Button sx={{
  
  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>TAPMI Manipal</Typography>
</Button>

<Button sx={{
 
  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>ME/M.Tech</Typography>
</Button>

<Button sx={{
 
  height: '45px',
  padding: '12px 31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
border: '4px solid #7B90FF',
background: '#FFF',
}}>
  <Typography sx={{
  color: '#210366',
textAlign: 'center',
fontFamily: 'Poppins',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '22px',
}}>PUMBA Pune</Typography>
</Button>

      </Stack>

          <Box sx={{
            width: '411px',
            padding: '20px 10px 20px 10px',
            borderRadius: '28px',
            gap: '31px',
            boxShadow: '0px 0px 40px 0px #7B90FF26'
            }}>

              <Box sx={{
                marginLeft:'2rem'
              }}>
              <img src={img1}  />
              </Box>

              <Typography sx={{
                color: '#210366',
                width: '331px',
                height: '50px',
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '126.523%',
                textAlign:'center' ,
                marginBottom:'1rem',
                marginTop:'2rem',
                marginLeft:'1rem'
              }}>Get Answers on Test Preparation
Admission & Campus Life</Typography>
 
<TextField id="outlined-basic" label="Write your comment" variant="outlined" sx={{width: '331px',
height: '50px',
padding: '0px 10px 0px 10px',
border: '1px ',
marginLeft:'1rem',
marginTop:'1rem'
}}/>

    <Button variant='contained' sx={{width: '391px',
height: '38px',
padding: '10px 20px 10px 20px',
borderRadius: '10px',
gap: '40px',
backgroundColor:'#FF7900',
marginTop:'2rem',
marginBottom:'0.5rem',
marginLeft:'0.5rem'
}}
> <Typography sx={{
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left',
  textTransform:'capitalize'
}
}>Add Question</Typography></Button>
          </Box>
       


    </Container>
    
  )
}
