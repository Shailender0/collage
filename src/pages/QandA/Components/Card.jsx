import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FlagIcon from '@mui/icons-material/Flag';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
const Card = ({
  stream,  
    cutoff,
    area,
   heading,
  avatar,
  userav,
  user,
  institution,
  posted,
  date,
  reviews,
 rateup,
 ratedown,
  share,
  ans,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const handleClick = () => {
    setShow(!show);
  };
    return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        width:670,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    }}
    >
       <Box sx  ={{
          width: 675,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 4,
          display: "inline-flex",
        }}
      >
        <Typography sx ={{
            width: 321,
            color: "#2F1370",
            fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
             wordWrap: "break-word",
          }}
        >
          B .Tech Computer Science and Engineering
        </Typography>
        <Typography sx ={{
            color: "#2F1370",
            fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
             wordWrap: "break-word",
          }}
        >
          CutOff
        </Typography>
        <Typography sx ={{
            color: "#2F1370",
            fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          NIT Trichy Tiruchirappalli
        </Typography>
      </Box>
            <Typography
             id="review_haeding"
             sx={{ color: "#7B90FF", fontsize: "1rem !important", width: 578,
             color: "#2F1370",
             fontSize: 20,
             fontFamily: "Poppins",
             fontWeight: "600",
                 wordWrap: "break-word", }}
           >
             {heading}
           </Typography>
    
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.8rem !important",
          }}
        >

<Avatar 
            src={avatar}
            name={userav}
            sx={{
              width: 70,
              height: 70,
              left: 0,
              top: 0,
              borderRadius: 9999,
              bgcolor:  getbgColor(userav[0,0].toUpperCase()), 
              textTransform: "uppercase",
            }}
          > 
          {userav}
               </Avatar>       
          
          <Box sx={{display:"flex", flexDirection:"column",gap:"1rem"}}>
          
            <Typography
              id="name"
              sx={{
                color: "#2F1370",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                   wordWrap: "break-word",
                       }}
            >
              {user}
            </Typography>
            <Box sx={{ display: "flex", gap: "5rem" }}>
              <Typography id="intitution" sx={{ 
                color: "#2F1370",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "600",
                 wordWrap: "break-word",
                width: 345,
                height: 20,
                }}>
                {institution}
              </Typography>
              <Box sx={{ display: "flex",flexDirection:"column" ,gap: "0.5rem" }}>
              <Typography
              id="posted"
               sx={{
                 color: "#2F1370",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "600",
                  wordWrap: "break-word"}}
                  >
                    {posted}
                    </Typography>
              <Typography
                id="date"
                sx={{
                  color: "#2F1370",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight:"600",
                                }}
              >
                {date}
              </Typography>
              </Box>
            </Box>
          </Box>
       
       
      </Box>

      <Box
        sx={{
          height: `${show ? "fit-content" : "5.8 rem"}`,
          overflow: "hidden",
                transition: "height 0.3s ease-in-out",
        }}
      >   
      <Box 
          sx={{display:"flex",gap:"1rem"}}
          >

       
        {reviews.map(({Answer}, index) => {
          return (
         

            
            <Box  sx={{ width: 568,
              height: 86,
              color: "#2F1370",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
                   wordWrap: "break-word",}} kye={index}>
            
              {Answer}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ width: 568,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1,
          display: "flex",
          flexDirection:"column"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            display: `${show ? "none" : "block"}`,
            width: 120,
            color: "#FF7900",
            fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
            textDecoration: "underline",
             wordWrap: "break-word",
             "&:hover": {
              border: "none",
              Border: "none",
     },
          }}
        >
          Read more{" "}
            
        </Button>

        <Button
          onClick={handleClick}
          sx={{
            display: `${!show ? "none" : "block"}`,
            color: "#FF7900",
            padding: "0",
            background: "none",
            Border: "none",
            width: 120,
             fontSize: 14,
            fontFamily: "Poppins",
            fontWeight: "400",
            textDecoration: "underline",
             wordWrap: "break-word",
            "&:hover": {
              background: "none",
              border: "none",
            },
          }}
        >
          Readless
        </Button>
        </Box>
        <Box sx={{ display: "flex",flexDirection:"row",gap: "1rem"           
        }}>
         
          <Button variant="outlined" onClick={() => setLike(like + 1)}
          sx={{ height: 23,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop:2,
            paddingBottom: 2,
            background: "white",
            borderRadius: 4,
            border: "4px #7B90FF solid",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",}}>
            <ThumbUpIcon sx={{ color: "#7B90FF", fontSize: "1.3rem" }} /> {rateup}
          </Button>
          <Button variant="outlined" onClick={() => setDislike(dislike + 1)}
                    sx={{ height: 23,
                      paddingLeft: 3,
                      paddingRight: 3,
                      paddingTop:2,
                      paddingBottom: 2,
                      background: "white",
                      borderRadius: 4,
                      border: "4px #7B90FF solid",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",}}
          >
            <ThumbDownIcon sx={{ color: "#FF7900", fontSize: "1.3rem" }} />{ratedown}
                   </Button>
                   <Button variant="outlined" onClick={() => setLike(share + 1)}
                             sx={{ height: 23,
                              paddingLeft: 3,
                              paddingRight: 3,
                              paddingTop:2,
                              paddingBottom: 2,
                              background: "white",
                              borderRadius: 4,
                              border: "4px #7B90FF solid",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "inline-flex",}}
                   >
            <ShareIcon sx={{ color: "#7B90FF", fontSize: "1.3rem" }} /> {share}
          </Button>
          <Button variant="outlined" onClick={() => setLike()}
                    sx={{ height: 23,
                      paddingLeft: 3,
                      paddingRight: 3,
                      paddingTop:2,
                      paddingBottom: 2,
                      background: "white",
                      borderRadius: 4,
                      border: "4px #7B90FF solid",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",}}
          >
             {ans}
          </Button>
          </Box>
          </Box>
        </Box>
      </Box>
    
  );
};

export default Card;