import React from "react";
import { Box, Typography } from '@mui/material';
import "@fontsource/poppins";
import myImage from './images/myImage.png';


const One = () => {
    return (
        <Box>
            <Box>
                <Typography sx={{
                    marginTop: 4, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'
                }}>
                    Mr. Rajesh Kumar is the HOD Academics at KMS College of IT and Management and is a Research Scholar at present. He has done B.com, M.Sc (IT), M.tech (IT), MCP, DISM, Pursuing Ph.D and has over 15 years of experience in teaching.
                </Typography>
            </Box>

            <Box sx={{marginTop: 4,}}>
                <img src={myImage}></img>
            </Box>

            <Box>

                <Box>
                    <Typography sx=
                        {{ marginTop: 4.5, color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>
                        Being a Faculty of the KMS College, what are your roles and responsibilities towards the students?
                    </Typography>

                </Box>

                <Box>
                    <Typography sx=
                        {{ marginTop: 2, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
                        Being a faculty of the college, my roles and responsibilities include completing the syllabus within the stipulated time, reporting to the class on time, utilizing classroom assessment techniques, developing test questions in consultation with the course coordinator Evaluates tests (if appropriate, based on the type of test), Prepares and executes Lesson Plan, Completing syllabus within the stipulated time, Maintain attendance record of students, Provides information about job opportunities in their respective field to placement cell, Guide students on career opportunities and Maintain teachers’ handbook.
                    </Typography>

                </Box>

            </Box>

            <Box>

                <Box>
                    <Typography sx=
                        {{ marginTop: 5, color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>
                        How do you tend to establish healthy relations with the students and fellow faculty?
                    </Typography>

                </Box>

                <Box>
                    <Typography sx=
                        {{marginTop: 2, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
                       I maintain a healthy relationship with the students by Knowing their story, Talking to students (in class and outside of class), explicitly valuing the child over the content, Playing games with them, setting them up for success and assuming the best in every student. With fellow faculty members, I maintain healthy relations by Showing Courtesy and Respect, following the Demonstrate Initiative and updating teachers on Your Plans and Goals.
                    </Typography>

                </Box>

            </Box>

        </Box>
    )
}
export default One;