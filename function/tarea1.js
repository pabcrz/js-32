function saludar (name = 'amigo') {
  const greeting = `Hola ${name}, mucho gusto`
  return greeting
}

console.log(saludar())

let count = 0

function alterar () {
  count++
}

alterar()
alterar()
alterar()
console.log(count)

function parImpar (num) {
  let message
  if (typeof num !== 'number') {
    message = `${num} no es un numero`
    return message
  }

  if (num % 2 === 0) {
    message = `El numero ${num} es par`
    return message
  }
  message = `El numero ${num} es impar`
  return message
}

console.log(parImpar('23d4'))
