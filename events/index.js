document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn-event')

  //                          regresa todas las opciones del evento
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Hola perrin, esto es un clic')
  })
})
