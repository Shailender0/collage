import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchButton from './SearchButton'
import CollegeArticleCard from './CollegeArticleCard';

export default function Tests() {
    return (
        <Container maxWidth='xl'>

            <Box sx={{
                width: ' 1487px',
                height: '66px',
                top: '190px',
                left: '195px',
                display: 'flex',
                marginTop: '2rem'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    lineHeight: '41px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#210366',
                    width: '1394px',
                    height: '41px',
                    top: '202px',
                    left: '195px',
                }}>Online Test Series</Typography>
              {/*  <SearchIcon fontSize='medium' sx={{
                    width: '80px',
                    height: '47px',
                    borderRadius: '12px',
                    border: '3px solid',
                    color: '#FFFFFF',
                    backgroundColor: '#7B90FF',
                }} />*/}
                <SearchButton/>
            </Box>


            <Box sx={{
                width: '1487px',
                height: '174px',
                top: '296px',
                left: '216px',
                borderRadius: '28px',
                boxShadow: '0px 0px 40px 0px #7B90FF26',
                backgroundColor: '#FFFFFF',
            }}>
                <Typography sx={{
                    width: '1410px',
                    height: '96px',
                    top: '335px',
                    left: '254px',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '29px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    alignItems: 'center',
                    color: '#210366',
                    padding: '35px'
                }}>Looking for a one-stop solution to practice online mock tests for entrance exams? Then you are at the right destination. Collegedunia provides you with a wide range of test series to help you prepare online for any entrance exam with ease. Get online test series for JEE Mains, JEE Advanced, MAT, CAT, NEET and other exams. We provide the latest pattern & syllabus-based Online Mock Tests with elaborate solutions & performance analysis for all Entrance and Board Examinations.</Typography>
            </Box>

            <Box>


                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    lineHeight: '26px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#210366',
                    width: '525px',
                    height: '26px',
                    top: '510px',
                    left: '194px',
                    paddingTop: '25px',
                    
                    }}>Select Your Exam Categories</Typography>

                <Box sx={{
                    width: '1296px',
                    height: '45px',
                    borderRadius: '20px',
                    border: '4px',
                    marginBottom: '25px',
                    
                }}>
                  
                    <CollegeArticleCard/>

                </Box>

            </Box>


            <Box sx={{
                width: '255px',
                height: '78px',
                top: '661px',
                left: '216px',
                borderRadius: '20px',

            }}>
                <Button sx={{
                    width: '255px',
                    height: '78px',
                    flexShrink: '0',
                    borderRadius: '20px',
                   backgroundImage:"./Line 64.png"
                }}>JEE Main <ArrowRightIcon/> </Button>
            </Box>


        </Container>
    )
}
