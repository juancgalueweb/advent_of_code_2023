import { expect, test } from 'vitest'
import { autonomousDrive } from '../../day15/adventjs_15'

test('Reto 15: robot autónomo', () => {
  expect(autonomousDrive(['..!....', '...*.*.'], ['R', 'R', 'D', 'L'])).toEqual(
    ['.......', '...*!*.']
  )
  expect(autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])).toEqual([
    '.......',
    '..!...*'
  ])
  expect(autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'D', 'D'])).toEqual(
    ['*.....*', '*....!*']
  )
  expect(
    autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
  ).toEqual(['***', '..!', '***'])
  expect(autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])).toEqual([
    '***',
    '*!*',
    '***'
  ])
  expect(
    autonomousDrive(
      ['.**.*.*.', '.***....', '..!.....'],
      ['D', 'U', 'R', 'R', 'R']
    )
  ).toEqual(['.**.*.*.', '.***....', '.....!..'])
})
