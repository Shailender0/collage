import React from 'react'
import ScholarshipCard from './ScholarshipCard'
import { Box, Button } from '@mui/material'

export default function AllScholarshipCard() {
    
    let data=[
        {heading:"SEE SCHOLARSHIPS BY TYPE",heading1:"MERIT-BASED SCHOLARSHIP",heading2:"COLLEGE-SPECIFIC SCHOLARSHIP",heading3:"TUITION-FEE-WAIVER SCHOLARSHIP",heading4:"NEED-BASED SCHOLARSHIP",heading5:"AWARDS SCHOLARSHIP"},
       
        {heading:"COUNTRY WISE SCHOLARSHIPS",heading1:"Scholarships in UK",heading2:"Scholarships in CANADA",heading3:"Scholarships in AUSTRALIA",heading4:"Scholarships in USA",heading5:"Scholarships in NETHERLANDS"}

      
    ]


  return (
    <Box>


            
       {

data.map(({heading,heading1,heading2,heading3,heading4,heading5},index)=>(
  <ScholarshipCard heading={heading} heading1={heading1} heading2={heading2} heading3={heading3} heading4={heading4} heading5={heading5}  key={index}/>
))

}
    </Box>
  )
}
