const myArray = [
  'Omar',
  'Denise',
  'Miguel',
  'Mario',
  'Eduardo',
  'Miguel',
  'Miguel',
  'Miguel',
  'Miguel'
]
const cosa = 'Miguel'
/* const search=(thing)=>thing===cosa */
// const found = cosas.filter((cosa)=>cosa===buscar)

const myfuncion = (array, callback) => {
  const newArray = []
  array.forEach((element) => {
    const exist = callback(element)
    if (exist) newArray.push(element)
  })
  return newArray
}
/* const search=(thing)=>thing===cosa */
console.log(myfuncion(myArray, (thing) => thing === cosa))
// console.log(myfuncion(myArray,search))
