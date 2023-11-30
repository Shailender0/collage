import { Box, Container, Stack } from '@mui/material';
import React from 'react'
import { Card2 } from './Data';
import HowWorkCard from '../../components/Cards/HowWorkCard';
import HeadText from '../../components/Headings/HeadText';

const HowDoWeWork = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin: "2rem 0",
        }} >
          <HeadText headText={"How Do We Work"} />
          <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent="space-evenly"
            alignItems="center"
            margin="2rem 0"
          >

            {Card2.map((val, index) => {
              return (
                <HowWorkCard
                  key={index}
                  img={val.img}
                  name={val.name}
                />
              );
            })}

          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default HowDoWeWork
