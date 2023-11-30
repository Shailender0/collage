import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Box, Container, TableContainer } from '@mui/material';
import FilterButton from './FilterButton';
import Faq from './Faq';
function Category(category, overall, varc, dilr, qa) {

    return { category, overall, varc, dilr, qa };
}
const Categoryrows = [
    Category('General', '80', '80', '75', '75'),
    Category('NC-OBC', '80', '80', '75', '75'),
    Category('EWS', '70', '60', '75', '75'),
    Category('SC', '80', '80', '75', '75'),
    Category('ST', '80', '80', '75', '75'),
    Category('PWD', '50', '60', '50', '65'),

];
function Process(steps, process) {

    return { steps, process };
}
const Processrows = [
    Process('Step 1', 'Visit the Official site of CAT 2022 at iimcat.ac.in'),
    Process('Step 2', 'Click on the “Login” button (mentioned under CAT 2022 scorecard download)'),
    Process('Step 3', 'Enter CAT 2022 ID & Password Press Enter'),
    Process('Step 4', 'Click on “Scorecard” tab'),
    Process('Step 5', 'Download the CAT result 2022 pdf'),


];
function FInalCutoff(IIMs, Cutoffs) {

    return { IIMs, Cutoffs };
}
const FInalCutoffrows = [
    FInalCutoff('IIM Bangalore', '99-100'),
    FInalCutoff('IIM Bodh Gaya', '92-94'),
    FInalCutoff('IIM Ahmedabad', '99-100'),
    FInalCutoff('IIM Calcutta', '99'),
    FInalCutoff('IIM Nagpur', '95-96'),
    FInalCutoff('IIM Sambalpur', '95-96'),

];

const Information = [
    "The CAT 2022 result is available on the official site of IIM CAT. Candidates can check the result & also download the scorecard using their ID & password. The below table represents the process of how to check CAT 2022 scores to qualify for IIM Bangalore cutoff 2023:"
];


function Ranking(placement, ranking) {

    return { placement, ranking };
}
const rankingrows = [
    Ranking('IIM Bangalore Courses & Fees', 'IIM Bangalore Scholarship'),
];

const Exam = [
    "CAT",
];
const Programs = [
    "All",
];
const Type = [
    "Percentile",
];
const Categoryy = [
    "General",
];
const Round = [
    "Round 1"
];
function CATCutoff(Courses, cutoff2022, cutoff2021) {

    return { Courses, cutoff2022, cutoff2021 };
}
const CATCutoffs = [
    CATCutoff('PGP-PPM', '99', '99'),
    CATCutoff('PGPM', '-', '99'),


];

const Info = [
    "IIM Bangalore, CAT Cutoff 2022 for General Category is listed below. The overall cutoff for CAT is 99 percentile."
];
function SimpleTable() {
    return (


        <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0px ",
            paddingTop: "2rem !important",
        }}>
            <Box sx={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",

                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}>
                <Typography variant='h5' sx={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    paddingTop: '1rem',

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
                                        backgroundColor: '#7B90FF', color: 'white', fontWeight: 800, fontFamily: "Poppins, sans-serif"
                                    }}>Category</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' , backgroundColor:'#210366'}}>Overall</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' , backgroundColor:'#210366' }}>VARC</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' , backgroundColor:'#210366' }}>DILR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' , backgroundColor:'#210366' }}>QA</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Categoryrows.map((Categoryrow) => (
                                    <TableRow key={Categoryrow.category} sx={{ backgroundColor: '#EEECFE', fontFamily: "Poppins, sans-serif" }}>
                                        <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Categoryrow.category}</TableCell>
                                        <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Categoryrow.overall}</TableCell>
                                        <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Categoryrow.varc}</TableCell>
                                        <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Categoryrow.dilr}</TableCell>
                                        <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Categoryrow.qa}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </TableContainer>
            </Box>
            <Container>
                <Box
                    sx={{
                        background: "#ffffff",
                        padding: "1rem",
                        fontSize: "0.9rem",
                        color: "#2f1370",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >

                        <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif"
                        }}>IIM Bangalore Cutoff 2023: How to check CAT 2022 scores?</Typography>
                        <Box sx={{ display: 'flex', gap: 6, }}>
                            {
                                Information.map((Informations, index) => {
                                    return <Typography sx={{
                                        display: 'flex', flexDirection: "row",
                                        fontFamily: "Poppins, sans-serif",
                                        fontStyle: "normal",
                                        fontSize: '0.875rem',
                                        fontWeight: 400,

                                    }} key={index}>{Informations}</Typography>;
                                })
                            }
                        </Box>

                    </Box>
                </Box>
                <Box sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}>


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
                                            backgroundColor: '#7B90FF', color: 'white', fontWeight: 800, fontFamily: "Poppins, sans-serif"
                                        }}>Steps</TableCell>
                                        <TableCell align="center" sx={{ backgroundColor: '#210366', color: 'white', fontWeight: 800 }}>Process</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Processrows.map((Processrow) => (
                                        <TableRow key={Processrow.category} sx={{ backgroundColor: '#EEECFE', fontFamily: "Poppins, sans-serif" }}>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Processrow.steps}</TableCell>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{Processrow.process}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                </Box>
            </Container>
            <Container>
                <Box
                    sx={{
                        background: "#ffffff",
                        padding: "1rem",
                        fontSize: "0.9rem",
                        color: "#2f1370",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >

                        <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif"
                        }}>IIM Bangalore Cutoff 2023: How to check CAT 2022 scores?</Typography>
                        <Box sx={{ display: 'flex', gap: 6, }}>
                            {
                                Information.map((Informations, index) => {
                                    return <Typography sx={{
                                        display: 'flex', flexDirection: "row",
                                        fontFamily: "Poppins, sans-serif",
                                        fontStyle: "normal",
                                        fontSize: '0.875rem',
                                        fontWeight: 400,

                                    }} key={index}>{Informations}</Typography>;
                                })
                            }
                        </Box>

                    </Box>
                </Box>
                <Box sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}>


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
                                            backgroundColor: '#7B90FF', color: 'white', fontWeight: 800, fontFamily: "Poppins, sans-serif"
                                        }}>IIMs</TableCell>
                                        <TableCell align="center" sx={{ backgroundColor: '#210366', color: 'white', fontWeight: 800 }}>CAT Cutoffs 2022 Percentile</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {FInalCutoffrows.map((FInalCutoffrow) => (
                                        <TableRow key={FInalCutoffrow.category} sx={{ backgroundColor: '#EEECFE', fontFamily: "Poppins, sans-serif" }}>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{FInalCutoffrow.IIMs}</TableCell>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{FInalCutoffrow.Cutoffs}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                </Box>
            </Container>
            <Container>
                <Box
                    sx={{
                        background: "#ffffff",
                        padding: "1rem",
                        fontSize: "0.9rem",
                        color: "#2f1370",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >

                        <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600
                        }}>Quick Links</Typography>


                    </Box>
                </Box>
                <Box sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}>


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
                                            backgroundColor: '#7B90FF', color: 'white', fontWeight: 800, fontFamily: "Poppins, sans-serif"
                                        }}>IIM Bangalore Placements</TableCell>
                                        <TableCell align="center" sx={{ backgroundColor: '#7B90FF', color: 'white', fontWeight: 800 }}>IIM Bangalore Ranking</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rankingrows.map((rankingrow) => (
                                        <TableRow key={rankingrow.category} sx={{ backgroundColor: '#EEECFE', fontFamily: "Poppins, sans-serif" }}>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{rankingrow.placement}</TableCell>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{rankingrow.ranking}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                </Box>

            </Container>
            <Faq/>
            <Container>
                <Box
                    sx={{
                        background: "#ffffff",
                        padding: "1rem",
                        fontSize: "0.9rem",
                        color: "#2f1370",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",

                        }}
                    >

                        <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif"
                        }}>IIM Bangalore Cutoff 2022</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    background: "#ffffff",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}>
                    <Box >
                        <Typography sx={{
                            color: '#210366', fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            marginBottom: "1rem",
                            fontFamily: "Poppins, sans-serif"
                        }}>Exam:</Typography>
                        {

                            Exam.map((exm, index) => {
                                return <FilterButton key={index} >{exm}</FilterButton>;
                            })

                        }
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: '#210366', fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            paddingTop: '1rem',
                            marginBottom: "1rem",
                            fontFamily: "Poppins, sans-serif"
                        }}>Programs:</Typography>
                        {

                            Programs.map((Program, index) => {
                                return <FilterButton key={index}>{Program}</FilterButton>;
                            })

                        }
                    </Box>

                    <Box>
                        <Typography sx={{
                            color: '#210366', fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            paddingTop: '1rem',
                            marginBottom: "1rem",
                            fontFamily: "Poppins, sans-serif"
                        }}>Type:</Typography>
                        {

                            Type.map((Types, index) => {
                                return <FilterButton key={index}>{Types}</FilterButton>;
                            })

                        }
                    </Box>

                    <Box>
                        <Typography sx={{
                            color: '#210366', fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            paddingTop: '1rem',
                            marginBottom: "1rem",
                            fontFamily: "Poppins, sans-serif"
                        }}>Category:</Typography>
                        {

                            Categoryy.map((Category, index) => {
                                return <FilterButton key={index}>{Category}</FilterButton>;
                            })

                        }
                    </Box>

                    <Box>
                        <Typography sx={{
                            color: '#210366', fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            paddingTop: '1rem',
                            marginBottom: "1rem",
                            fontFamily: "Poppins, sans-serif"
                        }}>Round:</Typography>
                        {

                            Round.map((Rounds, index) => {
                                return <FilterButton key={index}>{Rounds}</FilterButton>;
                            })

                        }
                    </Box>
                </Box>
            </Container>
            <Container>
                <Box
                    sx={{
                        background: "#ffffff",
                        padding: "1rem",
                        fontSize: "0.9rem",
                        color: "#2f1370",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >

                        <Typography sx={{
                            color: '#210366', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif"
                        }}>IIM Bangalore, CAT Cutoff 2022</Typography>
                        <Box sx={{ display: 'flex', gap: 6, }}>
                            {
                                Info.map((Information, index) => {
                                    return <Typography sx={{
                                        display: 'flex', flexDirection: "row",
                                        fontFamily: "Poppins, sans-serif",
                                        fontStyle: "normal",
                                        fontSize: '0.875rem',
                                        fontWeight: 400,

                                    }} key={index}>{Information}</Typography>;
                                })
                            }
                        </Box>

                    </Box>
                </Box>
                <Box sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}>


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
                                            backgroundColor: '#7B90FF', color: 'white', fontWeight: 800, fontFamily: "Poppins, sans-serif"
                                        }}>Courses</TableCell>
                                        <TableCell align="center" sx={{ backgroundColor: '#7B90FF', color: 'white', fontWeight: 800 }}>2022
                                            Cutoff By Percentile</TableCell>
                                        <TableCell align="center" sx={{ backgroundColor: '#7B90FF', color: 'white', fontWeight: 800 }}>2021
                                            Cutoff By Percentile</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {CATCutoffs.map((cutoff) => (
                                        <TableRow key={cutoff.category} sx={{ backgroundColor: '#EEECFE' }}>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{cutoff.Courses}</TableCell>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{cutoff.cutoff2022}</TableCell>
                                            <TableCell align="center" sx={{ color: '#000080', fontWeight: 700, fontFamily: "Poppins, sans-serif", fontSize: '1rem' }}>{cutoff.cutoff2021}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                </Box>
            </Container>
        </Container>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (SimpleTable);
