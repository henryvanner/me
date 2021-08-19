import React from 'react'
import PageTitle from 'components/PageTitle'
import skills from '../data/skills.json'
import 'styles/Skills.scss'
import SkillCardGroup from 'components/SkillCardGroup'

const Skills: React.FC = () => {
  return (
    <>
      <PageTitle>Skills</PageTitle>
      <h2 className='page__sectionHeader'>My Toolbox includes but does not limit to</h2>
      <SkillCardGroup skills={ skills.data } />
    </>
  )
}

export default Skills
