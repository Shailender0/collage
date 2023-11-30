import { Avatar, Box, Divider, Typography, Button } from "@mui/material";

const CardComponent = (props) => {
  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
      </style>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "28px",
          textAlign: "left",
          maginTop: "34px",
          padding: "1.5rem",
          margin: "0.5rem",
          width: "471px",
          height: "431px",
          fontSize: "16px",
          lineHeight: "18px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Avatar
            src={props.img}
            sx={{
              width: "80px",
              height: "80px",
            }}
          ></Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              sx={{
                paddingLeft: "40px",
                fontFamily: "Poppins",
                color: "#210366",
                fontWeight: "700",
              }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                paddingLeft: "40px",
                paddingTop: "8px",
                color: "#210366",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              {props.title}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            margin: "0 auto",
            marginTop: "6px",
            backgroundColor: "rgba(123, 144, 255, 0.2)",
            width: "317px",
          }}
        />
        <Button
          variant="text"
          sx={{
            fontFamily: "Poppins",
            fontweight: "700",
            backgroundColor: "#7B90FF",
            borderRadius: "28px",
            marginTop: "14px",
            padding: "0.2rem 1rem 0.2rem 1rem",
            color: "white",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "white",
              color: "#7B90FF",
              // border: '2px solid #7B90FF',
            },
          }}
        >
          Online Exam
          <br />
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "26px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Exam Date
            <br />
            {props.examDate}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              paddingLeft: "40px",
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Application Form
            <br />
            {props.applicationDate}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              paddingLeft: "40px",
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Result Announce
            <br />
            {props.announceDate}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingTop: "26px" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Application Process
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Previous Year Paper
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "8px",
              color: "#210366",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Exam Pattern{" "}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                fill="#210366"
              />
            </svg>
          </Typography>
        </Box>
        <Box></Box>
        <Button
          variant="subtitle1"
          sx={{
            color: "#210366",
            marginTop: "26px",
            marginLeft: "11.5rem",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Apply Now
        </Button>
      </Box>
    </div>
  );
};

export default CardComponent;
