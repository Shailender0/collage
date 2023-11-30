import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Typography, Box, Container, TableContainer} from '@mui/material';

function AvgFees(college, avgfees) {

  return { college, avgfees };
}

const rows = [
    AvgFees('Indian Institute of Management-[IIMC],Kolkata', '₹11,50,000 '),
    AvgFees('Indian School of Business-[ISB], Hyderabad', '₹36,29,620 '),
    AvgFees('Indian Institute of Management-[IIM],Indore', '₹10,57,111'),
    AvgFees('FMS Delhi, New Delhi', '₹96,000 '),
];

function SimpleTable() {
  return (
    <Container      sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "0px ",
      paddingTop: "2rem !important",}}>
    <Box sx={{ fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",

                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",}}>
  <Typography variant='h5' sx={{
            color: "#000080",
            fontWeight: "bold",
            fontSize: "1.2rem",
            paddingTop:'1rem',
         
            fontFamily: "Poppins, sans-serif"

          }} >Popular colleges compared with IIM Bangalore</Typography>

<TableContainer  >
<Box sx={{
          display: "flex",
          
          margin: "1rem 1rem 1rem 1rem",
          padding: "1rem 1rem 1rem 1rem",
}}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
          <TableCell align="center" sx={{
                     backgroundColor: '#90E0EF', color: 'white',   fontWeight:800
                     }}>College</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: '#000080', color: 'white',   fontWeight:800}}>AVG Fees/Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ backgroundColor: '#D1EAF0', }}>
            <TableCell align="center" sx={{ color: '#000080' , fontFamily: "Poppins", fontWeight:800}}>{row.college}</TableCell>
                    <TableCell align="center" sx={{ color: '#000080',  fontFamily: "Poppins", }}>{row.avgfees}</TableCell>
</TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </TableContainer>
    </Box>

</Container>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleTable);
