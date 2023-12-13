/* 
  En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

  Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

  Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

  Si ya es un palíndromo, un array vacío.
  Si no es posible, null.
  Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
  Por ejemplo:

  getIndexsForPalindrome('anna') // []
  getIndexsForPalindrome('abab') // [0, 1]
  getIndexsForPalindrome('abac') // null
  getIndexsForPalindrome('aaaaaaaa') // []
  getIndexsForPalindrome('aaababa') // [1, 3]
  getIndexsForPalindrome('caababa') // null
*/

export function getIndexsForPalindrome(word) {
  const size = word.length
  function isPalindrome(word) {
    return word === word.split('').reverse().join('')
  }
  if (isPalindrome(word)) return []
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const newWord = word.split('')
      const temp = newWord[i]
      newWord[i] = newWord[j]
      newWord[j] = temp
      if (isPalindrome(newWord.join(''))) return [i, j]
    }
  }
  return null
}
