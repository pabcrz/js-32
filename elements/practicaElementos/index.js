/* eslint-disable no-unused-vars */
document.addEventListener('DOMContentLoaded', () => {
  /* const container = document.querySelector('body')

  // aqui se crea y se configura el boton
  const btn = document.createElement('a')
  btn.textContent = 'Iniciar sesion'
  btn.style.backgroundColor = 'black'
  btn.style.color = 'white'
  btn.style.borderRadius = '5px'
  btn.style.padding = '8px'
  btn.style.border = 'dashed 2 px'

  btn.setAttribute('href', '/iniciarSesion.html')
  console.log('this is a button', btn)
  // aqui termina el boton

  container.append(btn) */

  const container = document.querySelector('body')
  const nav = document.createElement('div')
  nav.classList = 'contenedor-de-botones'

  container.append(nav)

  const createBtn = ({ background = 'purple', color = 'white', url = '#', text = '...' }, box) => {
    const btn = document.createElement('a')
    btn.classList.add('btn')

    btn.style.backgroundColor = background
    btn.style.color = color

    btn.textContent = text
    btn.setAttribute('href', url)

    box.append(btn)
  }

  createBtn({}, nav)
  createBtn({ text: 'Boton Auto', background: 'black' }, nav)

  /* const padre = document.querySelector('.padre')
  const hijo = document.querySelector('.hijo')

  setTimeout(() => {
    hijo.remove()
    padre.removeChild(hijo)
  }, 4000) */
})
