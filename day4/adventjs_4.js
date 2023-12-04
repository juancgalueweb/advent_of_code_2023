/* 
  En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
  las letras dentro de los paréntesis deben ser leídas al revés

  Santa necesita que estos mensajes estén correctamente formateados. 
  Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres 
  dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

  Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir 
  los caracteres en el orden correcto.
*/

export function decode(message) {
  const countOpenAndCloseParenthesis = message.match(/\(|\)/g)
  let parenthesisCounter =
    countOpenAndCloseParenthesis !== null
      ? countOpenAndCloseParenthesis.length
      : 0

  if (parenthesisCounter === 0) {
    return message
  }

  function decodeOnce(message) {
    const regex = /\(([^()]+)\)/
    const matching = message.match(regex)
    const notMatching1 = message.slice(0, matching.index)
    const notMatching2 = message.slice(
      matching.index + matching[0].length,
      message.length
    )

    return (
      notMatching1 + matching[1].split('').reverse().join('') + notMatching2
    )
  }

  while (parenthesisCounter > 0) {
    message = decodeOnce(message)
    parenthesisCounter -= 2
  }

  return message
}
