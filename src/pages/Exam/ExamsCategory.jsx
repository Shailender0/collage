import React from "react";
import { Box, Typography } from "@mui/material";
import ExamCategoryButton from "./../../components/Buttons/ExamCategoryButton";

const ExamsCategory = () => {
  const buttons = [
    {
      label: "Engineering",
      link: "#",
    },
    {
      label: "Management",
      link: "#",
    },
    {
      label: "Science",
      link: "#",
    },
    {
      label: "Law",
      link: "#",
    },
    {
      label: "Pharmacy",
      link: "#",
    },
    {
      label: "Medical",
      link: "#",
    },
    {
      label: "Computer Applications",
      link: "#",
    },
    {
      label: "Arts",
      link: "#",
    },
    {
      label: "Architecture",
      link: "#",
    },
    {
      label: "Design",
      link: "#",
    },
    {
      label: "Class 12 Exams",
      link: "#",
    },
    {
      label: "Class 10 Exams",
      link: "#",
    },
    {
      label: "Hotel Management",
      link: "#",
    },
    {
      label: "Agriculture",
      link: "#",
    },
    {
      label: "Paramedical",
      link: "#",
    },
    {
      label: "Dental",
      link: "#",
    },
    {
      label: "Mass Communications",
      link: "#",
    },
    {
      label: "Vocational Courses",
      link: "#",
    },
    {
      label: "Study Abroad Exams",
      link: "#",
    },
    {
      label: "BBA",
      link: "#",
    },

    {
      label: "Veterinary Sciences",
      link: "#",
    },
    {
      label: "Education",
      link: "#",
    },
    {
      label: "Bachelor of Engineering",
      link: "#",
    },
    {
      label: "Commerce",
      link: "#",
    },
  ];

  return (
    <Box>
      <Box sx={{ marginTop: "4rem" }}>
        <Box
          sx={{
            //height: "52px",
            // borderRadius: "nullpx",
            fontFamily: "Poppins",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0em",
            // textAlign: "left",
            marginBottom: "1rem",
            color: "#210366",
          }}
        >
               <Typography variant='h5' sx={{
                    color: "#210366",
                    fontSize: "2.25rem",
                    paddingTop: '1rem',
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif"

                }} >Exams Category </Typography>
          {/* Exams Category */}
        </Box>
      </Box>
      <Box sx={{ marginBottom: "3rem" }}>
        <Box sx={{ gap: 6 }}>
          {buttons.map((button, index) => (
            <ExamCategoryButton
              key={index}
              label={button.label}
              link={button.link}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExamsCategory;
