// import calcular from './buttons' // llama a la funcion default
import calcular, { multi, suma, resta, division } from './buttons.js'
// import calcular2, {multi as multi2, suma as suma2} from './file.js'
import datos from './datos.json' assert {type: 'json'} // importando desde un json
import { alumnos } from './datosNormales.js' // importando objetos desde otro js

document.addEventListener('DOMContentLoaded', () => {
/*   console.log(calcular(3, 4, '+'))
  console.log(multi(5, 7))
  console.log(suma(5, 7))
  console.log(resta(5, 7))
  console.log(division(5, 7)) */
  alumnos.forEach((dato) => console.log(dato))
  datos.forEach((dato) => console.log(dato))
})
