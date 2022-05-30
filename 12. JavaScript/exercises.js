// Exercise

// 1. Declare one variable named weight

let weight

// 2. What kind of data is the variable above? - Undefined

console.log(typeof weight)

/*
  3. Declare one variable and asign values for every data:
    - name: String
    - age: Number (integer)
    - stars: Number (float)
    - isSubscribed: Boolean
*/
/*
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
 
//  5. Declare one array type variable, called students and assing to her no values, just the empty array.

let students = []

//  6. Reassign value to the above variable, put inside of her the student object of the 4th question. (Don't copy and paste the object, but use the criated object and insert him on array)

 students = [
  student,
  student2
] 

console.log(students)

// 7. Put on console the value of position zero of above array.

console.log(students[1])

// 8. Make a new student and put on position 1 of array student.

const student2 = {
  name: "Jhon",
  age: 32,
  weight: 89.6,
  isSubscribed: false
}

console.log(students)

/* 
  9. Without run the code, answer the browser answer of the code bellow and why. Afther that, run the code and see if you are right.

  console.log(a)
  var a = 1

  Answer = undefined. 
  It's because in the moment we run the console.log we dont have one variable declatered. Only if we up this variable above the console.log we will have the correctly answer, that is "1".
*/

var a = 1
console.log(a)
