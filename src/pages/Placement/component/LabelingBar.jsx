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
      
      ["Oracale", 18, "#FF7900", null],
      ["Accenture", 12, "#FF7900", null],
      ["Amazon", 12, "#FF7900", null],
      ["IBM", 11, "#FF7900", null],
      ["Infosys", 10, "#FF7900", null],
      ["Cognizant", 9, "#FF7900", null],
      ["Microsoft", 7, "#FF7900", null],
      ["Unilever", 7, "#FF7900", null],
      ["Boston Consultion Group", 5, "#FF7900", null],
      ["Flipkart", 4, "#FF7900", null],
      [" MicKensy &co", 4, "#FF7900", null],
      ["Goldman Sachs", 4, "#FF7900", null],
      ["Brain & Company India pvt  ltd",3, "#FF7900", null],
      
];

export const options = {
     border: "17px solid ",
     fontSize: 15, 
     fontFamily: 'Poppins', 
     fontWeight: '700',
     wordWrap: 'break-word',
    title: "IIM BANGALORE ALUMNI DISTRIBUTION BY COMPANIES",
    width: 908,
      height:708,
      backgroundColor: "#EEECFE",
    bar: { groupWidth: "65%" },
    legend: { position: "none" },
    hAxis: {
      // Adjust the 'ticks' property to control the number of vertical axis labels.
      ticks: [0, 2, 4, 6,8,10,12,14,16,18], // Customize this array as needed
      border:"28px solid black",
     gridlines: { 
       color: '#210366'
    },    
    baselineColor: 'black',
    }, 
    
     
  }

const LabelingBar = () => {
  return (
    <Box sx={{ display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"10px"}}>        
          
        <Chart  
          chartType="BarChart"
            data={data}
          options={options}
        />
     
    </Box>
  );
};

export default LabelingBar;

