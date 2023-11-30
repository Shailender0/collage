import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Logo from '../components/assets/Logo.png'
import ReadMore from "../ReadMore";


const Card = ({
  course,
  branch,
  rating,
  institution,
  year,
  degree,
  type,
  time,
  role,
  apply,
  college,
  othercollege,
  other,
  reviews,
}) => {

  const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl ultrices,  Quisque fermentum malesuada dapibus. Sed ac justo at dui bibendum euismod.";

  return (

    <>
     <Stack 
 
    sx={{borderRadius: "2rem",
    width: '95%',
    // height: "200",
    boxShadow:3,
  }}
  
      >
        <Stack
        sx={{display:"flex",
        flexDirection:"row",
        
        marginTop:"1rem",
          marginLeft:"1rem" 
        
        }}>

       <Box sx={{width: 101, height: 101, background: 'white', borderRadius: 65, border: '0.50px #7B90FF solid',marginRight:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}} >
       <img src={Logo} alt="logo" style={{width: '70px', height: '60px', borderRadius:65,marginTop:1}} /> 
       </Box>
        <Stack sx={{display:'flex',
        flexDirection:"column",
        flexWrap:"wrap"
        }}> 
        <Stack sx={{ 
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap"
  
          }}> 
        <Typography sx={{color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}}>{course} </Typography>
        <Typography sx={{color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{branch}</Typography>
        <Typography style={{color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>{rating}*****</Typography>
          </Stack>


        <Stack sx={{ 
        display:'flex',
        flexDirection:"row" ,
        flexWrap:"wrap"
          }}> 
          
        <Typography sx={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{institution} </Typography>
        <Typography sx={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{year}</Typography>
        <Typography style={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginRight:"1rem"}}>{degree}</Typography>
        <Typography sx={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{type}</Typography>
        <Typography style={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{time}</Typography>
          </Stack>


        <Stack sx={{ 
        display:'flex',
        flexDirection:"row", 
        flexWrap:"wrap" 
          }}> 
          
        
        {reviews.map(({  review }, index) => {
          return (
            
            <Typography sx={{color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}} kye={index}>
              {review}
              <ReadMore text={longText} maxLength={0}  />  
            </Typography>
            
          );
        })}
      </Stack>
    <Stack
    sx={{
      display:'flex',
      flexDirection:"row",
      flexWrap:"wrap",
      gap:"1rem"
     
      
    }}  >
      <Typography sx={{display:'flex', width:"70%", height:"50%",background: 'rgba(123.25, 144.32, 255, 0.30)', borderRadius: 2,}}>   
        <Typography sx={{color: '#210366', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Popular Job Roles:</Typography>
      <Typography sx={{color: '#210366', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}> {role} </Typography>
      </Typography>
      <Button variant="contained" sx={{ height:30, background: '#FF7900', borderRadius: "3rem",marginBottom:"2rem" }}>{apply}</Button>
    </Stack>
  </Stack>
      </Stack>
      <Stack sx={{ 
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        width: "100%", background: 'rgba(123.25, 144.32, 255, 0.20)',  
        marginTop: '0.5rem',
        borderRadius: '0 0 2rem 2rem',
        opacity: '0.9',
       
          }}> 
         <img src={Logo} alt="logo" style={{width: '20px', height: '20px', borderRadius:60,marginTop:1}} /> 
        
      <Typography sx={{color: '#210366', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{college} </Typography>
      <img src={Logo} alt="logo" style={{width: '20px', height: '20px', borderRadius:60,marginTop:1}} />
        <Typography sx={{color: '#210366', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500',  wordWrap: 'break-word',marginRight:"1rem"}}>{othercollege}</Typography>
        <img src={Logo} alt="logo" style={{width: '20px', height: '20px', borderRadius:60,marginTop:1}} />
        <Typography style={{color: '#210366', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{other}</Typography>
          </Stack>
      </Stack>
      
    </>
  );
};

export default Card;