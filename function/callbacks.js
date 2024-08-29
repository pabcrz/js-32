const imprimr = (message) => console.log(message)
const remplazaEspacio = (str) => str.replace(' ', '')
const convierteArray = (str) => str.split('')
const invierteArray = (array) => array.reverse()
const convierteString = (array) => array.join(' ')

const formato = (str, callback1, callback2, callback3, callback4, callback5) => {
  // const formatted = str.replace(' ', '').split('').reverse().join('-')
  const rE = callback1(str)
  const cA = callback2(rE)
  const iA = callback3(cA)
  const cS = callback4(iA)

  return callback5(cS)
}

formato('Hola mundo', remplazaEspacio, convierteArray, invierteArray, convierteString, imprimr)
