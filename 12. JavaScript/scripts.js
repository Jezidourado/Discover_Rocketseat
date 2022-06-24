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
/*
var name

name = 'Jeziel'

console.log(typeof name)

let word = 'Paralelepipedo'
console.log(word.length)

let number = 1234
console.log(String(number).length)

let number = 312.365448162
console.log(number.toFixed(2).replace(".",","))

let word = "Programar é muito bacana"
console.log(word.toUpperCase())

let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("amor"))

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split("o")
console.log(myArray)

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

console.log(["a","b","c"].length)

console.log([
  "a",
  {type: "Array"},
  function () {return "alo"},
][2])

let word = "pneumologista"
console.log(Array.from(word))

let techs = ["html", "css", "js"]
techs.push("nodejs")
techs.unshift("sql")

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)
// console.log(techs)

let increment = 0
console.log(++increment)
*/
let one = 1
let two = 2
console.log(two == 1)
console.log(one == 1)