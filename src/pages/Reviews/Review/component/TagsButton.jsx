import { Button } from "@mui/material";

function TagsButton({title,num,bg}){
  let setNum=false;
  if(num!==undefined){
    setNum=true;
  }
  function bFont(){
    if(setNum || bg!==undefined)return "700"
    else return "400"
  }
  function bColor(){
    if(setNum || bg!==undefined)return "#210366"
    else return "#7B90FF"
  }
    return(
        <Button variant='contained' sx={{
            borderRadius:'1.3rem',
            textTransform: "none",
            minWidth:"7.25rem",
            borderColor:'#7B90FF',
            borderWidth:'0.2rem',
            borderStyle:'solid',
            textAlign:'center',
            margin:'1rem 1rem 0rem 0rem',
            fontFamily:'Poppins',
            fontSize:'1rem',
            fontWeight:bFont(),
            letterSpacing:'0rem',
            color:bColor(),
            backgroundColor:'transparent',
            cursor:'pointer',
            '&:hover':{
              backgroundColor:'#7B90FF',
              color:'white'
            }
          }} >

{title} 
{setNum>0? "(":""}{num}{setNum? ")" : ""}
        </Button>
    );
}

export default TagsButton;