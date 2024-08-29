/* const numbers = [1, 2, 3, 4, 5]

console.log(numbers[4])
console.log(colors.indexOf('red'))

for (let i = 0; i < 10; i++) {
  console.log(i)
} */

/* const colors = ['green', 'white', 'red', 'blue']
let i = 0

while (i < colors.length) {
  console.log(colors[i])
  i++
}
console.log('--------------')

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

console.log('Hola...'.length) */

let cuentaAtras = 10
while (cuentaAtras >= 0) {
  console.log(`${cuentaAtras} segundos`)
  if (cuentaAtras === 0) console.log('¡Despegue! 🚀')
  cuentaAtras--
}
