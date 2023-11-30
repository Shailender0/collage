import { Button } from '@mui/material'
import React from 'react'

const Courses = (props) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#7B90FF',
        borderRadius: '20px',
        height: '2.5rem',
        color: 'white',
        padding: '2rem 3.5rem',
        textAlign: 'center',
        textTransform: 'none',
        marginRight: '2rem',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        fontWeight: '550',
        letterSpacing: '0rem',
        '&:hover': {
          backgroundColor: 'white',
          color: '#7B90FF',
        }
      }}
    >{props.dt}</Button>

  )
}

export default Courses
