import imag from '../Assets/image/1.png'
import imag2 from '../Assets/image/2.png'
import imag3 from '../Assets/image/3.png'
import svgimg1 from '../Assets/city-logo/delhi.png'
import svgimg2 from '../Assets/city-logo/banglore.png'
import svgimg3 from '../Assets/city-logo/hyderabad.png'
import svgimg4 from '../Assets/city-logo/pune.png'
import svgimg5 from '../Assets/city-logo/mumbai.png'
import svgimg6 from '../Assets/city-logo/chennai.png'

const DataFile = [
    {
        city: 'Delhi NCR',
        img: svgimg1

    },
    {
        city: 'Bangolore',
        img: svgimg2
    },
    {
        city: 'Hyderabad',
        img: svgimg3
    },
    {
        city: 'Pune',
        img: svgimg4
    },
    {
        city: 'Mumbai',
        img: svgimg5
    },
    {
        city: 'Chennai',
        img: svgimg6
    }
]

const DegreeType = ['Bachelors', 'Master', 'Doctrate', 'Diploma', 'Certificate']

const AboutDegree = [
    {
        degree: 'B.Com General',
        type: 'Full Time',
        duration: '3 Years',
        avgFee: '59.9k',
        colleges: '6354'
    },
    {
        degree: 'B.Com General',
        type: 'Full Time',
        duration: '3 Years',
        avgFee: '59.9k',
        colleges: '6354'
    },
    {
        degree: 'B.Com General',
        type: 'Full Time',
        duration: '3 Years',
        avgFee: '59.9k',
        colleges: '6354'
    },

]

const Abroad = [
    {
        imgg: imag,
        cardName: 'Study in USA',
        check: 'Check 3037 colleges',
        no: '1037',
        fee: '21.4k USD/Year',
        guide1: 'Why study in the USA',
        guide2: 'Exams for Studying in USA',
        guide3: 'SOP for USA',
        guide4: 'Post study opportunities in USA'
    },

    {
        imgg: imag2,
        cardName: 'Study in UK',
        check: 'Check 170 colleges',
        no: '170',
        fee: '20.44K USD/Year',
        guide1: 'Why study in the UK?',
        guide2: 'SOP for UK',
        guide3: 'UK Student VISA',
        guide4: 'Cost of Study in UK'
    },
    {
        imgg: imag3,
        cardName: 'Study in Canada',
        check: 'Check 221 colleges',
        no: '221',
        fee: '19.49K USD/Year',
        guide1: 'Why study in Canada?',
        guide2: 'Top University to Study',
        guide3: 'SOP of Canada',
        guide4: 'Work Study in Canada'
    },
]

export { DegreeType, AboutDegree, Abroad };
export default DataFile;

