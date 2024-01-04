/*
En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

Por ejemplo, si la función recibe 01:30 debe devolver:

drawClock('01:30') // ⬇️

[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]

Para saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ves, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nosotros lo representaremos con un asterisco (*), y los píxeles en blanco, con un espacio ():

Representación de los dígitos para el reloj digital del 1 al 9, donde puedes ver lo que ocupa en píxeles cada número

*/

// La solución es de https://github.com/jamerrq/advent-js-2023/blob/master/src/challenges/18.ts

function drawClock(time) {
  const digitGrid = {
    '00': '1',
    '01': '14',
    '02': 'A',
    10: '1237',
    11: 'N',
    12: '56',
    20: '1237',
    21: 'N',
    22: '56',
    30: '17',
    31: '170',
    32: 'A',
    40: '134579',
    41: 'N',
    42: '2',
    50: '134579',
    51: 'N',
    52: '2',
    60: '147',
    61: '147',
    62: 'A'
  }
  const clockGrid = []
  for (let i = 0; i < 7; i++) {
    clockGrid[i] = new Array(17).fill(' ')
  }
  clockGrid[2][8] = '*'
  clockGrid[4][8] = '*'
  const digits = [...time.replace(':', '')]
  let currentDigit = digits.shift()
  for (const index of [0, 4, 10, 14]) {
    for (let row = 0; row < 7; ++row) {
      for (let col = 0; col < 3; ++col) {
        const notFill = digitGrid[`${row}${col}`]
        if (notFill === 'N') continue
        if (!notFill.includes(currentDigit) || notFill === 'A') {
          clockGrid[row][col + index] = '*'
        }
      }
    }
    currentDigit = digits.shift()
  }
  return clockGrid
}

console.table(drawClock('01:30'))
console.table(drawClock('13:48'))
