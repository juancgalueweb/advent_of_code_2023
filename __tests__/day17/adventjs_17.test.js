import { expect, test } from 'vitest'
import { optimizeIntervals } from '../../day17/adventjs_17'

test('Reto 17: optimizando el alquiler', () => {
  expect(
    optimizeIntervals([
      [2, 7],
      [3, 4],
      [5, 8]
    ])
  ).toEqual([[2, 8]])
  expect(
    optimizeIntervals([
      [1, 3],
      [2, 6],
      [8, 10]
    ])
  ).toEqual([
    [1, 6],
    [8, 10]
  ])
  expect(
    optimizeIntervals([
      [3, 4],
      [1, 2],
      [5, 6]
    ])
  ).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
  expect(
    optimizeIntervals([
      [5, 7],
      [6, 8]
    ])
  ).toEqual([[5, 8]])
  expect(
    optimizeIntervals([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20]
    ])
  ).toEqual([
    [1, 5],
    [6, 10],
    [11, 15],
    [16, 20]
  ])
  expect(
    optimizeIntervals([
      [1, 15],
      [8, 12],
      [4, 7]
    ])
  ).toEqual([[1, 15]])
})
