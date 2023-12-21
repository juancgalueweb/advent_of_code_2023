import { expect, test } from 'vitest'
import { checkIsValidCopy } from '../../day12/adventjs_12'

test('Reto 12: es una copia válida?', () => {
  expect(
    checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')
  ).toBe(true)
  expect(
    checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')
  ).toBe(false)
  expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
  expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
})
