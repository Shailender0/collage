import { Box } from '@mui/material';
import CardComponent from '../../components/Cards/CardComponent';

const ParentComponent = () => {
  const data = [
    {
      heading: 'NEET 2021 Chemistry Question Paper With',
      date: 'Mar 28,2023',
      description: 'NEET 2021 Chemistry Question Paper with Solutions PDF Code N2 is available for download. NEET 2021 N2 Chemistry Question Paper comprises 50 MCQs ovevjeiovheivhewicj oihjvoievh eiv iejhciejh ciffcheich ev h9ih vile  ',
    },
    {
      heading: 'NEET 2021 Chemistry Question Paper With',
      date: 'Mar 28,2023',
      description: 'NEET 2021 Chemistry Question Paper with Solutions PDF Code N2 is available for download. NEET 2021 N2 Chemistry Question Paper comprises 50 MCQs ovevjeiovheivhewicj oihjvoievh eiv iejhciejh ciffcheich ev h9ih vile  ',
    },
    {
      heading: 'NEET 2021 Chemistry Question Paper With',
      date: 'Mar 28,2023',
      description: 'NEET 2021 Chemistry Question Paper with Solutions PDF Code N2 is available for download. NEET 2021 N2 Chemistry Question Paper comprises 50 MCQs ovevjeiovheivhewicj oihjvoievh eiv iejhciejh ciffcheich ev h9ih vile  ',
    },

  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', height: 'auto',paddingTop:"3rem",paddingBottom:"2rem" }}>
      {data.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </Box>
  );
}
export default ParentComponent;