import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function Faq() {
  return (
<Container >
    <Box sx={{ fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",

                padding: "1rem",
                fontSize: "0.9rem",

                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",}}>
                   <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600
                        }}>IIM Bangalore Cutoff FAQs</Typography>
      <Accordion sx={{borderRadius: '0.75rem'}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon sx={{ color:'#7B90FF'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:'#EEECFE',borderRadius: '0.75rem'}}>
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500
                        }} >Ques. What is IIM Bangalore Cutoff 2023?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500,borderRadius: '0.75rem'}}
                       >
          Ans. IIM Bangalore Final Cutoff 2023 may be 99 to 100 percentile for general category.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon  sx={{ color:'#7B90FF'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:'#EEECFE',borderRadius: '0.75rem'}}>
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500
                        }} >Ques. What are category - wise CAT cutoffs of IIM Bangalore?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500
                        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon  sx={{ color:'#7B90FF'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:'#EEECFE',borderRadius: '0.75rem'}} >
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500
                        }}>Ques. What are category - wise CAT cutoffs of IIM Bangalore?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
                            color: '#210366', fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500
                        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
</Box>
</Container>
  );
}