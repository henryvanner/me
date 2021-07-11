import { fruitExists } from './lib'

test('\'Orange does not exist', () => {
  expect(fruitExists('orange')).toBeFalsy()
})
