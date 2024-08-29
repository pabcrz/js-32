/* eslint-disable no-unused-vars */
// function print (props) {
//   const { age, ...rest } = props
//   console.log(age, rest) // para extraer una propiedad del resto
// }

// print({
//   name: 'Eddy',
//   lastName: 'Perez',
//   age: 28,
//   gender: 'male',
//   geight: 1.67,
//   weight: '30kg'
// })

/* const sentimiento = 'felicidad'
if (sentimiento === 'enojo') console.log('estoy enojado...')
if (sentimiento === 'tristeza') console.log('estoy triste...')
if (sentimiento === 'felicidad') console.log('estoy feliz...')

if (sentimiento === 'enojo') console.log('estoy enojado...')
else if (sentimiento === 'tristeza') console.log('estoy triste...')
if (sentimiento === 'felicidad') console.log('estoy feliz...')
 */

// funcion normal
/* function imprimir () {
  console.log('imprimiendo... ')
}

// arrow function

const imprimir2 = () => {
  console.log('imprimiendo 2...')
}

imprimir()
imprimir2() */

function saludar1 (name = 'amigo') {
  const greeting = `Hola ${name}, mucho gusto!`

  return greeting
}

const saludar = (name = 'amigo') => {
  const greeting = `Hola ${name}, mucho gusto!`
  return greeting
}

console.log(saludar('Sam'))
