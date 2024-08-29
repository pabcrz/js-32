// Se puede exportar por default y por nombre
// Solo se puede una por default
export const suma = (a, b) => a + b
export const resta = (a, b) => a - b
export const multi = (a, b) => a * b
export const division = (a, b) => a / b

export default (a, b, operation) => {
  let res = 0
  if (operation === '+') res = suma(a, b)
  if (operation === '-') res = resta(a, b)
  if (operation === '*') res = multi(a, b)
  if (operation === '/') res = division(a, b)

  return res
}
