document.addEventListener('DOMContentLoaded', () => {
  // const tituloId = document.getElementById('elementoId')
  // const tituloClass = document.getElementsByClassName('elementoClase')
  // const tituloAtributo = document.getElementsByTagName('p')

  // const titulo = document.querySelector('#elementoId')
  const p = document.querySelectorAll('div p')
  // console.log('tituloId', tituloId)
  // console.log('tituloId', tituloClass)
  // console.log('tituloId', tituloAtributo)
  // console.log('titulo Query', titulo)
  console.log('p:', p[0])
})

/* document.addEventListener('DOMContentLoaded', () => {
  const parrafos = document.querySelectorAll('p')
  parrafos.forEach((p, i) => {
    // p.innerHTML
    // p.innerText
    // p.innerHTML += i + 1
    const content = p.innerHTML
    if (content.includes('.')) p.innerHTML = '$ ' + content
  })
})
 */

/* a */
