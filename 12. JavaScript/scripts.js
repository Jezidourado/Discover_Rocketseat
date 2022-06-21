/* function createPhrases() {
  console.log('Study is very good')
  console.log('Patience and persistence')
  console.log('Review is the mother of learning')
}

createPhrases()


const sum = function (number1, number2){
  let total = number1 + number2
  return total
}

// arguments
let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)



// function is a blender

function makeJuice(fruit1, fruit2) {
  return 'juice of: ' + fruit1 + fruit2
}

const copo = makeJuice('banana', 'apple')

console.log(copo)



let subject

function createThink() {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)



// function hoisting

sayMyName()

function sayMyName() {
  console.log('Jeziel')
}

// function hoisting

sayMyName()

const sayMyName = function() {
  console.log('Jeziel')
}


// arrow function

const sayMyName = () => {
  console.log('Jeziel')
}

sayMyName()




// callback function


function sayMyName(name) {
  console.log('before execute the function callback')

  name()

  console.log('after execute the function callback')
}

sayMyName(
  () => {
    console.log('I am in a callback')
  }
)



// function constructor

function Person(name) {
  this.name = name
}

const joao = new Person("Joao")
const mary = new Person("Mary")
console.log(joao)
console.log(mary)



function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " is walking"
  }
}

const joao = new Person("Joao")
const mary = new Person("Mary")
console.log(joao.walk())
console.log(mary.walk())

*/

{}