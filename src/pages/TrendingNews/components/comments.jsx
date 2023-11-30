import { Box, Button, Divider, TextField, makeStyles } from '@mui/material';
import React from 'react';
// import ( makeStyles ) from 'mat'

const styles = theme => ({
    textField: {
        backgroundColor: 'red', width: 880, height: 146, background: 'white', borderRadius: 28, border: '1.50px #7B90FF solid'
    }
})

const Comments = () => {
    const classes =  styles();
    return (
    <>
        <Box  sx={{ marginTop:5, width: 996, height: 300, position: 'relative', background: 'white', boxShadow: '0px 4px 40px rgba(123, 144, 255, 0.10)', borderRadius: 8}}> 
      <Box sx={{marginTop: 4, marginLeft:"3rem"}}>
       <Box sx={{marginTop: '14px',paddingTop: 2, width: '100%', color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Comments</Box>
       <Divider sx={{paddingTop:2 ,marginBottom:"2rem",marginRight:"2rem"}}/>
        <Box >
        <TextField 
         id="standard-multiline-static"
         label=""
         multiline
         rows={4}
         defaultValue="Write Your Comment"
        //  variant="filled"
        InputProps={{style: {borderRadius: "30px", border: '1.50px #7B90FF solid'}}}

          style={{ paddingLeft: 10, backgroundColor: 'white' ,width: 900, height: 116, label: '23px'
         }}
        />
        
        </Box>
        <Box>
        <Button type="submit" style={{paddingLeft: 31,paddingRight: 31, paddingTop:12, paddingBottom:12, marginTop: 24, background: '#FF7900',color:"white", borderRadius: 12,marginLeft: 700, textTransform: 'none'}} >Login to Add Comment</Button>
        </Box>
      </Box>
      </Box>
      </>
    );
  }

export default Comments;