/** 1. Función que recibe una fecha y devuelve la cantidad de minutos, segundos, días, meses y años que han pasado desde la fecha proporcionada hasta "hoy" */

const diferenciaFechas = (fecha) => {
  const fechaActual = new Date()
  const fechaProporcionada = new Date(fecha)
  const diferencia = fechaActual - fechaProporcionada

  const segundos = Math.floor(diferencia / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)
  const meses = Math.floor(dias / 30)
  const años = Math.floor(meses / 12)

  return {
    años: años,
    meses: meses,
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  }
}

const fecha = '2024-05-08'
const diferencia = diferenciaFechas(fecha)
console.log(
  `Han pasado: ${diferencia.años} años con ${diferencia.meses} meses con ${diferencia.dias} días con ${diferencia.horas} horas con ${diferencia.minutos} y ${diferencia.segundos} segundos.`
)
