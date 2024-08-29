// 1. Crear una función que reciba un arreglo y lo regrese en orden invertido.

/* const array1 = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
const invertirArreglo = () => console.log(array1.slice().reverse())
invertirArreglo(array1) */

// if (array.lenght > 0)
// 2. Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo.

const numbers = [123, 232, 535, 664, 132, 763, 634, 535]
const masGrande = () => {
  const numbersSort = numbers.sort((a, b) => a - b) // compara los numeros internamente
  return numbersSort // tambien se puede imprimir la posicion del array
}
console.log(masGrande(numbers))

const masGrande1 = (numbers) => Math.max(...numbers)
console.log(masGrande1(numbers))

// 3. Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

/* const arrayStr = ['hola', 'uno', 'cincuenta', 4345, 3445]
const str = 'cincuenta'

const seEncuentra = () => {
  const elemento = (element) => element === str
  return arrayStr.some(elemento)
}
console.log(seEncuentra(arrayStr)) */

// 4. Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros.

const buscar = 'perro'
const animals = ['perro', 'gato', 'caballo', 'perro']
const found = animals.filter((animal) => (animal === buscar))

const apariciones = (elementos) => `${buscar} se encontro ${found.length} ${found.length > 1 ? 'veces' : 'vez'} en ` + animals

console.log(apariciones(animals))
// 5. Crear una Función que suma 2 números y regrese el resultado

/* const sum = (a, b) => a + b
console.log(sum(2, 3)) */
