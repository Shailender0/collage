import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import rating from "../../assets/rating.png"
import academic from "../../assets/academic.png"
import accomodation from "../../assets/accomodation.png"
import faculty from "../../assets/faculty.png"
import infrastructure from "../../assets/infrastructure.png"
import placement from "../../assets/placement.png"
import sociallyf from "../../assets/sociallyf.png"



export default function CollegeRating() {
  return (
   <>

    
    <Box sx={{
      width: '995px',
height: '329px',
top: '1006px',
left: '214px',
borderRadius: '28px',
boxShadow: '0px 4px 40px 0px #7B90FF26',
marginBottom:'2rem'
}}>
  <Box sx={{display:'flex'}}>
  <Typography sx={{fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
color:'#210366',
marginBottom:'1rem',
marginLeft:'1rem',
marginTop:'1rem'
}}>College Rating</Typography>

<Typography sx={{
  fonFfamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
marginLeft:'25rem',
color:'#210366',
marginBottom:'1rem',
marginTop:'1rem'

}}>Based on <span style={{color:'#FF7900'}}>74 students</span>  Rating <span style={{color:'#FF7900'}}> CLAIM THIS COLLEGE</span></Typography>
     </Box>  

     <Divider/>

     {/**............................................... */}

     <Box display="flex" marginLeft="1rem" marginTop="2.5rem" marginBottom="1rem">
     <Box marginRight="2rem" marginTop="1.3rem">
      <Typography sx={{fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.2 out of 10</Typography>
      <img src= {rating} />
     </Box>
       
       <Box marginRight="1.5rem">
        <img src={academic}/>
       </Box>
       <Box marginRight="2.5rem" marginTop="1.3rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.0/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>Academic</Typography>
       </Box>

       <Box marginRight="1.5rem">
        <img src={accomodation}/>
       </Box>
       <Box marginRight="2.5rem" marginTop="1.3rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.0/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>accomodation</Typography>
       </Box>

       <Box marginRight="1.5rem">
        <img src={faculty}/>
       </Box>
       <Box marginRight="2.5rem" marginTop="1.3rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.2/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>Faculty</Typography>
       </Box>


</Box>

{/**........................................... */}



<Box display="flex" marginLeft="10.5rem">
     
       
       <Box marginRight="1.5rem">
        <img src={infrastructure}/>
       </Box>
       <Box marginRight="3rem" marginTop="1.2rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.0/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>Infrastructure</Typography>
       </Box>

       <Box marginRight="1.5rem">
        <img src={placement}/>
       </Box>
       <Box marginRight="5rem" marginTop="1.2rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.0/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>Placement</Typography>
       </Box>

       <Box marginRight="1.5rem">
        <img src={sociallyf}/>
       </Box>
       <Box marginRight="2.5rem" marginTop="1.2rem">
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>9.2/10</Typography>
        <Typography  sx={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '700',
lineHeight: '26px',
letterSpacing: '0em',
textAlign: 'center',
}}>Social Life</Typography>
       </Box>


</Box>







{/**............................................... */}
    </Box>



<Stack sx={{
  width: '995px',

  
  left: '216px',
  borderRadius: '28px',
  boxShadow: '0px 4px 40px 0px #7B90FF26',
  marginBottom:'1rem'
}}>
  
  <Box>
  <Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
    paddingTop:'0.5rem',
    marginLeft:'2rem',
    color:'#210366',
    marginBottom:'1rem',
    
  }}>What Students Say About IIM Bangalore - Indian Institute Of Management</Typography>
   <Divider/>
  
   </Box>
   <Box sx={{
    display:'flex',
    marginLeft:'2rem',
    marginTop:'0.5rem',
    marginBottom:'1rem'
   }}>
    <ThumbUpIcon sx={{
      width: '16px',
      height: '16px',
      top: '84px',
      left: '40px',
      border: '2px',
      color: '#7B90FF',
      marginTop:'0.2rem',
      marginRight:'1rem',
      marginLeft:'0.2rem'
    }}/>
    <Typography sx={{
      fontFamily: 'Poppins',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '23px',
      letterSpacing: '0em',
      textAlign: 'left',
      color:'#210366'
    }}>Likes</Typography>

</Box>

<Box sx={{
  fontFamily: 'Poppins',
  fontSize: '20px',
  fontWeight: '600',
  lineWeight: '32px',
  letterSpacing: '0em',
  width: '985px',
height: '514px',
top: '113px',
left: '10px',
color:'#210366',
marginLeft:'0.5rem',
textAlign:'initial'
}}>
   
                    <ListItem sx={{ display: 'list-item' }}>
                    Iim bangalore benchmarks its curriculum against the best in the world to ensure that it delivers quality business education, based on the best pedagogic practices.

                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                    Iim bangalore has a streak of maintaining its 100 percent placement record, which makes it the best college for mba students.
              </ListItem>
               
              <ListItem sx={{ display: 'list-item' }}>
                Internships are a great means to understand what field is best for you, and you can also earn money while you are at it.


                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                    Faculty are very well experienced and have done lots and lots of research in their own field which is the main emphasis of our institute.

                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                    The yearly hostel fee was inr 2.5 lpa and the experience of the hostel was totally worthy of these expenses.hostels were mandatory for all students and they had the best of facilities for the students.

                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                    The campus library is one of the best features of the college, and as a voracious reader, i spend the majority of my time there.
  
                    </ListItem>
<Box>
                    <Typography sx={{
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '600',
    lineWeight: '32px',
    letterSpacing: '0em',
    textAlign: 'left',
  color:'#210366',
  marginLeft:'0.2rem',
  paddingBottom:'1rem'
  }}> These insights are automatically extracted from student reviews</Typography>
  </Box>

  </Box>

  
  

</Stack>
</>

  )
}
