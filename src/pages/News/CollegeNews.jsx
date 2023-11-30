import React from "react";
import { Typography, Box, Link, Stack, Container } from "@mui/material";
import NewsComponent from "./NewsComponent";
import MoreNewsComponent from "./MoreNewsComponent";
import { News,MoreNews, Trending } from "./Data";
import TrendingCard from "../../components/Cards/TrendingCard";
import ViewButton from "../../components/Buttons/ViewMoreButton";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import img1 from "./images/cover.png";

const CollegeNews = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "white",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              borderRadius: "0.5rem",
              width: "450px",
              height: "270px",
              marginTop: "3rem",
              backgroundImage: `url(${img1})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
            }}
            alt=" "
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "700",
                textAlign: "left",
                color: "white",
                marginTop: "5rem",
              }}
            >
              CUET PG 2022 Mechanical Engineering Question Paper
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "0.6rem",
                fontWeight: "500",
                textAlign: "left",
                color: "white",
                marginTop: "1rem",
                marginBottom: "0.8rem",
              }}
            >
              CUET PG Mechanical Engineering - Machine Design / Thermo Fluids
              Question Paper 2022 is available for download. CUET PG 2022
              Mechanical Engineering Machine Design / Thermo Fluids paper was
              conducted by National Testing Agency (NTA) on September 7, 2022 in
              Shift 2. The question paper comprised a
            </Typography>
            <Link href="#">
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "0.6rem",
                  fontWeight: "600",
                  textAlign: "left",
                  color: "#FF7900",
                  textDecoration: "underline",
                }}
              >
                Read More
              </Typography>
            </Link>
          </Box>

          {Trending.map((val, index) => {
            return (
              <TrendingCard
                key={index}
                heading={val.heading}
                content1={val.content1}
                content2={val.content2}
                content3={val.content3}
                content4={val.content4}
                content5={val.content5}
                date={val.date}
              />
            );
          })}
        </Box>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {News.map((val, index) => {
            return (
              <NewsComponent
                key={index}
                img={val.newsImg}
                btn_text={val.btn_text}
                news={val.news}
              />
            );
          })}
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "-3rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "55rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.7rem",
                fontWeight: "500",
                textAlign: "left",
                color: "#210366",
              }}
            >
              More News
            </Typography>
          </Box>
          <Box>
            <ViewMoreButton />
          </Box>
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {MoreNews.map((val, index) => {
            return (
              <MoreNewsComponent
                key={index}
                img={val.moreNewsImg}
                date={val.date}
                heading={val.heading}
                content={val.content}
                read_link={val.read_link}
              />
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default CollegeNews;
