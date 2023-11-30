import React from "react";
import { Box, Typography, Card, CardContent } from '@mui/material';
import "@fontsource/poppins";


const parts = [
    {
        heading: 'How do you try to bring in a practical approach towards subjects and make it industry oriented?',
        Description: ['I try to bring in a practical approach by making my students visit various sites related to subjects, Giving presentations and video demonstrations, Giving hand-on experiences, By combining theory approaches with practical and Providing projects and case studies.', <br />, 'Check KMS College Of IT And Management Courses & Fees']
      
    },

    {
        heading: 'How do you strategize the curriculum and how often it gets updated to make it beneficial for the students?',
        Description: 'I focus on the students rather than on creating the best lesson plan. The ultimate goal should be to do what’s best for the learners. I also make sure to Talk to other experts, teachers, etc., from the industry and consider their inputs and Make use of technology to design the curriculum. I Avoid pre-packaged curriculum and make sure that the curriculum needs to be tailor made for the intended outcome.',

    },
    {
        heading: 'How do you help your student to cope up with the competition being so high in the outside world?',
        Description: "I help my students by the following ways: Accentuate the positive, Set expectations and consequences, Introduce competition, Introduce collaboration, Connect to their world, Plug into technology, Get parents involved, and Get students involved.",

    },
    {
        heading: 'Do you have any extracurricular activities/ programs to enhance the skills of the students or expose them to real world challenges?',
        Description: 'Yes we have some extracurricular activities and programs. Some sports/ games, annual programs, fashion shows, farewell parties, freshers introductions etc. so that students can release their stress and enjoy free time in college. To enhance the skills of the students we organize the different activities like workshops/ seminars/guest lectures/ field trips/industry/quiz contests/ training etc.',

    },
    {
        heading: 'What are the challenges you faced/ are facing to uplift the quality of education of your department?',
        Description: 'The challenge may be to manage equity and diversity in a technology-mediated market framework of expansion; The curriculum relevance, quality of learning and employment outcomes will continue to be a challenge. Several initiatives and heavy investments made in Internationalisation create challenges.',
    },
    {
        heading: 'When you came to college, what was your vision and how are you trying to achieve the same?',
        Description: 'I always come on time to the college, I always maintain my punctuality. My vision is to be an honest, empathetic and impactful teacher and to be recognized internationally within my organization. I am committed to growing as a teacher and delivering value-added projects to the students. My mission is to create and lead a dream organization where everyone is playing to their strengths.',
    },
    {
        heading: 'How does the curriculum of your department/college ensure the best practice of the industry?',
        Description: 'The curriculum of our college is the best in ways including Preparation of Timetable: Class wise, Laboratory-wise, Class room-wise and Individual, Preparation of Schedule of Instruction (Teaching Plan), Attendance Monitoring: (Course-wise, Class-wise, Percentage-wise), Syllabus coverage Monitoring, Continuous Assessment, Internal Examination schedule, result analysis, Upload of tech talk, concept video, open ended experiments, assignments, question bank, definitions and terminology, e-learning/Early Learning Readiness Video lectures, lecture notes, powerpoint presentations, class handouts.',
    },
    {
        heading: 'What are the interventions and approaches you bring in apart from curriculum to train/teach the students?',
        Description: 'Some of the interventions include Behavioural Interventions, Collaborative Interventions, One-to-One Interventions, Classroom-Based Interventions, Social, Emotional and Wellbeing Interventions, Peer Tutoring and Metacognition and Self-Regulation Homework.',
    },
    {
        heading: 'What valuable advice would you like to the students for them to have a prosperous career ahead?',
        Description: 'I advise students to Seek internship opportunities, Consider taking part in a work-study program, Grow your skills and knowledge, Get an early start, Keep your skills up-to-date, Stay focused, Find a balance with your personal life.',
    },

]

const Content = () => {
    return (
        <>
            {parts.map((part) => {
                return (
                    <>
                                <Box sx= {{
                                     marginTop: 3.5, color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>
                                    {part.heading}
                                </Box>
                                <Box sx={{
                                     marginTop: 2, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
                                    {part.Description}
                                    {part.Descriptiononr}
                                 </Box>
                    </>

                )
            }
            )
            }
        </>
    )
}
export default Content;