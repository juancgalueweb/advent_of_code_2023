import fs from 'node:fs'

const data = fs
  .readFileSync('../input/adventofcode_day5.txt', 'utf8')
  .split('\n\n')

const seedToLocation = (mapping, seed) => {
  let location = -1
  for (const row of mapping) {
    const [end, start, count] = row.split(' ').map(Number)
    if (seed >= start && seed <= start + count) {
      location = end - start + seed
      break
    }
  }
  return location === -1 ? seed : location
}

function part1(data) {
  const seeds = data[0].split('seeds: ')[1].split(' ').map(Number)

  const [, ...seedToSoil] = data[1].split('\n')
  const [, ...soilToFertilizers] = data[2].split('\n')
  const [, ...fertilizerToWater] = data[3].split('\n')
  const [, ...waterToLight] = data[4].split('\n')
  const [, ...lightToTemp] = data[5].split('\n')
  const [, ...tempToHum] = data[6].split('\n')
  const [, ...humToLoc] = data[7].split('\n')

  const res = seeds
    .map((seed) => seedToLocation(seedToSoil, seed))
    .map((seed) => seedToLocation(soilToFertilizers, seed))
    .map((seed) => seedToLocation(fertilizerToWater, seed))
    .map((seed) => seedToLocation(waterToLight, seed))
    .map((seed) => seedToLocation(lightToTemp, seed))
    .map((seed) => seedToLocation(tempToHum, seed))
    .map((seed) => seedToLocation(humToLoc, seed))

  return Math.min(...res)
}

console.log('Part 1:', part1(data))
