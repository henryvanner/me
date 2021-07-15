import React from 'react'
import PageTitle from 'components/PageTitle'
import SkillCard from 'components/SkillCard'
import skills from '../data/skills.json'
import 'styles/Skills.scss'

const Skills: React.FC = () => {
  const renderSkills = () => skills.data.map((skill, index) => <SkillCard key={ index } { ...skill } />)

  return (
    <>
      <PageTitle>Skills</PageTitle>
      <div className='skillCardsGrid'>
        { renderSkills() }
      </div>
    </>
  )
}

export default Skills
