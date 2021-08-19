import React from 'react'

const SkillCard: React.FC<Skill> = ({ avatarImg, name }) => {
  return (
    <div className='card card--isSkill'>
      <img alt='' className='card__avatarImage' src={ avatarImg } />
      <span className='card__title'>{ name }</span>
    </div>
  )
}

export default React.memo(SkillCard)
