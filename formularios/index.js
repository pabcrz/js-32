document.addEventListener('DOMContentLoaded', () => {
  const crear = async () => {
    fetch(
      'https://api.restful-api.dev/objects',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Appleeeeee',
          data: {
            year: 20001,
            price: 204999.55,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
            color: 'red'
          }
        })
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  const actualizar = async () => {
    fetch(
      'https://api.restful-api.dev/objects/ff8081818e21ce2d018e645eae1e5087',
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Honor',
          data: {
            year: 20001,
            price: 204999.55,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
            color: 'red'
          }
        })
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  const borrar = async () => {
    fetch(
      'https://api.restful-api.dev/objects/ff8081818e21ce2d018e644043e0506f',
      {
        method: 'DELETE'
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
  }
  // crear()
  actualizar()
  // borrar()
})
