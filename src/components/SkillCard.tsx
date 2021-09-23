import { FC, memo } from 'react'
import styled from 'styled-components'
import { getSpriteCoordinates } from 'helpers'

function getBackgroundPosition (spriteIndex: number) {
  const [x, y] = getSpriteCoordinates(spriteIndex)
  return `${x}px ${y}px !important`
}

const Avatar = styled.div<{ spriteIndex: number }>`
  background-position: ${(props) => getBackgroundPosition(props.spriteIndex)}
`

const SkillCard: FC<Skill> = ({ spriteIndex, name }) => {
  return (
    <div className='card card--isSkill'>
      <Avatar className='card__avatarImage' spriteIndex={ spriteIndex } />
      <span className='card__title'>{ name }</span>
    </div>
  )
}

export default memo(SkillCard)
