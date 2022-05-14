import { FaAward, FaBabyCarriage, FaHandshake } from 'react-icons/fa'
import { IoIosSchool} from 'react-icons/io'

const myLifeEventsData = {
    data: [
      {
        data: [
          { label: "City", value: "Catacaos" },
          { label: "Country", value: "Perú" }
        ],
        date: "1994-04-07",
        dateFormat: "MMM YYYY",
        title: "I was born!",
        icon: <FaBabyCarriage className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "City", value: "Piura" },
          { label: "School", value: "Hogar San Antonio" }
        ],
        date: "2009-12-31",
        dateFormat: "MMM YYYY",
        title: "Graduated from High School",
        icon: <IoIosSchool className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "City", value: "Piura" },
          { label: "University", value: "Universidad Nacional de Piura" },
          { label: "Field of Study", value: "Informatics" },
          { label: "Degree", value: "Bachelor" }
        ],
        date: "2014-12-31",
        dateFormat: "MMM YYYY",
        title: "Graduated from University",
        icon: <IoIosSchool className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "Department", value: "Informatics" },
          { label: "Team", value: "Geo-referenced Cadastre" },
          { label: "Role", value: "GIS Developer" }
        ],
        date: "2015-06-15",
        dateFormat: "MMM YYYY",
        title: "Joined EPS GRAU S.A.",
        icon: <FaHandshake className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "City", value: "Piura" },
          { label: "University", value: "Universidad Nacional de Piura" }
        ],
        date: "2019-10-01",
        dateFormat: "MMM YYYY",
        title: "Passed my Thesis Defense",
        icon: <FaAward className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "Exam Type", value: "KET" },
          { label: "Level achieved", value: "B1" }
        ],
        date: "2019-12-19",
        dateFormat: "MMM YYYY",
        title: "Took Cambridge Exam",
        icon: <FaAward className='card__timeLineEventIcon' />
      },
      {
        data: [{ label: "Role", value: "Front End Developer" }],
        date: "2021-01-04",
        dateFormat: "MMM YYYY",
        title: "Joined Oktana",
        icon: <FaHandshake className='card__timeLineEventIcon' />
      },
      {
        data: [{ label: "Role", value: "Front End Developer" }],
        date: "2021-11-29",
        dateFormat: "MMM YYYY",
        title: "Joined Experis Perú",
        icon: <FaHandshake className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "Exam Type", value: "FCE" },
          { label: "Level achieved", value: "In Review" }
        ],
        date: "2021-12-11",
        dateFormat: "MMM YYYY",
        title: "Took Cambridge Exam",
        icon: <FaAward className='card__timeLineEventIcon' />
      },
      {
        data: [
          { label: "Chapter", value: "Industry" },
          { label: "City", value: "Piura" }
        ],
        date: "2022-02-22",
        dateFormat: "MMM YYYY",
        title: "Joined The Peruvian Engineers College",
        icon: <FaHandshake className='card__timeLineEventIcon' />
      }
    ]
  }

export default myLifeEventsData;
  