import { expect, test } from 'vitest'
import { manufacture } from '../../day2/adventjs_2'

test('Reto 2: ponemos en marcha la fábrica', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([
    'tren',
    'oso'
  ])
  expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
})
