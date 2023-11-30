import React from 'react';
import { Link } from '@mui/material';

const NavbarLinks = (props) => {

  return (
    <>
    <Link href={props.link}
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "white",
                fontSize: "0.8rem",
                textDecoration: "none",
                textTransform: "capitalize",
                paddingX: "0.8rem",
                paddingY: "1.2rem",
                textAlign: "center"
              }}>{props.content}</Link>
    </>
  )
}

export default NavbarLinks
