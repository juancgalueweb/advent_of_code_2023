/* 
  Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

. significa que hay vía libre.
* significa que hay un obstáculo.
! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

R mueve al robot una posición a la derecha.
L mueve al robot una posición a la izquierda.
U mueve al robot una posición hacia arriba.
D mueve al robot una posición hacia abajo.
Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)

[
  ".......",
  "...*!*."
]

 El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.

 Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

 También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.
*/

export function autonomousDrive(store, movements) {
  let robotPosition = []
  const storeRows = store.length
  const storeColumns = store[0].length
  const newStore = store.map((row) => row.split(''))

  // Determina la ubicación inicial del robot
  store.forEach((row, index) => {
    const robotIndex = row.indexOf('!')
    if (robotIndex !== -1) {
      robotPosition = [index, robotIndex]
    }
  })

  movements.forEach((movement) => {
    const [row, column] = robotPosition

    switch (movement) {
      case 'R':
        if (column + 1 < storeColumns && newStore[row][column + 1] !== '*') {
          newStore[row][column] = '.'
          newStore[row][column + 1] = '!'
          robotPosition = [row, column + 1]
        }
        break
      case 'L':
        if (column - 1 >= 0 && newStore[row][column - 1] !== '*') {
          newStore[row][column] = '.'
          newStore[row][column - 1] = '!'
          robotPosition = [row, column - 1]
        }
        break
      case 'U':
        if (row - 1 >= 0 && newStore[row - 1][column] !== '*') {
          newStore[row][column] = '.'
          newStore[row - 1][column] = '!'
          robotPosition = [row - 1, column]
        }
        break
      case 'D':
        if (row + 1 < storeRows && newStore[row + 1][column] !== '*') {
          newStore[row][column] = '.'
          newStore[row + 1][column] = '!'
          robotPosition = [row + 1, column]
        }
        break
      default:
        break
    }
  })

  return newStore.map((row) => row.join(''))
}
