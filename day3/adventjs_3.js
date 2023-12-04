/* 
  En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

  Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

  Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

export function findNaughtyStep(original, modified) {
  const originalArray = original.split('')
  const modifiedArray = modified.split('')

  const minLength = Math.min(originalArray.length, modifiedArray.length)

  for (let i = 0; i < minLength; i++) {
    if (originalArray[i] !== modifiedArray[i]) {
      return originalArray.length > modifiedArray.length
        ? originalArray[i]
        : modifiedArray[i]
    }
  }

  return originalArray.length > modifiedArray.length
    ? originalArray[minLength]
    : modifiedArray[minLength] || ''
}
