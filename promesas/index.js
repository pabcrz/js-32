/* eslint-disable no-unused-vars */
document.addEventListener('DOMContentLoaded', () => {
  const solicitarDatos = async () => {
    const container = document.querySelector('#container')

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((res) => res.json())
    console.log(response)

    response.forEach((element) => {
      const cardUL = document.createElement('ul')
      cardUL.classList.add('card')
      const titleLI = document.createElement('li')
      titleLI.classList.add('title')
      const bodyLI = document.createElement('li')
      bodyLI.classList.add('body')
      const dataUL = document.createElement('ul')
      dataUL.classList.add('data')
      const item = document.createElement('li')
      item.classList.add('itemID')
      const user = document.createElement('li')
      user.classList.add('userID')

      titleLI.textContent = `# ${element.title}`
      bodyLI.textContent = `Body: ${element.body}`
      item.textContent = `ID: ${element.id}`
      user.textContent = `User ID: ${element.userId}`

      container.append(cardUL)
      cardUL.append(titleLI)
      cardUL.append(bodyLI)
      bodyLI.append(dataUL)
      dataUL.append(item)
      dataUL.append(user)
    })
    return response
  }
  solicitarDatos()
})

/*
  appendChild(li)
  appedChild(li)
  li.appendChild(ul)
*/
