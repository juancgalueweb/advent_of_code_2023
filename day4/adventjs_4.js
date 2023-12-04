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
