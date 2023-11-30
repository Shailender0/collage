import React from 'react'
import AmountCard from './AmountCard'
import { Button ,Box} from '@mui/material'

export default function AllAmountCard() {


    let data=[
        {heading:"Top Rated Scholarships",desc1:"ANU College of Business and Economics India Excellence Scholarship ",amount1:"AMOUNT : $10,832 , DEADLINE : May 2023",desc2:"Oxford and Cambridge Society of India (OCSI) Scholarships",amount2:"AMOUNT : $5,624 , DEADLINE : May 2023",desc3:"Ontario Graduate Scholarship",amount3:"AMOUNT : $10,847 , DEADLINE : June 2023",desc4:"QS Leadership Scholarship",amount4:"AMOUNT : $10,000 , DEADLINE : May 2023",desc5:"Stuart Hall Scholarship",amount5:"AMOUNT : $10,000 , DEADLINE : May 2023"},

        {heading:"Top Rated Scholarships",desc1:"ANU College of Business and Economics India Excellence Scholarship ",amount1:"AMOUNT : $10,832 , DEADLINE : May 2023",desc2:"Oxford and Cambridge Society of India (OCSI) Scholarships",amount2:"AMOUNT : $5,624 , DEADLINE : May 2023",desc3:"Ontario Graduate Scholarship",amount3:"AMOUNT : $10,847 , DEADLINE : June 2023",desc4:"QS Leadership Scholarship",amount4:"AMOUNT : $10,000 , DEADLINE : May 2023",desc5:"Stuart Hall Scholarship",amount5:"AMOUNT : $10,000 , DEADLINE : May 2023"}

      
    ]



  return (
    <Box>

<Box sx={{paddingBottom:"1rem", }}>
<Button variant='contained'
                sx={{
                   width: '404px',
                    height: '51px',
                    top: '2px',
                   
                    borderRadius: '12px',
                    backgroundColor: '#FF7900',
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    color: '#FFFFFF',
                    paddingTop:'2px',
                   }}>Apply
            </Button>
            </Box>     

      {

data.map(({heading,desc1,desc2,desc3,desc4,desc5,amount1,amount2,amount3,amount4,amount5},index)=>(
  <AmountCard heading={heading} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4} desc5={desc5} amount1={amount1} amount2={amount2}  amount3={amount3}  amount4={amount4}  amount5={amount5}  key={index}/>
))

}
    </Box>
  )
}
