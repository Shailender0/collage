
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function SearchBar(props) {
  return (
    <Box
      maxWidth="sm"
      sx={{
        height: "56px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
        borderRadius: "8px",
        display: "flex",
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px", color: "rgba(33, 3, 102, 0.59)" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: "rgba(33, 3, 102, 0.83)",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "21px",
        }}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": props.placeholder }}
      />
    </Box>
  );
}