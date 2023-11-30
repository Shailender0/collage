import React from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";


export const data = [

  [
        "Element",
        "Density",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
     
  ["Business Development", 25, "#FF7900", null],
  ["Operation ", 12, "#FF7900", null],
  ["Engineering", 8, "#FF7900", null],
  ["Information Technology", 8, "#FF7900", null],
  ["Sales", 8, "#FF7900", null],
  ["Consulting", 7, "#FF7900", null],
  ["Finance", 7, "#FF7900", null],
  ["Marketing", 6, "#FF7900", null],
  ["Program & Project Management", 6, "#FF7900", null],
  ["FProduct Management", 5, "#FF7900", null],
  [" Research", 4, "#FF7900", null],
  [" Education ", 4, "#FF7900", null],
  ["Human Resources", 3, "#FF7900", null],
  [" Education ", 3, "#FF7900", null],
  ["Human Resources", 2, "#FF7900", null],

];

export const options = {
   color: "#210366",
  fontSize: 15,
  fontFamily: "Poppins",
  fontWeight: "700",
  wordWrap: "break-word",
  title: "IIM BANGALORE ALUMNI DISTRIBUTION BY SECTOR",
  width: 930,
  height: 780,
  backgroundColor: "#EEECFE",
  bar: { groupWidth: "75%" },
  legend: {
    position: "none",

    color: "#210366",
    // fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "700",
       wordWrap: "break-word",
  },

  hAxis: {
    // Adjust the 'ticks' property to control the number of vertical axis labels.
    ticks: [0, 5, 10, 15, 20, 25], // Customize this array as needed
    gridlines: { color: '#210366'},
  },
};

const Barrtwo = () => {
  return (
    <Box sx={{ display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"12px"}}>        
          
        <Chart  
          chartType="BarChart"
            data={data}
          options={options}
        />
     
    </Box>
  );
};

export default Barrtwo;

