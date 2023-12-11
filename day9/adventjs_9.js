/* 
  Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

  Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

  Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

  adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
   -> 1 (cambias la cuarta luz a 🔴)

  adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
   -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

  adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
   -> 0 (ya están alternadas)

  adjustLights(['🔴', '🔴', '🔴'])
   -> 1 (cambias la segunda luz a 🟢)
*/

export function adjustLights(lights) {
  let option1 = 0
  const lightsCopy1 = [...lights]
  const lightsCopy2 = [...lights]
  let option2 = 0
  // recorro el arreglo de izquierda a derecha
  for (let i = 0; i < lights.length - 1; i++) {
    if (lightsCopy1[i] === lightsCopy1[i + 1]) {
      option1++
      lightsCopy1[i + 1] = lightsCopy1[i] === '🔴' ? '🟢' : '🔴'
    }
  }
  // recorro el arreglo de derecha a izquierda
  for (let i = lights.length - 1; i > 0; i--) {
    if (lightsCopy2[i] === lightsCopy2[i - 1]) {
      option2++
      lightsCopy2[i - 1] = lightsCopy2[i] === '🔴' ? '🟢' : '🔴'
    }
  }
  return Math.min(option1, option2)
}
