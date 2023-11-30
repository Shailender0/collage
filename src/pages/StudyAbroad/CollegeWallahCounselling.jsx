import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SACard1 from './SACard1';
import { Card1 } from './Data';
import HeadText from '../../components/Headings/HeadText'

const CollegeWallahCounselling = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin: "2rem 0",
        }}>
          <HeadText headText={"College Wallah Free Counselling: Let Us Guide You"} />

          <Typography
            sx={{
              color: "#210366",
              fontFamily: "Poppins",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              lineHeight: "1.5rem",
              margin: "1rem",
            }}
          >
            Looking into Study Abroad colleges and universities as an international student can be a challenge, but it's one you can overcome!
            From how to look for accredited schools to what you should write about on your applications, our expert counsellors will help you at every step.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "2rem 0",
            }}
          >
            {Card1.map((val, index) => {
              return (
                <SACard1
                  key={index}
                  img={val.img}
                  bgColor={val.bgColor}
                  title={val.title}
                  content={val.content}
                  link={val.link}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default CollegeWallahCounselling
