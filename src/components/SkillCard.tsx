import { FC, memo } from 'react'

const SkillCard: FC<Skill> = ({ icon, name }) => {
  return (
    <div className='card card--isSkill'>
      {icon}
      <span className='card__title'>{ name }</span>
    </div>
  )
}

export default memo(SkillCard)
