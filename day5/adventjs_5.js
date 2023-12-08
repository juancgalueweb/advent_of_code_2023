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
  let lastChar = '.'

  for (let t = 1; t < time; t++) {
    if (t === 5) {
      road = road.replaceAll('|', '*')
    }

    const matches = road.match(/S[*.]/g)
    if (matches) {
      road = road.replaceAll(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }

    result.push(road)
  }

  return result
}

console.log(cyberReindeer(road, time))
