import fs from 'node:fs'

const data = fs
  .readFileSync('../input/adventofcode_day4_1.txt', 'utf8')
  .split('\n')
  .filter((n) => n)

function cleanData(data) {
  return data.map((ele) => ele.replace(/\s+/g, ' '))
}

function part1(data) {
  const dataToParse = cleanData(data)
  const regex = /:(.*)\|(.*)/
  const winningScores = []
  let matches = []

  for (const line of dataToParse) {
    const match = line.match(regex)
    let count = 0
    if (match) {
      const winningNumbers = match[1].trim().split(' ').map(Number)
      const yourNumbers = match[2].trim().split(' ').map(Number)
      yourNumbers.forEach((number) => {
        if (winningNumbers.includes(number)) {
          count++
          matches.push(2 ** (count - 1))
        }
      })
      winningScores.push(matches.length === 0 ? 0 : matches[matches.length - 1])
      matches = []
    }
  }
  const result = winningScores.reduce((a, b) => a + b, 0)
  return result
}

console.log('Part 1:', part1(data)) // 25004

function part2(data) {
  const dataToParse = cleanData(data)
  const regex = /:(.*)\|(.*)/

  const cardFreqMap = {}
  for (let i = 0; i < dataToParse.length; i++) {
    cardFreqMap[i] = 1
  }

  let totalCopies = 0
  for (let i = 0; i < dataToParse.length; i++) {
    const match = dataToParse[i].match(regex)
    const winningNums = match[1].trim().split(' ').map(Number)
    const givenNums = match[2].trim().split(' ').map(Number)

    let matches = 0
    for (const number of givenNums) {
      if (winningNums.includes(number)) {
        matches++
      }
    }

    if (matches > 0) {
      const nextGames =
        i + matches < dataToParse.length
          ? i + matches
          : dataToParse.length - i > 0
            ? i + (dataToParse.length - i)
            : 0

      const numberOfCurrentCardCopies = cardFreqMap[i]
      let currentIndex = i + 1

      while (currentIndex <= nextGames) {
        cardFreqMap[currentIndex] += numberOfCurrentCardCopies
        currentIndex++
      }
    }

    totalCopies += cardFreqMap[i]
  }

  return totalCopies
}

console.log('Part 2:', part2(data)) // 14427616
