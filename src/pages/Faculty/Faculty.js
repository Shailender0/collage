import { Facul } from "./Facultydata";
import {data} from './data';
import { Box, Typography } from '@mui/material';


function Faculty() {
  return (
    <Box>
      <Typography 
      sx={{
        color: "#210366",
        fontFamily: "Poppins",
        fontSize: '16px',
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: '23.4px',
        letterSpacing: '0.7px',
        textTransform: "capitalize",
        paddingTop: '3.8px',
        paddingBottom: '3.8px',
        marginLeft: '50px',
      }}>
      IIM Bangalore Faculty Details</Typography>
      <Typography 
      sx={{
        paddingTop: '20px',
        paddingBottom: '4px',
        color: '#7B90FF',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '26px', /* 144.444% */
        textTransform: 'capitalize',
        marginLeft: '50px',
      }}>Rishikesha T. Krishnan</Typography>
      <Typography 
      sx={{
        color: '#210366',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '15.6px', /* 111.429% */
        textTransform: 'capitalize',
        paddingTop: '0.8px',
        paddingBottom: '0.8px',
        marginLeft: '50px',
      }}
      >Director</Typography>
      <Typography 
      sx={{
        color: '#210366',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontStyle: 'normal',
        fontHeight: '500',
        lineHeight: '15.6px', /* 130% */
        textransform: 'capitalize',
        paddgTop: '1.8px',
        paddgBottom: '1.8px',
        marginLeft: '50px',        
   }}
      >Other faculty details</Typography>
      {
        data.map((post)=>(
          <Facul post={post} key={post.name} />
        ))
      }
    </Box>
  );
}

export default Faculty;
