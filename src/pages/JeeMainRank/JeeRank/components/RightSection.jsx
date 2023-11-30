import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import img5 from "../../assets/gift.png"
import img6 from "../../assets/image 5.png"

export default function RightSection() {
  return (
    <>
    <Container sx={{marginLeft:'0.5rem'}}>

   
     <Box sx={{
        width: '408px',
        top: '190px',
        left: '1295px',
        padding: '20px 10px 20px 10px',
        borderRadius: '28px',
        gap: '48px',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
      

     }}>
        <Box sx={{marginLeft:'5.2rem',marginBottom:'2rem'}}>
        <img src={img5} alt="" srcset="" />
        </Box>

     

        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '25px',
            letterSpacing: '0em',
            marginLeft:'4rem'
          }}>
        ANSWER THE FOLLOWING 
</Typography>
<Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '25px',
            letterSpacing: '0em',
            marginLeft:'4rem'
          }}>QUESTIONS AND WIN ₹ 20</Typography>
   
   <Box sx={{
gap: '130px',
height:'45px',
marginTop:'2.5rem'
}}>
   
    <Button sx={{
       padding: '10px 20px 10px 20px',
        borderRadius: '10px',
       backgroundColor: '#FFC727',
        marginLeft:'1rem'
}}>
    <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '25px',
        letterSpacing: '0em',
        color: '#FFFFFF',
        textTransform:'capitalize',
        
}}>Sign  In </Typography>
  </Button>

  <Button sx={{
    padding: '10px 20px 10px 20px',
   borderRadius: '10px',
   border: '2px solid #7B90FFCC',
   marginLeft:'9rem'
  }}><Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '25px',
    letterSpacing: '0em',
   }}>Sign  Up </Typography></Button>
 </Box>

 <Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginTop:'2rem'
 }}>Check Terms and Conditions*</Typography>

 </Box>

    {/*...................................................... */}
 

 <Box sx={{
    width: '402px',
    height: '345px',
    borderRadius: '20px',
    border: '4px',
    boxShadow: ' #7B90FF26',
    marginTop:'1rem',
    marginBottom:'1rem'

 }}>
    <Box sx={{
        width: '331px',
        height: '45px',
        top: '40px',
        padding: '0px 0px 0px 10px',
        display:'flex'
        
      }}>
        <Box sx={{width: '34px',
height: '30px',
marginTop:'0.5rem',
}}>
        <img src={img6} alt="" srcset="" />
        </Box>

      <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#210366',
        marginTop:'0.7rem',
        marginLeft:'0.3rem'
      }}>NIT TRICHY, Tiruchirappalli</Typography>
    </Box>
   

   {/*..........Button............... */}
    <Box>
    
    <Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginLeft:'1rem',
        marginRight:'2rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Home</Typography></Button>


<Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginBottom:'1rem'

    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Faculty</Typography></Button>


<Button sx={{
        width: '150px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginLeft:'1rem',
        marginRight:'1rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Placement</Typography></Button>


<Button sx={{
        width: '159px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Scholarship</Typography></Button>


<Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginLeft:'1rem',
        marginRight:'1rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Reviews</Typography></Button>


<Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginRight:'1rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366',

 }}>Hostel </Typography></Button>


<Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>News</Typography></Button>


<Button sx={{
        width: '130px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginLeft:'1rem',
        marginRight:'1rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Ranking</Typography></Button>


<Button sx={{
        width: '115px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginRight:'2rem',
        marginBottom:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Cutoff</Typography></Button>

<Button sx={{
        width: '111px',
        height: '45px',
        padding: '12px 31px 12px 31px',
        borderRadius: '20px',
        gap: '5px',
        border: '4px solid #7B90FF',
        marginLeft:'1rem'
    }}><Typography sx={{
    
fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '600',
textTransform:'capitalize',
letterSpacing: '0em',
textAlign: 'center',
color:'#210366'
 }}>Gallery</Typography></Button>

    </Box>

 </Box>

 </Container>

    </>
  )
}
