import React from 'react'
import QuestionCard from './QuestionCard'
import { Box, Button, TextField, Typography } from '@mui/material'

export default function AllQuestionCard() {
    
    let data=[
        {ques:"Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",ans:"Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",ansby:"● Top Answer By Siddant Mittal on 15 May 23"},

        {ques:"Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",ans:" Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",ansby:"● Top Answer By Siddant Mittal on 15 May 23"},

        {ques:"Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",ans:"Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",ansby:"● Top Answer By Siddant Mittal on 15 May 23"},

        {ques:"Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",ans:" Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",ansby:"● Top Answer By Siddant Mittal on 15 May 23"},
    ]

  return (
    <>
   

{

data.map(({ques,ans,ansby},index)=>(
  <QuestionCard ques={ques} ans={ans} ansby={ansby}  key={index}/>
))

}

     {/* ..........Comment Box.........../ 

<Box sx={{
    width: '956px',
    height: '146px',
    top: '6290.28125px',
    left: '235px',
    borderRadius: '28px',
    border: '3px solid #7B90FF'
}}>
     <TextField  label="Write your comment" variant="outlined" ></TextField>
     </Box>
 
     */}
     <Box>
        
        
     </Box>

    </>
  )
}
