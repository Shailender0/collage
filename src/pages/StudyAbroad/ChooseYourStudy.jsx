import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import CardComponent from "../../components/Cards/StudyAbroadCard";
import { Abroad } from "../../data/DataFile";

const ChooseYourStudy = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin: "2rem 0",
        }} >
          <HeadText headText={"Choose Your Study Destination"} />
          <Box
            sx={{
              // padding: "1rem",
              margin: "1rem",
              justifyItems: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              {Abroad.map((val) => {
                return (
                  <CardComponent
                    img={val.imgg}
                    name={val.cardName}
                    check={val.check}
                    no={val.no}
                    fee={val.fee}
                    guide1={val.guide1}
                    guide2={val.guide2}
                    guide3={val.guide3}
                    guide4={val.guide4}
                  ></CardComponent>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default ChooseYourStudy
