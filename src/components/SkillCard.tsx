import React from 'react'

const SkillCard: React.FC<Skill> = ({ avatarImg, name }) => {
  return (
    <div className='card card--isSkill'>
      <div className='card__avatarSlot'>
        <img className='card__avatarImage' src={ avatarImg } />
      </div>
      <h3 className='card__title'>{ name }</h3>
    </div>
  )
}

export default SkillCard
