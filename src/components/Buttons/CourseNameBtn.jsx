import { Button } from '@mui/material'
import React from 'react'

const CourseNameBtn = ({ courseName, link,}) => {
  return (
    <>
        <Button
        variant="text"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '0.6rem',
          fontWeight: 700,
          textTransform : 'none',
          lineHeight: '1rem',
          textAlign: 'center',
          borderRadius: '0.7rem',
          padding: '0.3rem 1.5rem',
          // margin : '0.4rem auto',
          // width: 'fit',
          color: 'white',
          backgroundColor: '#7B90FF',
        //   letterSpacing: '0em',
        //   borderColor: '#7B90FF',
        //   borderWidth: '0.3rem',
        //   borderStyle: 'solid',
          '&:hover': {
            backgroundColor: 'white',
            color: '#7B90FF',
          },
          
        }}
        href={link}
      >
        {courseName}
      </Button>
    </>
  )
}

export default CourseNameBtn
