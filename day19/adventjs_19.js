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

//! NO FUNCIONA DEL TODO BIEN, FALLAS UNOS TEST SECRETOS
function revealSabotage(store) {
  const storeCopy = store.map((row) => [...row])
  const size = store.length
  for (let row = 0; row < size; row++) {
    for (let col = 0; size === 1 ? col <= size + 1 : col < size; col++) {
      if (store[row][col] === '*') {
        continue
      }
      let count = 0
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i
          const newCol = col + j

          if (
            newRow >= 0 &&
            newRow < size &&
            newCol >= 0 &&
            (size === 1 ? newCol <= size + 1 : newCol < size) &&
            !(i === 0 && j === 0)
          ) {
            if (store[newRow][newCol] === '*') {
              count++
            }
          }
        }
      }
      storeCopy[row][col] = count === 0 ? ' ' : count.toString()
    }
  }
  return storeCopy
}

console.table(revealSabotage(failedTest))
console.table(revealSabotage(store))
console.table(revealSabotage(store2))
