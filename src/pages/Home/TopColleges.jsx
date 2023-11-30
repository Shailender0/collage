import React from 'react';
import CollegesCards from '../../components/Cards/CollegesCards';
import { Card1 } from '../../data/DataLanding';
import { Box, Container, Stack } from '@mui/material';

const TopColleges = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // marginY: "2rem",
            // marginX: "4rem",
            flexWrap: "wrap"
          }}>
          <Stack direction='row' flexWrap='wrap' justifyContent="center"
            alignItems="center" marginTop="2rem">
            {Card1.map((val, index) => {
              return (
                <CollegesCards
                  key={index}
                  img={val.img}
                  icon={val.icon}
                  bgColor={val.bgColor}
                  titles={val.titles}
                  contents={val.contents}
                  contents_body={val.contents_body}
                  content_link={val.content_link}
                />
              );
            })}

          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default TopColleges;
