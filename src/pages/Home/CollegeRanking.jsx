import { Container, Box, Stack, Typography } from "@mui/material";
import { ClgRankTable } from "./ClgRankTable";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import Heading from "../../components/Headings/Heading";
import Courses from "../../components/Buttons/Courses";

export const CollegeRanking = () => {
  const Agencies = [
    'NIRF',
    'State',
    'India Today',
    'Business Today'
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ margin: "2rem 0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              justifyContent: "space-between",
            }}
          >
            <Heading head="College Ranking 2023"></Heading>

            <ViewMoreButton />

          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography sx={{
              margin: "2rem 0",
              fontSize: "2rem",
              // lineHeight: "1.5rem",
              fontFamily: "Poppins",
              color: "#210366",

            }}>
              Agencies:
            </Typography>
            <Stack direction="row" flexWrap="wrap" sx={{ margin: "2rem" }}>
              {Agencies.map((val) => {
                return <Courses dt={val}></Courses>;
              })}
            </Stack>
          </Box>
          <ClgRankTable />
        </Box>
      </Container>
    </>
  );
};
