document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#crud')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const users = localStorage.getItem('users') ?? []

    const formData = new FormData(form)
    const entries = formData.entries()

    const data = Object.fromEntries(entries)
    data.languages = formData.getAll('languages')

    users.push(data)

    const jsonString = JSON.stringify(users)
    localStorage.setItem('users', jsonString)
  })
})
