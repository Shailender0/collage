import { Box ,Button,Container,Divider,Typography} from "@mui/material";
import Review from "./Reviews";
import MostPopularTags from "./MostPopularTags";
import TagsButton from "./TagsButton";

function IIMBangaloreReviews(){
let tag = [
    "Stream",
    "Course Tag",
    "Course",
    "Batch",
]
    return(
        <Box
        sx={{
            borderRadius: "28px",
            // height: "2636px",
            width: "993.7px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            display: "flex",
            flexDirection: "column",
            margin:"1rem 0",
            paddingBottom:'1rem'
        }}
        >
             <Typography
        sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            margin:'1rem',
            fontWeight: "700",
            color: "#210366",
            letterSpacing: "0em",
        }}
        >
  IIM Bangalore Reviews
      </Typography>
      <Container>
      <Divider sx={{
        border:'2px solid rgba(123, 144, 255, 0.15)'
      }}/>
      </Container>
      <Box sx={{
        display:'flex',
        marginTop:'1rem',
      }}>
       <Typography
        sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            marginTop:'1.3xrem',
            marginLeft:'2.4rem',
            fontWeight: "700",
            color: "#210366",
            letterSpacing: "0em",
        }}
        >
Filter By
      </Typography>
      {tag.map((value)=>(
        <Button variant='contained' sx={{
            borderRadius:'1.3rem',
            textTransform: "none",
            minWidth:"125px",
            borderColor:'#7B90FF',
            borderWidth:'0.2rem',
            borderStyle:'solid',
            textAlign:'center',
            margin:'0rem 0rem 0rem 1rem',
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'700',
            lineHeight:'1.375rem',
            letterSpacing:'0rem',
            color:"#210366",
            backgroundColor:'transparent',
            cursor:'pointer',
            '&:hover':{
              backgroundColor:'#7B90FF',
              color:'white'
            }
          }} >

{value}
        </Button>
      ))}
      
            </Box>
            <MostPopularTags/>
            <Container>
           
             <Typography
            sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "36px",
                color: "#210366",
                letterSpacing: "0em",
                gap:"0.8rem",
            }}
            >
           74 Reviews Found
          </Typography>
          <Review/>
              </Container>
        </Box>
    );
}

export default IIMBangaloreReviews;