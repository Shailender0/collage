import {} from "@mui/material";

function RoundImages({pic,picname}){
    return(
    <img src={pic} alt={picname} style={{margin:"8.5px"}}/>
    );
}
export default RoundImages;