import { expect, test } from 'vitest'
import { getCalibrationValue, transformString } from '../../day1/adventofcode_1'

test('Day 1: Trebuchet?!, part 1', () => {
  expect(getCalibrationValue('1abc2')).toBe(12)
  expect(getCalibrationValue('pqr3stu8vwx')).toBe(38)
  expect(getCalibrationValue('a1b2c3d4e5f')).toBe(15)
  expect(getCalibrationValue('treb7uchet')).toBe(77)
  expect(getCalibrationValue('threerznlrhtkjp23mtflmbrzq395three')).toBe(25)
  expect(getCalibrationValue('9sevenvlttm')).toBe(99)
  expect(getCalibrationValue('422268')).toBe(48)
})

test('Day 1: Trebuchet?!, part 2', () => {
  expect(transformString('two1nine')).toBe(29)
  expect(transformString('eightwothree')).toBe(83)
  expect(transformString('abcone2threexyz')).toBe(13)
  expect(transformString('xtwone3four')).toBe(24)
  expect(transformString('4nineeightseven2')).toBe(42)
  expect(transformString('7pqrstsixteen')).toBe(76)
})
