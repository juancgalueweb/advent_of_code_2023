/* 

  PART 1:
  As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

  The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

  For example:

  1abc2
  pqr3stu8vwx
  a1b2c3d4e5f
  treb7uchet
  In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
*/

import { inputArray } from './input/adventofcode_input1.js'

export function getCalibrationValue(inputString) {
  const numbersArray = []
  let result

  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString[i]))) {
      numbersArray.push(inputString[i])
    }
  }

  if (numbersArray.length === 1) {
    result = numbersArray[0].repeat(2)
  }

  const numb1 = numbersArray[0]
  const numb2 = numbersArray[numbersArray.length - 1]

  result = numb1.concat(numb2)

  return parseInt(result)
}

function finalCalibrationValuePart1(array) {
  let sum = 0
  array.forEach((ele) => {
    sum += getCalibrationValue(ele)
  })

  return sum
}

console.log('Part 1', finalCalibrationValuePart1(inputArray))

/* 
  --- Part Two ---
  Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

  Equipped with this new information, you now need to find the real first and last digit on each line. For example:

  two1nine
  eightwothree
  abcone2threexyz
  xtwone3four
  4nineeightseven2
  zoneight234
  7pqrstsixteen
  In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

  What is the sum of all of the calibration values?
*/

export function transformString(inputString) {
  const numberMapping = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }

  Object.keys(numberMapping).forEach((key) => {
    if (inputString.includes(key))
      inputString = inputString.replaceAll(
        key,
        `${key}${numberMapping[key]}${key}`
      )
  })
  const firstDigit = inputString.match(/\d/)[0]
  const lastDigit = inputString.match(/(\d)[a-z]*$/)[1]
  return parseInt(`${firstDigit}${lastDigit}`)
}

function finalCalibrationValuePart2(array) {
  let sum = 0
  array.forEach((ele) => {
    sum += transformString(ele)
  })

  return sum
}

console.log('Part 2', finalCalibrationValuePart2(inputArray))
