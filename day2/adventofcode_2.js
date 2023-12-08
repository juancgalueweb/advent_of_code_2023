import fs from 'node:fs'

const parseGameRow = (row) => {
  return row
    .replace(/Game \d+: /, '')
    .split(';')
    .map((subGame) => subGame.split(',').map((cube) => cube.trim()))
}

const isGamePossible = (subGameNumbers, bagContent) => {
  for (const subGame of subGameNumbers) {
    for (const cube of subGame) {
      const [number, color] = cube.split(' ')
      if (bagContent[color] < number) {
        return false
      }
    }
  }
  return true
}

const part1 = fs
  .readFileSync('../input/adventofcode_day2_1.txt', 'utf-8')
  .split('\n')
  .map((row) => {
    const possibleGames = []
    const bagContent = {
      red: 12,
      green: 13,
      blue: 14
    }
    const gameNumber = parseInt(row.match(/Game (\d+)/)[1])
    const subGameNumbers = parseGameRow(row)

    if (isGamePossible(subGameNumbers, bagContent)) {
      possibleGames.push(gameNumber)
    }

    return possibleGames
  })
  .flat()
  .reduce((acc, cur) => acc + cur, 0)

console.log('Day 2: Cube Conundrum, part 1:', part1)

const minimunCubes = (subGameNumbers) => {
  const minimumCubes = {
    red: 0,
    green: 0,
    blue: 0
  }

  for (const subGame of subGameNumbers) {
    for (const cube of subGame) {
      const [number, color] = cube.split(' ')
      if (parseInt(number) > minimumCubes[color]) {
        minimumCubes[color] = parseInt(number)
      }
    }
  }

  return minimumCubes
}

const part2 = fs
  .readFileSync('../input/adventofcode_day2_1.txt', 'utf-8')
  .split('\n')
  .map((row) => {
    const subGameNumbers = parseGameRow(row)
    const { red, green, blue } = minimunCubes(subGameNumbers)

    return red * green * blue
  })
  .reduce((acc, cur) => acc + cur, 0)

console.log('Day 2: Cube Conundrum, part 2:', part2)
