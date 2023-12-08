import fs from 'node:fs'

const engineSchematicTest = fs
  .readFileSync('../input/adventofcode_day3_1_short.txt', 'utf8')
  .split('\n')
  .filter((n) => n)

function part1(matrix) {
  const size = matrix.length
  let possibleNeighbors = []
  const serialNumbers = []
  let neighbors = []

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (isNaN(parseInt(matrix[row][col]))) {
        if (neighbors.some((ele) => ele !== '.' && isNaN(ele))) {
          serialNumbers.push(possibleNeighbors.join(''))
        }
        neighbors = []
        possibleNeighbors = []
        continue
      }
      possibleNeighbors.push(matrix[row][col])
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i
          const newCol = col + j

          if (
            newRow >= 0 &&
            newRow < size &&
            newCol >= 0 &&
            newCol < size &&
            !(i === 0 && j === 0)
          ) {
            neighbors.push(matrix[newRow][newCol])
          }
        }
      }
    }
  }

  return serialNumbers.reduce((acc, cur) => acc + parseInt(cur), 0)
}

console.log(part1(engineSchematicTest))

function part2(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const gearsObj = {}

  const findGears = (str, num, i, j) => {
    j = j === -1 ? 0 : j
    for (let k = 0; k < str.length; k++) {
      const character = str.charAt(k)
      if (character === '*') {
        const index = `${i}-${j + k}`
        gearsObj[index] = gearsObj[index]
          ? [...gearsObj[index], parseInt(num)]
          : [parseInt(num)]
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const current = matrix[i][j]

      if (isNaN(current)) {
        continue
      }

      let num = current

      // If used prefix, with operator before operand (for example, ++x),
      // the increment operator increments and returns the value after incrementing.
      while (++j < cols) {
        if (Number.isInteger(parseInt(matrix[i][j]))) {
          num += matrix[i][j]
        } else {
          break
        }
      }

      const top =
        i === 0 ? '' : matrix[i - 1].substring(j - num.length - 1, j + 1)
      const bottom =
        i === rows - 1 ? '' : matrix[i + 1].substring(j - num.length - 1, j + 1)
      const left = matrix[i][j - num.length - 1] || ''
      const right = matrix[i][j] || ''

      // console.log(num, i, j, top, right, bottom, left)

      findGears(top, num, i - 1, j - num.length - 1)
      findGears(bottom, num, i + 1, j - num.length - 1)
      findGears(left, num, i, j - num.length - 1)
      findGears(right, num, i, j)
    }
  }
  return Object.values(gearsObj)
    .filter((arr) => arr.length === 2)
    .reduce((acc, cur) => acc + cur[0] * cur[1], 0)
}

console.log(part2(engineSchematicTest))

// La solución de la parte 2 la encontré en https://www.youtube.com/watch?v=dok4MZ_cEyk&ab_channel=frontendcoder
