/* 
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
*/

// drawGift(4, '+')

/*
   ####   0  --> length 4
  #++##   1  --> length 5
 #++#+#   2  --> length 6
####++#   3  --> length 7
#++#+#    4  --> length 6
#++##     5  --> length 5
####      6  --> length 4
*/

// drawGift(5, '*')
/*
    #####  0 --> length 5
   #***##  1 --> length 6
  #***#*#  2 --> length 7
 #***#**#  3 --> length 8
#####***#  4 --> length 9
#***#**#   5 --> length 8
#***#*#    6 --> length 7
#***##     7 --> length 6
#####      8 --> length 5
*/

// drawGift(1, '^')
/*
#
*/

function drawGift(size, symbol) {
  const remainder = size % 2
  const gift = symbol.repeat(size / 2 + remainder)
  const boxChar = '#'
  let count = 0
  if (size === 1) {
    return boxChar + '\n'
  }
  let result = ''
  let beginAndEnd
  for (let i = 0; i < size * 2 - 1; i++) {
    const initialSpace = ' '.repeat(Math.max(0, size - 1 - i))

    if (i === 0) {
      result += initialSpace + boxChar.repeat(size + i) + '\n'
      beginAndEnd = boxChar.repeat(size + i)
    }

    const side =
      beginAndEnd.substring(0, 1) + gift + beginAndEnd.substring(0, 1)

    if (i > 0 && i <= Math.floor(size / 2) + (size % 2)) {
      result += initialSpace + side + symbol.repeat(count) + boxChar + '\n'
      count++
    }

    if (i === size - 1) {
      result += beginAndEnd + symbol.repeat(count) + boxChar + '\n'
    }

    if (i > size - 1 && i < size * 2 - 2) {
      count--
      result += side + symbol.repeat(count) + boxChar + '\n'
    }

    if (i === size * 2 - 2) {
      result += beginAndEnd + '\n'
    }
  }
  return result.toString()
}

console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))
