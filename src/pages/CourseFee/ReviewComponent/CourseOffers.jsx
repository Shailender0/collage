import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import React from "react";
const CourseOffers = ({
    streams,
    duaration,
    time,
    degree,
    degrees,
    campus,
    fees,
    rating,
    review,
    rate,
    exam,
    applDate,
    questions,
    question,
    user,
    date,

}) => {




    return (
        <Box
            sx={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",

                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}
        >
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ backgroundColor: '#7B90FF',
                     borderRadius: '0rem 0.75rem 0.75rem 0rem',
                     width: '25rem',
height: '2rem',
padding: '1rem 2rem 1rem 1rem',
                    }}>
                        {streams}
                    </Typography>
                    <Typography sx={{ backgroundColor: '#7B90FF', borderRadius: '0.75rem 0rem 0rem 0.75rem;' , width: '8rem',
height:'2rem',
padding:  '1rem 0rem 0.5rem 1rem',}}>
                        {time}
                    </Typography>
                </Box>
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1, paddingTop: '1rem' }}>
                            <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                                <Box sx={{ color: '#7B90FF', }}>
                                    <AccessTimeIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        color: '#7B90FF',
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: '0.89375rem',
                                        textTransform: 'uppercase',

                                    }}>
                                        {duaration}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                                <Box sx={{ color: '#FF7900', }}>
                                    <ImportContactsTwoToneIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        color: '#FF7900',
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 600,

                                        lineHeight: '0.89375rem',
                                        textTransform: 'uppercase',
                                    }}>
                                        {degree}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                                <Box sx={{ color: '#210366', }}>
                                    <HistoryEduTwoToneIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: '#210366',
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 600,

                                        lineHeight: '0.89375rem',
                                        textTransform: 'uppercase',
                                    }}>
                                        {degrees}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                                <Box sx={{ color: '#7B90FF', }}>
                                    <PendingTwoToneIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: '#7B90FF',
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: '0.89375rem',
                                        textTransform: 'uppercase',
                                    }}>
                                        {time}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                                <Box sx={{ color: '#FF7979', }}>
                                    <BusinessTwoToneIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: '#FF7979',
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 600,

                                        lineHeight: '0.89375rem',
                                        textTransform: 'uppercase',
                                    }}>
                                        {campus}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap:1 }}>
                                <Typography sx={{
                                    color: '#7B90FF',
                                    textAlign: 'right',
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '1rem',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '1.7875rem',
                                }}>
                                    {fees}

                                </Typography>
                                <Typography sx={{
                                    color: '#210366',
                                    textAlign: 'right',
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '1rem',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '1.7875rem',
                                }}> Total Fees</Typography>
                            </Box>
                            <Typography sx={{
                                color: '#FF7900',
                                textAlign: 'right',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '1rem',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '1.7875rem',
                            }}>Check Detailed Fees </Typography>

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Typography sx={{
                                color: '#FF7900',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '1.1375rem',
                            }}>
                                <span style={{ color: "#FF7900" }}>{rating}</span>/10
                            </Typography>
                            <Typography sx={{
                                color: '#7B90FF',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '1.1375rem',
                            }}>
                                {review} Reviews
                            </Typography>
                            <Typography sx={{
                                color: '#210366',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '1.1375rem',
                            }}>
                                | {rate} <span style={{ color: "#FF7900" }}>NIRF in Management</span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: '#666',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '0.875rem',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '1.1375rem',
                        }} > Exams Accepted : <span style={{ color: "#FF7900" }}>{exam}</span></Typography>
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: '#666',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '0.875rem',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '1.1375rem',
                        }}> Application Date:   <span style={{ color: "#210366" }}>{applDate}</span></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                            <Box sx={{ color: '#210366', }}>
                                <ArrowCircleRightTwoToneIcon />
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#210366',
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '0.875rem',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '1.1375rem',
                                }}>
                                    Admission Predictor
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                            <Box sx={{ color: '#7B90FF', }}>
                                <DownloadTwoToneIcon />
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#7B90FF',
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '0.875rem',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '1.1375rem',
                                }}>
                                    Download Brochure
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ alignItems: 'center', display: 'flex', paddingTop: '1rem' }}>
                            <Box sx={{ color: '#FF7900', }}>
                                <CompareArrowsTwoToneIcon />
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#FF7900',
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: '0.875rem',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '1.1375rem',
                                }}>
                                    Compare
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"

                >
                    <Typography

                        sx={{ color: "#7B90FF", fontsize: "1rem !important" }}
                    >
                        {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {questions.map(({ question, answer }, index) => {
                            return (
                                <Box key={index}>
                                    <span style={{ color: "#210366", fontWeight: 700 }}>Ques: {question}  </span>
                                    <Box>
                                        <Typography
                                            id="name"
                                            sx={{
                                                fontFamily: "Poppins, sans-serif",

                                                color: " rgba(33, 3, 102, 0.50);",
                                                fontSize: "0.8rem",
                                                textTransform: "capitalize",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Top Anser by {user}  on {date}
                                        </Typography>

                                    </Box>
                                    <Typography>
                                        Ans: {answer}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default CourseOffers;