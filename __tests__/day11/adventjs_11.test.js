import { expect, test } from 'vitest'
import { getIndexsForPalindrome } from '../../day11/adventjs_11'

test('Reto 11: los elfos estudiosos', () => {
  expect(getIndexsForPalindrome('anna')).toEqual([])
  expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
  expect(getIndexsForPalindrome('abac')).toBe(null)
  expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([])
  expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
  expect(getIndexsForPalindrome('caababa')).toBe(null)
})
