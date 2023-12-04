import { expect, test } from 'vitest'
import { findNaughtyStep } from '../../day3/adventjs_3'

test('Reto 3: El elfo travieso', () => {
  expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  expect(findNaughtyStep('igual', 'igual')).toBe('')
})
