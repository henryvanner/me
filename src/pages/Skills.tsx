import React from 'react'
import PageTitle from 'components/PageTitle'
import skills from '../data/skills.json'
import 'styles/Skills.scss'
import SkillCardGroup from 'components/SkillCardGroup'

const Skills: React.FC = () => {
  return (
    <>
      <PageTitle>Skills</PageTitle>
      <SkillCardGroup skills={ skills.data } />
    </>
  )
}

export default Skills
