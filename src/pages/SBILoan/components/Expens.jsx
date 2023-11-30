import {  Card, Stack, Typography } from "@mui/material";
import React from "react";

const Expens = () => {
  return (
    <>
        <Stack
          sx={{
              color: "#FF7900",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop: 3,
              marginX:6
            }}
        >
          Expenses covered under SBI Student Loan Scheme
        </Stack>


        <Stack 
        display={"flex"}
        flexDirection={"row"}
        marginLeft={"2rem"}
        gap={"1rem"}
        >
        <Stack
          sx={{
            width: "50%",
            color: "rgba(21.57, 0, 72.46, 0.60)",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            lineHeight: 2,
            wordWrap: "break-word",
          }}
        >
          {"\u25CF"} College Fee
          <br />
          {"\u25CF"} Hostel Fee
          <br />
          {"\u25CF"} Examination Fee
          <br />
          {"\u25CF"} Purchase of Books, Equipment, Uniform or Computer
          <br />
          {"\u25CF"} Travel Expenses for abroad studies
          <br />
          {"\u25CF"} Cost of Two wheeler (Maximum of Rs.50000)
          <br />
          {"\u25CF"} Cost of other activities like study tours, project work,
          etc
        </Stack>
        <Card
          sx={{
            width: "40%",
            
            paddingLeft: 6,
            paddingRight: 3,
            background: "#E8E8E8",
            borderRadius: 4,
            justifyContent: "flex-start",
            alignItems: "flex-start",
           
            
          }}
        >
          <Typography
            sx={{
              color: "rgba(21.57, 0, 72.46, 0.60)",
              fontSize: 22,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Courses Covered Under SBI Student Loan Scheme <br />
            In India
          </Typography>
          <Typography
            sx={{
              color: "rgba(21.57, 0, 72.46, 0.60)",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "500",
              lineHeight: 1.3,
              wordWrap: "break-word",
            }}
          >
            Almost every undergraduate and post graduate course has been
            included in this scheme. Technical or Professional Courses approved
            by AICTE/UGC. Degree and diploma courses approved by the Govt.
            Teacher Training, Nursery courses, pilot training, aeronautical,
            shipping courses which are approved by respective authorized
            departments.
          </Typography>
        </Card>
      </Stack>
    </>
  );
};

export default Expens;
