import { SiApollographql, SiBootstrap, SiGit, SiGraphql, SiJavascript, SiJest, SiOpenlayers, SiReact, SiRedux, SiReduxsaga, SiTypescript } from 'react-icons/si'

interface SkillsData {
  data: Skill[]
}

const skillsData: SkillsData = {
  data: [
    {
      id: "1",
      name: "React JS",
      icon: <SiReact className='card__skillIcon' />
    },
    {
      id: "2",
      name: "Redux",
      icon: <SiRedux className='card__skillIcon' />
    },
    {
      id: "3",
      name: "Redux-Saga",
      icon: <SiReduxsaga className='card__skillIcon' />
    },
    {
      id: "4",
      name: "JavaScript",
      icon: <SiJavascript className='card__skillIcon' />
    },
    {
      id: "5",
      name: "TypeScript",
      icon: <SiTypescript className='card__skillIcon' />
    },
    {
      id: "13",
      name: "Jest",
      icon: <SiJest className='card__skillIcon' />
    },
    {
      id: "14",
      name: "React Query",
      icon: <SiReact className='card__skillIcon' />
    },
    {
      id: "11",
      name: "React Hook Form",
      icon: <SiReact className='card__skillIcon' />
    },
    {
      id: "10",
      name: "Formik",
      icon: <SiReact className='card__skillIcon' />
    },
    {
      id: "6",
      name: "GraphQL",
      icon: <SiGraphql className='card__skillIcon' />
    },
    {
      id: "7",
      name: "Apollo Client",
      icon: <SiApollographql className='card__skillIcon' />
    },
    {
      id: "8",
      name: "Bootstrap",
      icon: <SiBootstrap className='card__skillIcon' />
    },
    {
      id: "9",
      name: "git",
      icon: <SiGit className='card__skillIcon' />
    },
    {
      id: "12",
      name: "Openlayers",
      icon: <SiOpenlayers className='card__skillIcon' />
    }
  ]
}

export default skillsData
