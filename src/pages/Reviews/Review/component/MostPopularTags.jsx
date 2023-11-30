import { Box , Container, Typography } from "@mui/material";
import TagsButton from "./TagsButton";

function MostPopularTags(){
    let mostPopularTags = [
      {
        title:"Placement",
        num:14,
        id:25,
      },
      {
        title:"Program",
        id:26,
        num:12,
      },
      {
        id:27,
        title:"Hostel Room",
        num:11,
      },
      {
        id:28,
        title:"Management",
        num:11,
      },
      {
        id:29,
        title:"Bangalore",
        num:8,
      },
      {
        id:30,
        title:"Campus Life",
        num:6,
      },
      {
        id:31,
        title:"Internship Offer",
        num:6,
      },
      {
        id:32,
        title:"Recruit",
        num:3,
      },
      {
        id:33,
        title:"Course Curriculum",
        num:6,
      },
      {
        title:"Summer Internship",
        num:6,
        id:34,
      },
      {
        id:35,
        title:"Faculty Members",
        num:4,
      },
    ]
    return(
<Box sx={{
          width: "780px",
          display: "flex",
          flexDirection: "column",
          margin: "1rem 0",
        }}>
            <Container>

<Typography
            sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "36px",
                color: "#210366",
                margin:"0rem 0.8rem 0rem 0rem",
                letterSpacing: "0em",
            }}
            >
           Most Popular Tags
          </Typography>
          {mostPopularTags.map((value)=>{
           return (
              <TagsButton
              key={value.id}
              title={value.title}
              num={value.num}
              />
        );
      })  } 
              </Container>

              
</Box>
    );
}

export default MostPopularTags;