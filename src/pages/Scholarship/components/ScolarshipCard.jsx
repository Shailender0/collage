import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  ButtonGroup,
  Link,
  Box,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ScolarshipCard = ({
  scholarshipName,
  internationalStudentEligible,
  amount,
  type,
  levelOfStudy,
  numberOfScholarships,
}) => {
  return (
    <Card
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1.8rem",
        width: "22.625rem",
        padding: "0.8rem", // smaller padding
        color: "#2f1370",
        "& *": {
          fontSize: "0.8rem",
        },
      }}
    >
      {/* card body  */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem", // smaller gap
        }}
      >
        {/* card heading start */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: "1rem !important",
            lineHeight: "1.5rem",
          }}
        >
          {scholarshipName}
        </Typography>
        {/* card heading end */}

        {/* scholarship details start */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* list of the details */}
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem", // smaller gap
            }}
          >
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} // smaller font size
              />
              International Student eligible:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {internationalStudentEligible}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} // smaller font size
              />
              Amount:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {amount}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} // smaller font size
              />
              Type:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {type}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} // smaller font size
              />
              Level of Study:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {levelOfStudy}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} // smaller font size
              />
              Number of Scholarships:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {numberOfScholarships}
              </span>{" "}
            </ListItem>
          </List>
          {/* link to explore the scholarship details */}
          <Link
            href="#"
            sx={{
              color: "#FF7900",
              fontWeight: 600,
              fontSize: "0.7rem", // smaller font size
              lineHeight: "0.9rem", // smaller line height
              textDecorationLine: "underline",
              textDecorationColor: "#FF7900",
              "&:hover": {
                color: "#2f1370",
                textDecorationColor: "#2f1370",
              },
            }}
          >
            view more
          </Link>
        </Box>
        {/* scholarship details end */}

        {/* explore buttons */}
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "800",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#FF7900",
              borderRadius: "1rem !important",
              padding: "0.5rem 1.5rem", // smaller padding
              color: "#fff",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2f1370",
                backgroundColor: "#fff",
                transition: "color 0.3s ease",
              },
            }}
          >
            Apply Now
          </Button>
          <Button
            sx={{
              backgroundColor: "#7B90FF",
              borderRadius: "1rem !important",
              padding: "0.5rem 1.5rem", // smaller padding
              color: "#fff",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2f1370",
                backgroundColor: "#fff",
                transition: "color 0.3s ease",
              },
            }}
          >
            Get Alert
          </Button>
        </ButtonGroup>
        {/* explore buttons end */}
      </CardContent>
      {/* card body end */}
    </Card>
  );
};

export default ScolarshipCard;
