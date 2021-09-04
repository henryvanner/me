export function getSpriteCoordinates(spriteIndex: number): number[] {
  const spritesPadd = 2,
    spriteSize = 24,
    spritesPerRow = 4
  const rowIndex = spriteIndex % spritesPerRow - 1,
    colIndex = Math.ceil(spriteIndex / spritesPerRow) - 1
  const x = rowIndex * spriteSize + rowIndex * 2 * spritesPadd + 2,
    y = colIndex * spriteSize + colIndex * 2 * spritesPadd + 2
  return [-x, -y]
}
