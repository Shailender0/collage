import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import img1 from "../../assets/iimblr.png"
import img2 from "../../assets/iimahm.png"
import img3 from "../../assets/isbhyd.png"
import img4 from "../../assets/dms.png"
import img5 from "../../assets/iimlukh.png"
import img6 from "../../assets/iitmadras.png"
import img7 from "../../assets/iitkanpur.png"
import img8 from "../../assets/iitdelhi.png"


export default function PopularComparison() {
  return (
    <>
    <Box sx={{
        width: '996.8738403320312px',
        
        top: '6560.28125px',
        left: '216px',
        borderRadius: '28px',
        boxShadow: '0px 4px 40px 0px #7B90FF1A'
}}>
    
    <Box sx={{display:'flex',paddingTop:'1rem',marginBottom:'1rem'}}>
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
   color:'#210366',
marginLeft:'2rem'
        }}>Popular Comparison</Typography>
  <Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'left',
    color:'#7B90FF',
    marginLeft:'40rem',
    marginTop:'0.5rem'
  }}>VIEW ALL</Typography>

    </Box>
      
      <Divider/>

      <Box sx={{
        width: '897px',
        height: '366.0008239746094px',
        top: '79px',
        left: '49px',
        borderRadius: '28px',
       
      }}>

        <Box>
        
    </Box>
    

     {/*..........images.........*/}

     <Box sx={{display:'flex',marginLeft:'3rem',marginTop:'1rem', paddingBottom:'1.5rem'}}>

        <Box marginRight="1rem">
        <img src={img1}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'2.5rem',
            color:'#000000'
        }}>IIM Bangalore</Typography>
        </Box>

        <Box marginRight="1rem">
        <img src={img2}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'2.5rem',
            color:'#000000'
        }}>IIM Ahamedabad</Typography>
        </Box>

        <Box marginRight="1rem">
        <img src={img3}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'2.5rem',
            color:'#000000'
        }}>ISB Hyderabad</Typography>
        </Box>

        <Box >
        <img src={img4}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'2.5rem',
            color:'#000000'
        }}>DMS IITD MBA</Typography>
        </Box>

        </Box>


    {/*............................................. */}

        <Box sx={{
            display:'flex',marginLeft:'3rem',marginTop:'1rem',paddingBottom:'3rem'
        }}>

       <Box marginRight="1rem">
        <img src={img5}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'3rem',
            color:'#000000'
        }}>IIM Lucknow</Typography>
        </Box>

        <Box marginRight="1rem">
        <img src={img6}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'3rem',
            color:'#000000'
        }}>IIT Madras</Typography>
        </Box>

        <Box marginRight="1rem">
        <img src={img7}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'3rem',
            color:'#000000'
        }}>IIT Kanpur</Typography>
        </Box>

        <Box marginRight="1rem">
        <img src={img8}  /> 
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '23px',
            letterSpacing: '0.699999988079071px',
            textAlign: 'left',
            marginLeft:'3rem',
            color:'#000000'
        }}>IIT Delhi</Typography>
        </Box>


        </Box>

      </Box>


    </Box>
    </>
  )
}
