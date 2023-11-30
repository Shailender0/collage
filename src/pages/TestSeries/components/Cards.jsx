import { Box, Card, CardActions, CardContent, CardMedia, Container, Divider, Typography, Button } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Cards({ attempts, headings }) {
  return (
    <>

      <Card sx={{

   

flexShrink: '0',
      width:'430px',
      height:'255',
      
top: '862px',
left: '289px',


        marginLeft: '1rem',
        marginBottom: '1rem',
        borderRadius: '12px',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        backgroundColor: '#FFFFFF',

      }}>
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'space-between',

        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '26px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#210366'
          }}>{headings}</Typography>
          <Typography sx={{
            width: '70px',
            height: '30x',
            top: '888px',
            left: '672px',
            color: '#7B90FF',

          }}><ShareIcon sx={{ marginLeft: '3rem' }} /></Typography>
        </CardContent>
        <Divider />


        <CardContent sx={{


          left: '375px',
          display: 'flex',
          justifyContent: 'space-evenly'

        }} >

          <Box sx={{ display: 'flex' }}>

            <AccessAlarmIcon sx={{ color: '#7B90FF' }} />
            <Typography sx={{

              left: '375px',
              marginLeft: '1rem'
            }}>  180 Min  </Typography>


          </Box >

          <img src="./Line 64.png" alt="" />
          <Box sx={{ display: 'flex' }}>

            <QuizIcon sx={{ color: '#7B90FF' }} />

            <Typography sx={{
              width: '76px',

              left: '541px',
              marginLeft: '1rem'
            }}>  75 Ques </Typography>

          </Box>

        </CardContent>


        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box>
            <img src="./Vector (1).png" alt="" />
          </Box>

          <Box>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '16px',
              letterSpacing: '0em',
              textAlign: 'left',

            }}>{attempts}</Typography>
          </Box>
        </CardContent>



        <CardActions sx={{
          justifyContent: 'center'
        }}>
          <Button sx={{
            width: '120px',

            borderRadius: '12px',
            backgroundColor: '#FF7900'
          }}>  <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '16.7px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#FFFFFF',
            top: '1063px',
            left: '387px',
            textTransform: 'capitalize'
          }}>Start </Typography>  <ArrowRightIcon sx={{
            color: '#FFFFFF'
          }} /> </Button>

          <Button sx={{
            width: '150px',
            height: '40px',
            backgroundColor: '#7B90FF',
            borderRadius: '12px',
            color: '#FFFFFF',


          }}> <Typography sx={{
            width: '84px',
            height: '17px',
            top: '1063px',
            left: '522px',
            textTransform: 'capitalize',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '17px',
            letterSpacing: '0em',
            textAlign: 'center',

          }}> Download  </Typography> <SaveAltIcon sx={{
            width: '15px',
            height: '15.926799774169922px',
            top: '1359px',
            left: '616px',
          }} /> </Button>
        </CardActions>


      </Card>

    </>
  )
}
