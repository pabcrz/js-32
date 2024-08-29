// 1. Dado un arreglo [1,2,3,4,5,6], retornar un nuevo arreglo que contenga como elementos, arreglos con la cantidad de elementos que indica el numero: ejemplo: [[1],[2,2],[3,3,3], ...]

/* const numerosAuto = Array(10).fill().map((element, index) => index + 1)
console.log(numerosAuto)

const resultado = numerosAuto.reduce((acc, current) => {
  const elementos = [current]
  for (let i = 1; i < current; i++) elementos.push(current)
  acc.push(elementos)
  return acc
}, [])

console.log(resultado) */

// 2. Crear una función que dado una array y un string devuelva los elementos del arreglo que contengan al string ejemplo: f('ma',['manzana','perro','marmota']) devuelve ['manzana','marmota']

const things = ['manzana', 'perro', 'marmota', 'mandarina', 'pera', 'naranja', 'carrera']
const search = 'er'

const content = (array, string) => {
  const include = array.filter((index) => index.includes(string))
  return include
}

console.log(content(things, search))
// 3. Dado un arreglo de calificaciones de un grupo, devolver el promedio de cada alumno ejemplo:

const alumnos = [
  {
    name: 'Pedro',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Angel',
    grades: [8, 9, 8, 8.5]
  },
  {
    name: 'Juan',
    grades: [8, 9, 8, 8.5]
  },
  {
    name: 'Kevin',
    grades: [8, 9, 8, 8.5]
  },
  {
    name: 'Andy <3',
    grades: [8, 9, 8, 8.5]
  }
]

/* const promedios = alumnos.map((alumno) => {
  let sumatoria = 0
  const gradesLength = alumno.grades.length

  alumno.grades.forEach(grade => {
    sumatoria = sumatoria + grade
  })
  const promedio = sumatoria / gradesLength
  const persona = {
    name: alumno.name,
    average: promedio
  }
  return persona
})

console.log(promedios) */

/* const promedios = alumnos.reduce((acc, alumno) => {
  const name = alumno.name
  const grades = alumno.grades

  const sumatoria = grades.reduce((acc2, curr2) => acc2 + curr2)

  const promedio = sumatoria / grades.length
  acc.push({
    name,
    average: promedio
  })
  return acc
}, [])

console.log(promedios) */
