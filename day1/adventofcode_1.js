import { inputArray } from '../input/adventofcode_input1.js'

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
