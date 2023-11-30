import Img1 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (76).png"
import Img2 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (77).png"
import Img3 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (78).png"
import Img4 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (79).png"
import Img5 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (80).png"
import Img6 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (75).png"

import Imglogo2 from "../Assets/Rectangle 17890 (8).png"
import Imglogo3 from "../Assets/Rectangle 17890 (8).png"
import Imglogo4 from "../Assets/Rectangle 17890 (9).png"
import Imglogo5 from "../Assets/Rectangle 17890 (10).png"
import Imglogo6 from "../Assets/Rectangle 17890 (11).png"
import Imglogo7 from "../Assets/Rectangle 17890 (12).png"
import React from 'react'
import LowerCard from "./LowerCard"
import { Box } from "@mui/material"
const AllLowerCard = () => {
  const Card2= [
    {
      Images:Img1,
      collegeName: "DU College Predictor",
      collegeLoaction: "New Delhi, Delhi NCR",
      collegeParticipating: "82",
    },
    {Images:Img2,
      collegeName: "Mumbai University College Predictor ",
      collegeLoaction: "  Mumbai, Maharastra",
      collegeParticipating: "409",
    },
    {
      Images:Img3,
      collegeName: "LNMU College Predictor ",
      collegeLoaction: " Darbhanga, Bihar",
      collegeParticipating: "11",
    },
    { Images:Img4,
      collegeName: "Uniraj College Predictor",
      collegeLoaction: "Jaipur, Rajasthan",
      collegeParticipating: "97",
    },
    { Images:Img5,
      collegeName: "Purnea University College Predictor ",
      collegeLoaction: "Purnea, Bihar",
      collegeParticipating: "5",
    },
    { Images:Img6,
      collegeName: "UHSR College Predictor ",
      collegeLoaction: "Rohtak, Haryana",
      collegeParticipating: "37",
    },
  ];
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'start', height: 'auto', flexWrap: 'wrap', margin: '1rem 0', }}>
      {Card2.map((item, index) => (
        <LowerCard key={index} {...item} />
      ))}
    </Box>

    )
}






export default AllLowerCard