import React from 'react'
import styled from 'styled-components'

interface AvatarProps {
  spriteIndex: number
}

function getSpriteCoordinates (spriteIndex: number) {
  const spritesPadd = 2,
    spriteSize = 24,
    spritesPerRow = 4
  const rowIndex = spriteIndex % spritesPerRow - 1,
    colIndex = Math.ceil(spriteIndex / spritesPerRow) - 1
  const x = rowIndex * spriteSize + rowIndex * 2 * spritesPadd + 2,
    y = colIndex * spriteSize + colIndex * 2 * spritesPadd + 2
  return [-x, -y]
}

const Avatar = styled.div<AvatarProps>`
  background-position: ${(props) => {
    const [x, y] = getSpriteCoordinates(props.spriteIndex)
    return `${x}px ${y}px`
  }} !important;
`

const SkillCard: React.FC<Skill> = ({ spriteIndex, name }) => {
  return (
    <div className='card card--isSkill'>
      <Avatar className='card__avatarImage' spriteIndex={ spriteIndex } />
      <span className='card__title'>{ name }</span>
    </div>
  )
}

export default React.memo(SkillCard)
