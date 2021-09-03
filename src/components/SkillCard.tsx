import React from 'react'
import styled from 'styled-components'

interface AvatarProps {
  x: number,
  y: number
}

// spriteIndex is a 1-based index
function getSpriteCoordinates (spriteIndex: number) {
  // in pixels
  const spritesPadd = 2,
    spriteSize = 24,
    spritesPerRow = 4
  const rowIndex = spriteIndex % spritesPerRow - 1,
    colIndex = Math.ceil(spriteIndex / spritesPerRow) - 1
  const x = rowIndex * spriteSize + rowIndex * 2 * spritesPadd + 2,
    y = colIndex * spriteSize + colIndex * 2 * spritesPadd + 2
  return [x, y]
}

const Avatar = styled.div<AvatarProps>`
  background-position: ${(props) => `${-props.x}px ${-props.y}px`} !important;
`

const SkillCard: React.FC<Skill> = ({ spriteIndex = 1, name }) => {
  const [x, y] = getSpriteCoordinates(spriteIndex)
  return (
    <div className='card card--isSkill'>
      <Avatar className='card__avatarImage' x={ x } y={ y } />
      <span className='card__title'>{ name }</span>
    </div>
  )
}

export default React.memo(SkillCard)
