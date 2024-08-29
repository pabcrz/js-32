/* eslint-disable dot-notation */
const person1 = {
  name: 'Pablo',
  age: 23,
  height: 1.67,
  gender: 'male',
  alive: true,
  foodType: ['frutas', 'verduras', 'cereales', 'carne'],
  eyes: {
    color: 'brown',
    shpae: 'medium'
  },
  sleep: function () {
    console.log('Estoy durmiendo...')
  },
  eat: function () {
    console.log('Estoy comiendo...')
  },

  propiedadInventada: 'todo bien',
  '45_propiedad-Inventada': 'todo mal'
}

const person2 = {
  name: 'Juan',
  age: 23,
  height: 1.67,
  gender: 'male',
  alive: true,
  foodType: ['frutas', 'verduras', 'cereales', 'carne'],
  eyes: {
    color: 'brown',
    shpae: 'medium'
  },
  sleep: function () {
    console.log('Estoy durmiendo...')
  },
  eat: function () {
    console.log('Estoy comiendo...')
  },

  propiedadInventada: 'todo bien',
  '45_propiedad-Inventada': 'todo mal'
}

console.log('forma 1', person1.name)
console.log('forma 2', person1['name'])
person1.sleep()

console.log('forma 1', person2.name)
console.log('forma 2', person2['name'])
