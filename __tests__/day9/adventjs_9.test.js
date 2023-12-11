import { expect, test } from 'vitest'
import { adjustLights } from '../../day9/adventjs_9'

const test1 = ['🟢', '🔴', '🟢', '🟢', '🟢']
const test2 = ['🔴', '🔴', '🟢', '🟢', '🔴']
const test3 = ['🟢', '🔴', '🟢', '🔴', '🟢']
const test4 = ['🔴', '🔴', '🔴']
const test5 = ['🟢', '🔴', '🔴', '🟢', '🔴']
const test6 = ['🔴', '🔴', '🟢', '🔴', '🟢']

test('Reto 9: alterna las luces', () => {
  expect(adjustLights(test1)).toBe(1)
  expect(adjustLights(test2)).toBe(2)
  expect(adjustLights(test3)).toBe(0)
  expect(adjustLights(test4)).toBe(1)
  expect(adjustLights(test5)).toBe(2)
  expect(adjustLights(test6)).toBe(1)
})
