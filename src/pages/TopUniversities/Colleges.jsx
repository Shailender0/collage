import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CollegeCard from "../../components/Cards/CollegeCard";
import NewApplicationCard from "../../components/Cards/NewApplicationsCard";
import { CollegeData, NewApplicationsData } from "./Data";

const Colleges = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        {CollegeData.filter((item) => item.id <= 4).map((item) => {
          return (
            <CollegeCard
              id={item.id}
              img={item.img}
              name={item.name}
              location={item.location}
              stars={item.stars}
              fees={item.fees}
              otherfee={item.otherfee}
            />
          );
        })}
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "2rem",
          textAlign: "left",
          marginTop: "2rem",
          color: "#41355D",
        }}
      >
        Latest Application Forms 2023
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "12px",
          marginTop: "2rem",
          height: "11rem",
        }}
      >
        {NewApplicationsData.map((props) => (
          <NewApplicationCard
            img={props.img}
            name={props.name}
            ctc={props.ctc}
            recruits={props.recruits}
            apply={props.apply}
            about={props.about}
          />
        ))}
      </Box>
      <Box sx={{marginBottom:"5rem"}}>
        {CollegeData.filter((item) => item.id > 4).map((item) => {
          if (item.id % 4 === 0) {
            return (<Box>
                <CollegeCard
                id={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
                stars={item.stars}
                fees={item.fees}
                otherfee={item.otherfee}
              />
              <Box sx={{ alignContent: "center" }}>ADVETISEMENT HERE ???? 
              </Box>
              </Box>
            );
          }
          {
            return (
              <CollegeCard
                id={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
                stars={item.stars}
                fees={item.fees}
                otherfee={item.otherfee}
              />
            );
          }
        })}
      </Box>
    </Container>
  );
};

export default Colleges;
