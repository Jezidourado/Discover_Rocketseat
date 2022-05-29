// Exercise

// 1. Declare one variable named weight

// let weight

// 2. What kind of data is the variable above? - Undefined

// console.log(typeof weight)

/*
  3. Declare one variable and asign values for every data:
    - name: String
    - age: Number (integer)
    - stars: Number (float)
    - isSubscribed: Boolean

  let name: 'jeziDourado'
  let age: 25
  let stars: 4.87
  let isSubscribed: true
*/

/* 
  4. The sdudent variable above is what kind of data? = object

  4.1 Assign that variable the same properties and values of exercise 3

  4.2 Show on console the menssage:
  <name> with <age> years old weight <weigh> pounds.
*/

let student = {
    name: "Jeziel Dourado",
    age: 25,
    weight: 74.85,
    isSubscribed: true
  }

console. log(`${student.name} with ${student.age} years old weight ${student.weight} pounds.`)
