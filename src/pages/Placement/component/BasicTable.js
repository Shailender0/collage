import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "./img1.png";

const BasicTable = () => {
  return (
    <>
      <Box
        sx={{
          width: "57%",
          marginRight: "9990rem",
          marginTop: "40px",
          padding: "20px 0px 20px 3px",
          borderRadius: "28px",
          background: "#EEECFE",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              width: 335.45,
              height: 64,
              background: "#210366",
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
              background: "#7B90FF",
            }}
          >
            Batch
          </Typography>
          <Typography
            sx={{
              width: 335.45,
              height: 64,
              background: "#210366",
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Placement Statistics (2021-23)
          </Typography>
          <Typography
            sx={{
              width: 335.45,
              height: 64,
              background: "#210366",
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Placement Statistics (2021-23)
          </Typography>
        </Box>

        <Stack direction="row" gap={"8rem"} sx={{ marginTop: "4rem" }}>
          <Stack
            spacing={6}
            sx={{
              fontFamily: "Poppins",
              fontStyle: "bold",
              fontWeight: 600,
              fontSize: "14px",
              color: "#210366",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="inherit">
              Number of Companies Participated
            </Typography>
            <Typography variant="inherit">Students Opted Out</Typography>
            <Typography variant="inherit">Number of Offers</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
            <Typography variant="inherit">Number of PPOs Offered</Typography>
          </Stack>
          <Stack
            spacing={6}
            sx={{
              fontFamily: "Poppins",
              fontStyle: "bold",
              fontWeight: 600,
              fontSize: "14px",
              color: "#210366",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="inherit">164</Typography>
            <Typography variant="inherit">-</Typography>
            <Typography variant="inherit">606</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
            <Typography variant="inherit">291</Typography>
          </Stack>

          <Stack
            spacing={6}
            sx={{
              fontFamily: "Poppins",
              fontStyle: "bold",
              fontWeight: 600,
              fontSize: "14px",
              color: "#210366",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="inherit">137+</Typography>
            <Typography variant="inherit">12</Typography>
            <Typography variant="inherit">662</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
            <Typography variant="inherit">273</Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "1015px",
          height: "596px",
          left: "216px",
          gap: "26px",
          marginTop: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "26px",
            letterSpacing: " 0em",
          }}
        >
          <span style={{ color: "#FF7900" }}>Check</span>{" "}
          <span style={{ color: "#210366" }}>IIM Bangalore Cutoff</span>
        </Typography>
        <Box
          sx={{
            marginTop: "22px",
          }}
        >
          <img src={img1} alt="image" style={{ width: "70%", height: "20%" }} />
        </Box>
      </Box>
    </>
  );
};

export default BasicTable;
