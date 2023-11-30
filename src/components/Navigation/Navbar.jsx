import React, {useState} from 'react';
import { Box, Link, Stack, Button, List, ListItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavbarLinks from './NavbarLinks';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const content = [
    { val: "Top Colleges & Universities", link: "/top-universities" },
    { val: "Top Courses", link: "/choose-courses" },
    { val: "Exams", link: "/exam" },
    { val: "Study Abroad", link: "/study-abroad" },
    { val: "Reviews", link: "/review" },
    {val: "News", link: "/news" },
    { val: "Admission 2023", link: "/admission" },
    { val: "Write A Review", link: "/write-review" },
    { val: "More", link: "" },
  ];

  const navigate = useNavigate();
  function handleClick(){
    return(
      navigate("/login")
    )
  }

  const dropdownItems = [
    { label: "Education Loan", link: "/education-loan" },
    { label: "Institutes", link: "/institutes" },
    { label: "Q&A", link: "/qa" },
    { label: "College Predictor", link: "/collegePredictor" },
    { label: "Test Series", link: "/test-series" },
    { label: "Practice Questions", link: "/practice-questions" },
    { label: "Course Finder", link: "/course-finder" },
    { label: "Scholarships", link: "/scholarships" }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#160048"
        }}>
        {
          content.map(({val, link}, index) => {
            if(val === "More"){
              return (
                <>
                  <Box
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      position: 'relative', 
                      marginRight: '0.5rem',
                    }}
                  >
                    <Box sx={{
                      // backgroundColor: isDropdownOpen ? '#fff' : 'transparent', 
                      color: 'white',
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      padding: "0rem 1rem 0rem 1rem",
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {val}
                      {isDropdownOpen ? (
                        <KeyboardArrowUpIcon sx={{ marginLeft: '0.05rem' }} />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ marginLeft: '0.05rem' }} />
                      )}
                    </Box>
                    {isDropdownOpen && (
                      <Box sx={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        top: '100%',
                        left: 0,
                        zIndex: 1,
                        minWidth: '230px',
                        borderRadius: "12px"
                      }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <List>
                          {dropdownItems.map((item, itemIndex) => (
                            <ListItem key={itemIndex} sx={{marginTop: '-1rem'}}>
                              <ListItemText primary={<Link href={item.link} color="inherit" sx={{textDecoration: 'none', color: '#160048', fontFamily: 'Poppins', fontWeight: '600', fontSize: '0.8rem'}}>{item.label}</Link>} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Box>
                </>
              );
            }
              return (
                <NavbarLinks
                  key={index}
                  content={val}
                  link={link}
                />
              );
          })}

        <Button
          variant='contained'
          sx={{
            backgroundColor: "#7B90FF",
            color: "white",
            paddingX: "1rem",
            marginLeft: "0.5rem",
          }}
          onClick={handleClick}
          >
          Login
        </Button>
      </Stack>
    </>



  )
}

export default Navbar
