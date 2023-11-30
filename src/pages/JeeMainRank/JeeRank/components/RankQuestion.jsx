import { Box, Stack, Typography,Button,Avatar,TextField } from '@mui/material'
import React from 'react'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import img2 from "../../assets/edit.png"
import img3 from "../../assets/share.png"
import img4 from "../../assets/more.png"

export default function RankQuestion({ques,ans,avatar,name,clg,post,comment}) {
  return (
    
     <Stack sx={{
        width: '622px',
        
        borderRadius: '28px',
        gap: '4px',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
       marginBottom:'1rem'
     }}>
        <Box sx={{display:'flex',
gap: '19px',marginTop:'5px'
}}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '0em',
                textAlign: 'left',
                width: '46px',
                height: '18px',
                color: '#2F1370',
                marginLeft:'2rem'
                
                }}>CutOff</Typography>

                <Typography sx={{
                     fontFamily: 'Poppins',
                     fontSize: '14px',
                     fontWeight: '400',
                     lineHeight: '18px',
                     letterSpacing: '0em',
                     textAlign: 'left',
                     color: '#2F1370',
                     width: '321px',
height: '18px',

                }}>B.Tech Computer Science and Engineering</Typography>

                <Typography sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '18px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      color: '#2F1370',
                      width: '170px',
height: '18px',

                }}>NIT Trichy Tiruchirappalli</Typography>
        </Box>
         
       <Box>
        <Typography sx={{fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '600',
lineHeight: '25px',
letterSpacing: '0em',

width: '578px',
height: '50px',
color:'#2F1370',
marginTop:'1rem',
marginLeft:'2rem',
justifyContent:'center'
}}>{ques}</Typography>
        </Box>
    
    <Box sx={{
height: '48px',
gap: '38px',
display:'flex',
marginLeft:'1.3rem',
marginTop:'1rem'
}}>
  <Button> <img src={img2}  alt=""  /></Button> 
    <Button><img src={img3} alt="" /></Button>
   <Button> <img src={img4} alt=""  /></Button>
    <Button sx={{width:'123px',
height: '45px',
padding: '12px 31px 12px 31px',
borderRadius:' 20px',
border: '4px solid #7B90FF'
}}><Typography sx={{fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'center',
    width: '61px',
height: '22px',
color:'#210366',
textTransform:'capitalize',

    }}>Answers</Typography></Button>
        
    </Box>

    <Box sx={{display:'flex',width: '574px',
height: '70px',
marginTop:'1rem',
marginLeft:'2rem'

}}>

    <Box>
    <Avatar sx={{ bgcolor: '#210366E5',
 }}>{avatar}</Avatar>
    </Box>
    <Box sx={{marginLeft:'1.2rem'}}>
    <Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '600',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
color:' #2F1370',
marginBottom:'7px'

}}>{name}</Typography>

<Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '600',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
color:' #2F1370',

}}>{clg}</Typography>
    </Box>

    <Box sx={{marginTop:'1rem',}}>
        <Typography sx={{width: '143px',
height: '20px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '600',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
marginLeft:'5rem',

color:' #2F1370',
}}>Posted on : 
</Typography>
<Typography sx={{width: '143px',
height: '20px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '600',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
marginLeft:'5rem',
color:' #2F1370',
}}>{post}</Typography>
    </Box>

    </Box>

    <Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
width: '568px',
height: '86px',
color:'#2F1370',
marginLeft:'2rem',
alignItems:'center'
}}>{ans}</Typography>
  
  <Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineWeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
color:'#FF7900',
width: '120px',
height: '18px',
marginLeft:'2rem',
textDecoration:'underline'
}}>Read more</Typography>


<Box sx={{marginLeft:'2rem',marginTop:'1rem'}}>
<Button sx={{
    width: '117px',
    height: '45px',
    padding: '12px 31px 12px 31px',
    borderRadius: '18px',
    gap: '15px',
    border: '4px solid #7B90FF',
    marginRight:'0.5rem'
}}> <ThumbUpIcon sx={{
    width: '16px',
height: '16px',
}}/> <Typography sx={{
    width: '9px',
height: '18px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
}}>2</Typography></Button>

<Button sx={{
    width: '117px',
    height: '45px',
    padding: '12px 31px 12px 31px',
    borderRadius: '18px',
    gap: '15px',
    border: '4px solid #7B90FF',
    marginRight:'0.5rem'
}}> <ThumbDownAltIcon sx={{
    width: '16px',
height: '16px',
}}/> <Typography sx={{
    width: '9px',
height: '18px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
}}>0</Typography></Button>

<Button sx={{
    width: '117px',
    height: '45px',
    padding: '12px 31px 12px 31px',
    borderRadius: '18px',
    gap: '15px',
    border: '4px solid #7B90FF',
}}> <ShareIcon sx={{
    width: '16px',
height: '16px',
}}/> <Typography sx={{
    width: '9px',
height: '18px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
}}>0</Typography></Button>


<Typography sx={{fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '600',
lineHeight: '25px',
letterSpacing: '0em',
textAlign: 'left',
color:'#FF7900',
marginTop:'1rem',
height: '25px',

}}>Comments</Typography>

<TextField fullWidth label="Write a comment" id="fullWidth" sx={{width: '574px',
height: '88px',
border: '1px ',
marginTop:'1rem'
}}/>


<Button sx={{
padding: '10px 20px 10px 20px',
borderRadius: '10px',
backgroundColor:'#FF7900'
}}><Typography sx={{
    fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '400',
lineHeight: '17px',
color:'#FFFFFF',
textTransform:'capitalize'
}}>Login to Add Comments</Typography></Button>

<Typography sx={{fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: '600',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'left',
marginLeft:'0.3rem',
marginTop:'1rem'
}}>{comment}</Typography>

<Typography sx={{width: '240px',
height: '25px',
top: '23.5px',
left: '152px',
fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: '400',
lineHeight: '25px',
letterSpacing: '0em',
textAlign: 'center',
color: '#2F1370',
marginLeft:'8.5rem',
marginBottom:'1rem'
}}>-NO MORE COMMENTS-</Typography>

</Box>

     </Stack>
    
  )
}
