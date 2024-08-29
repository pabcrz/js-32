const colors = ['green', 'white', 'red', 'blue']
// push => agrega al final
// unshift => agrega al inicio

// pop => quita el último
// shift => quita el primero
console.log(colors)
colors.push('black') // agrega elemento al final del array
console.log(colors)
colors.pop() // elimina el ultimo elemento de mi array y puedo guardarlo en una varibale
console.log(colors)
colors.shift() // elimina el primer elemento del array y lo puede asignar a una variable
console.log(colors)
colors.unshift('violet') // agrega elemento al principio del array
console.log(colors)

/* const things = ('house', 'tv', 'tablet', 'desk')
console.log(things.split(' ')) */

// console.log(colors.join()) // convierte un array en string

/* const copia = colors.slice(1, 3) // slice devuelve una copia del array dentro de un nuevo array
console.log(copia)

// splice modifica el array original
colors.splice(3, 0, 'yellow') // posición, agrega, 'elemento'
console.log(colors)

colors.splice(1, 1, 'brown') // posición, remplazo, 'elemento'
console.log(colors)

const indice = colors.indexOf('red') // retorna la posicion del elemento en el array y si no esta retonra -1
if (indice >= 0) console.log(indice)
else console.log('no es encontro ningun elemento')

console.log(colors.includes('yellow')) */

// hack para crear un array con 100 numeros aleatorios
const numerosAuto = Array(100).fill().map((element, index) => index + 1)
console.log(numerosAuto)

const resultado = numerosAuto.reduce((acc, current) => {
  acc.push(`${current} ${current * current}`)
  return acc
}, [])

console.log(resultado)
