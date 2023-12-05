/*
  --- Day 3: Gear Ratios ---
You and the Elf eventually reach a gondola lift station; 
he says the gondola lift will take you up to the water source, 
but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: 
they're not moving.

"Aaah!"

You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. 
"Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; 
it'll still be a while before I can fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine, 
but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, 
it should be easy to work out which part is missing.

The engine schematic (your puzzle input) consists of a visual representation of the engine. 
There are lots of numbers and symbols you don't really understand, 
but apparently any number adjacent to a symbol, even diagonally, is a "part number" 
and should be included in your sum. (Periods (.) do not count as a symbol.)

Here is an example engine schematic:

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?
*/

import fs from 'node:fs'

const engineSchematicTest = fs
  .readFileSync('../input/adventofcode_day3_1.txt', 'utf8')
  .split('\n')
  .map((row) => row.split(''))

function matrixNeighbors(matrix) {
  const size = matrix.length
  let possibleNeighbors = []
  const serialNumbers = []
  let neighbors = []

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (isNaN(matrix[row][col])) {
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

console.log(matrixNeighbors(engineSchematicTest))
