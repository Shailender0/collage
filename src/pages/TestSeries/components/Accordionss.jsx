import { Container, Typography, Box, Grid, } from '@mui/material'
import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function Accordionss({ ques, ans }) {
    return (

        <Container maxWidth='xl'>

            {/* .........ACCORDION.........*/}



            <Accordion sx={{

                borderRadius: '16px',
                border: '1px solid rgba(33, 3, 102, 0.30)',
                display: 'flex',
                width: '1487px',
                
                paddingRight: '24px',
                marginBottom:'2rem',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
            }}>
                <AccordionSummary
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        alignSelf: 'stretch',
                    }}
                    expandIcon={<ExpandCircleDownIcon sx={{
                        color: '#7B90FF',
                        borderRadius: '25px',
                        display: 'flex',
                        width: '80px',
                        height: '80px',
                        padding: '22px 20px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',

                    }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography sx={{
                        color: '#210366',
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '126.523%',

                    }}>{ques}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>


    )
}

