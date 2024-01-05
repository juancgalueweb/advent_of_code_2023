/*
  ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))

Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]

Ten en cuenta que…

Las celdas diagonales también se consideran adyacentes.
El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
El tablero puede tener cualquier tamaño.
Los números son cadenas de texto.
*/

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

const store2 = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', ' ']
]

const failedTest = [['*', ' ', '*']]

function revealSabotage(store) {
  const rowLength = store.length
  const colLength = store[0].length

  const possibleNeighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (store[row][col] === '*') continue
      let sabotagedGifts = 0

      for (const neighbor of possibleNeighbors) {
        if (store[row + neighbor[0]]?.[col + neighbor[1]] === undefined)
          continue
        if (store[row + neighbor[0]]?.[col + neighbor[1]] === '*') {
          sabotagedGifts++
        }
      }
      store[row][col] = sabotagedGifts === 0 ? ' ' : sabotagedGifts.toString()
    }
  }
  return store
}

console.table(revealSabotage(failedTest))
console.table(revealSabotage(store))
console.table(revealSabotage(store2))
