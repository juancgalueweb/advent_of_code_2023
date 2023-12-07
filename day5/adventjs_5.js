/*
  Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. 
  La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. 
Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. 
Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y 
devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/

const road = 'S..|...|..'
const time = 10

function cyberReindeer(road, time) {
  const result = [road] // Estado inicial de la carretera

  for (let t = 1; t < time; t++) {
    // Creamos una copia del estado actual de la carretera para modificarla
    const currentRoad = result[result.length - 1].split('')

    // Verificamos y actualizamos el estado de las barreras
    if (t === 5) {
      for (let i = 0; i < currentRoad.length; i++) {
        if (currentRoad[i] === '|') {
          currentRoad[i] = '*' // Abrimos la barrera
        }
      }
    }

    // Movemos el trineo a la derecha
    const sledIndex = currentRoad.indexOf('S')
    const nextIndex = (sledIndex + 1) % currentRoad.length

    if (currentRoad[nextIndex] === '|' && t <= 5) {
      // Si hay una barrera cerrada, el trineo se detiene
      currentRoad[sledIndex] = 'S'
    } else {
      // Si no, el trineo avanza
      // Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
      if (currentRoad[nextIndex] === '*' || currentRoad[nextIndex] === '|') {
        console.log('currentRoad[sledIndex]', currentRoad[sledIndex], sledIndex)
        console.log('currentRoad[nextIndex]', currentRoad[nextIndex], nextIndex)
        currentRoad[sledIndex] = currentRoad[nextIndex + 1]
        currentRoad[nextIndex + 1] = 'S'
      } else {
        currentRoad[sledIndex] = currentRoad[nextIndex]
        currentRoad[nextIndex] = 'S'
      }
    }

    // Guardamos el estado actual de la carretera en el resultado
    result.push(currentRoad.join(''))
  }

  return result
}

console.log(cyberReindeer(road, time))
