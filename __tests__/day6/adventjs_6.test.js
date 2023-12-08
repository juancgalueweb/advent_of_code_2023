import { expect, test } from 'vitest'
import { maxDistance } from '../../day6/adventjs_6'

test('Reto 6: los renos a prueba', () => {
  expect(maxDistance('>>*<')).toBe(2)
  expect(maxDistance('<<<>')).toBe(2)
  expect(maxDistance('>***>')).toBe(5)
  expect(maxDistance('<<<<<')).toBe(5)
  expect(maxDistance('**********')).toBe(10)
  expect(maxDistance('<<**>>')).toBe(2)
})
