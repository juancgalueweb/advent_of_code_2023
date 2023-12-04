import { expect, test } from 'vitest'
import { decode } from '../../day4/adventjs_4'

test('Reto 4: dale la vuelta a los paréntesis', () => {
  const msg1 = 'hola (odnum)'
  const msg2 = '(olleh) (dlrow)!'
  const msg3 = 'sa(u(cla)atn)s'
  const msg4 = 'sin paréntesis'

  expect(decode(msg1)).toBe('hola mundo')
  expect(decode(msg2)).toBe('hello world!')
  expect(decode(msg3)).toBe('santaclaus')
  expect(decode(msg4)).toBe('sin paréntesis')
})
