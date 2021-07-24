import React from 'react'
import SkillCard from './SkillCard'

interface SkillCardGroupProps {
  skills: Skill[]
}

const SkillCardGroup: React.FC<SkillCardGroupProps> = ({ skills }) => {
  const renderCards = () => skills.map((skill) => (
    <SkillCard key={ skill.id } { ...skill } />
  ))

  return (
    <div className='skillCardsGrid'>
      { renderCards() }
    </div>
  )
}

export default SkillCardGroup
