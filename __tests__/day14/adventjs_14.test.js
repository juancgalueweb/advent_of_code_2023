import { expect, test } from 'vitest'
import { maxGifts } from '../../day14/adventjs_14'

test('Reto 14: evita la alarma', () => {
  expect(maxGifts([2, 4, 2])).toBe(4)
  expect(maxGifts([5, 1, 1, 5])).toBe(10)
  expect(maxGifts([4, 1, 1, 4, 2, 1])).toBe(9)
  expect(maxGifts([1, 3, 1, 3, 100])).toBe(103)
  expect(maxGifts([1, 2, 3, 1])).toBe(4)
  expect(maxGifts([2, 7, 9, 3, 1])).toBe(12)
  expect(maxGifts([0, 0, 0, 0, 1])).toBe(1)
  expect(maxGifts([3, 4, 5])).toBe(8)
})
