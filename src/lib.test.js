import { fruitExists, sum } from './lib'

test('Orange does not exist', () => {
  expect(fruitExists('orange')).toBeFalsy()
})

test('Sum 1 + 2', () => {
  expect(sum(1, 2)).toBe(3)
})
