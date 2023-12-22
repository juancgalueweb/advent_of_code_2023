import { expect, test } from 'vitest'
import { calculateTime } from '../../day13/adventjs_13'

test('Reto 13: calculando el tiempo', () => {
  expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00')
  expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
  expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe(
    '-05:29:00'
  )
  expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe('00:00:00')
})
