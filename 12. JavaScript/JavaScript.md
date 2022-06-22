# JavaScript

* Linguagem de programação que roda no Navegador do usuário (front-end)
  * Ao clicar em um botão e aparecer uma janela, está acontecendo uma ação em JavaScript
  * ALteração do site ou aplicativo, conforme a interação do usuário
* Roda também no computador (back-end)

## O que podemos fazer com JavaScript?

* Criar aplicações web, mobile (react Native), desktop (Electron)

* Empresas famosas que usam: Facebook (Instagram, Whatsapp), Google (Youtube, Gmail, Drive), Uber, Netflix, Tiktok.
* 99,99% dos sites na web usam JavaScript
* Linguagem obrigatória para quem programa o Front-end Web.

## Evolução

* A comunidade cresce cada vez mais e a linguagem está sempre evoluindo

## O que vamos ver?

- Tipos de dados
- Variáveis
- Funções
- Condicionais
- Estruturas de repetição
...

## A importância da Sixtaxe

* Toda linguagem tem sintaxe (maneira correta de se escrever)
* Uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes de programação

## Comentários no JS

// comentário em linha

/* comentário em 
bloco */

## Tipos de dados

Conforme o ECMAScript standard (orgão que padroniza o JavaScript) temos 9 tipos de dados.

* Data types
  * Primitive / Primitive value
  * Structural
  * Structural Primitive

### Primitivos

- String
- Number
- Boolean
- Undefined
- Symbol
- BigInt

### Estruturais

- Object
  - Array
  - Map
  - Set
  - Date
  - ...
- Function

### Primitivo Estrutural / Structural Root Primitive

- null

## String

String é uma cadeia de caracteres.

Usa-se um dos 3 exemplos abaixo:

"" - aspas duplas
'' - aspas simples
`` - template literals ou template strings (duas crases). Permite multilinhas e cálculo de valores

## Number

33 - inteiros
12.4 - reais / float
NaN - Not a Number
Infinity - infinito

## Boolean

Tipo de dado que tem dois valores. TRUE or FALSE

## Undefined e Null

> Undefined 
- indefinido
- não existe

> Null 
- nulo
- objeto que existe mas não possui nada dentro
- diferente de indefinido

## Object

> Object
- Objeto
- Propriedades / Atributos
- Funcionalidades / Métodos

{ propriedade: "valor"}

Ex.:

```js
console.log({
  name: "Jeziel",
  age: 25,
  andar: function() {
    console.log("andar")
  }
})
```

## Arrays (vetores)

É um grupamento de dados.

Usa-se []

```js
console.log([
  "Leite",
  "Ovos",
  2,
  3
])
```

## Variáveis

- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável
  - **var**
  - **let**
  - **const** - é constante, não muda.

  Exemplo de uma variavel var

```html
<script>

  var clima = "Quente"
  clima = "Frio"

  console.log(clima)

</script>
```

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

Ex. de uma variável fortemente tipada:

```html
<script>

  let clima: String
// preciso dizer que é uma string, ou number...
  console.log(clima)

</script>
```

```html
<script>

  let clima: ""
// o JS já entende que é uma string só pelo ""
  console.log(clima)

</script>
```

## Scope (escopo)

- O escopo determina a visibilidade de alguma variável no JS

## Block statement (declaração de bloco)

{
  var = x
}

```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco também criará um novo escopo, chamamos de `block-scoped`

## scope var

```js
// var é global e local

console.log('> existe x antes do bloco?', x)

{
    var x = 0
} 

console.log('> existe x depois do bloco?', x)

```

Ao rodar este código, temos a seguinte resposta :

> existe x antes do bloco? undefined
> existe x depois do bloco? 0

Ou seja, a variável **var** x existe antes do bloco {}, porém ainda não há um valor definido. Após o bloco ela existe e tem valor definido.
Isso ocorre pois debaixo dos panos o JS sobe a variável **var** para cima do primeiro console.log, mesmo que sem um valor definido.

Isso faz com que a variável **var** seja uma variável perigosa de se usar, justamente por conta de seu dinamismo.

## scope let e const

let e const são locais e só funcionam no escopo onde foram criados.

### let

```html
<script>
console.log('> existe x antes do bloco?', x)
{
    let x = 0
} 
</script>
```

Ao rodar este código, temos a seguinte resposta: 
Uncaught ReferenceError: x is not defined at scripts.html:13:47
**Erro de referência**

```html
<script>
  {
  console.log('> existe x antes?', x)
    let x = 0
} 
</script>
```
Ao rodar este código, temos a seguinte resposta: 
scripts.html:13 Uncaught ReferenceError: Cannot access 'x' before initialization at scripts.html:13:36
**Sabe que tem variável mas não encontrou pois está depois do comando**

```html
<script>
  {
    let x = 0
    console.log('> existe x?', x)
} 
console.log('> existe x depois do bloco?', x)
</script>
```
Ao rodar este código, temos a seguinte resposta: 
existe x? 0
Uncaught ReferenceError: x is not defined at scripts.html
**Variável encontrada apenas para o primeiro console.log**

```html
<script>
  {
    let x = 0
    console.log('> existe x?', x)
} 
</script>
```
Ao rodar este código, temos a seguinte resposta: 
existe x? 0
**Variável encontrada**

```html
<script>
  let x = 1;
  {
    let x = 0
    console.log('> existe x?', x)
} 
console.log('> existe x depois do bloco?', x)
</script>
```
Ao rodar este código, temos a seguinte resposta: 
existe x? 0
existe x depois do bloco? 1
**São escopos diferentes, fora e dentro do bloco**

```html
<script>
  let x = 1;
  {
    x = 0
    console.log('> existe x?', x)
} 
console.log('> existe x depois do bloco?', x)
</script>
```
Ao rodar este código, temos a seguinte resposta: 
existe x? 0
existe x depois do bloco?0
**Neste caso o valor da variável foi atualizado no segundo escopo, e sempre prevalece o valor do escopo mais alto**

### const

- Uma constante é CONSTANTE
- Não podemos atualizar valores de uma variável const.

```html
<script>
  const x = 1;
  {
    x = 0
    console.log('> existe x?', x)
} 
console.log('> existe x depois do bloco?', x)
</script>
```
Ao rodar este código, temos a seguinte resposta: 
scripts.html:14 Uncaught TypeError: Assignment to constant variable at scripts.html
**Erro por conta de mais de um valor para uma constante**

```html
<script>
  const x = 1;
  {
    const x = 0
    console.log('> existe x?', x)
} 
console.log('> existe x depois do bloco?', x)
</script>
```
Ao rodar este código, temos a seguinte resposta: 
existe x? 0
existe x depois do bloco? 1
**Neste caso obtivemos sucesso, pois há duas constantes em escopos separados**

## Criando nomes

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode ("", ´, `, ...)

> Posso:
  - Iniciar com esses caracteres especiais: $ _
  - Iniciar com letras
  - Colocar acentos
  - Letras maísculas e minúsculas fazem diferença

Exemplo:

```html
<script>
  let Feijão = Feijão;
  let feijão = feijão;
  let Feijao = Feijao;
  let feijao = feijao;
</script>
```

Cada uma dessas variárveis é diferente, por conta de suas especificidades de letras maísculas e acentuações.

> Não posso:
  - Iniciar com números
  - Colocar espaços vazios no nome

Exemplo:

```html
<script>
  let meu nome é = "Jeziel" // não fazer
  console.log(meu nome é)
</script>
```

```html
<script>
  let meu_nome_é = "Jeziel" // correto
</script>
```

> Ideal:
  - Criar nomes que fazem sentido
  - Que explique o que a variavel é ou faz
  - camelCase: ao invésde colocar espaços na variável, escrever tudo junto com a primeira letra da próxima palavra em maísculo: myNameIsJeziel. A primeira palavra sempre em minusculo.
  - snake_case: usa _ ao invés de espaços entre as palavras: my_name_is_Jeziel
  - Escrever em inglês

## Declaration assignment var

```html
  <script>
    // declaration
    var name

    // assignment value (atribuição de valores)
    name = 'Jeziel'

    // what kind of data was put in the var
    console.log(typeof name)
  </script>
  ```
Browser return - string

When we want discovery the type of data we type "typeof" and the name of var, like above. The browser answear is "string" in that case.

## Grouping statements (agrupando declarações)

```html
<script>
    var name
    name = 'Jeziel'

    let age, isHuman
    age = 25
    isHuman = true
    console.log(name, age, isHuman)
</script>
```

Return from browser - Jeziel 25 true

## concatenating and interpolating variables

### concatenating

We can contacting variables when we need write some code with variables or variables and text, like bellow.

```html
  <script>
    var name
    name = 'Jeziel'

    let age, isHuman
    age = 25
    isHuman = true

    // multiple arguments on the function
    // console.log(name, age, isHuman)
    // writing of text + variables
    // Contacting variables

    // bellow we want have the value "The Jeziel have 25 yers"
    console.log('The ' + name + ' have ' + age + ' years old.')
  </script>
  ```

Return from browser - "The Jeziel have 25 years old."

With this code, we can change the variables values and the console.log will automatically change

### Interpolating

The interpolating have the same function, but with differents commands.

```html
  <script>
    var name
    name = 'Jeziel'

    let age, isHuman
    age = 25
    isHuman = true

    // multiple arguments on the function
    // console.log(name, age, isHuman)
    // writing of text + variables
    // contacting variables

    // bellow we want have the value "The Jeziel have 25 yers"
    console.log(`The ${name} have ${age} years old.`)
  </script>
  ```
  Return from browser - "The Jeziel have 25 years old."

IMPORTANT: to interpolating we have to use the `` between the sentence.

## Object

We can created objects with a pack of data, like bellow:
In that case, the object is called "person"

```html
<script>
    const person = {
      name: 'Jhon',
      age: 30,
      weight: 89.5,
      isAdmin: true
    }
    console.log(`${person.name} has ${person.age} years old and weight ${person.weight} pounds.`)
</script>
```
Return from browser - Jhon has 30 years old and weight 89.5 pounds.

## Arrays

We also can access values inside the array:

```html
  <script>
    const animals = [
      'Lion',
      'Monkey',
      'Elephant',
      'Skane'
    ]
    console.log(animals)
  </script>
  ```
Return from browser - ['Lion', 'Monkey', 'Elephant', 'Skane']
                      0: "Lion"
                      1: "Monkey"
                      2: "Elephant"
                      3: "Snake"
                      lenght: 4

The browser enumerate the values starting from '0' and says on "lenght" the number os values we have.

Using that proprierties, we can ask for values.
Asking for "Elephant" value:

```html
  <script>
    const animals = [
      'Lion',
      'Monkey',
      'Elephant',
      'Skane'
    ]
      
    console.log(animals[2])
  </script>
```
Return from browser - Elephant

## Exercises 

> 1. Declare one variable named weight

```js
let weight
```

> 2. What kind of data is the variable above? - Undefined

```js
console.log(typeof weight)
```
> 3. Declare one variable and asign values for every data:
    - name: String
    - age: Number (integer)
    - stars: Number (float)
    - isSubscribed: Boolean

```js
  let name: 'jeziDourado'
  let age: 25
  let stars: 4.87
  let isSubscribed: true
```
 
> 4. The sdudent variable bellow is what kind of data? = object

  > 4.1 Assign that variable the same properties and values of exercise 3

  > 4.2 Show on console the menssage:

    <name> with <age> years old weight <weigh> pounds.

```js
let student = {
    name: "Jeziel Dourado",
    age: 25,
    weight: 74.85,
    isSubscribed: true
  }

console. log(`${student.name} with ${student.age} years old weight ${student.weight} pounds.`)
```

> 5. Declare one array type variable, called students and assing to her no values, just the empty array.

```js
let students = []
```

> 6. Reassign value to the above variable, put inside of her the student object of the 4th question. (Don't copy and paste the object, but use the criated object and insert him on array)

```js
 students = [
  student
  student2
] 

console.log(students)
```

> 7. Put on console the value of position zero of above array.

```js
console.log(students[0])
```

> 8. Make a new student and put on position 1 of array student.

```js
const student2 = {
  name: "Jhon",
  age: 32,
  weight: 89.6,
  isSubscribed: false
}

console.log(students)
```

> 9. Without run the code, answer the browser answer of the code bellow and why. Afther that, run the code and see if you are right.

```js
  console.log(a)
  var a = 1

// Answer = undefined. 
// It's because in the moment we run the console.log we dont have one variable declatered. Only if we up this variable above the console.log we will have the correctly answer, that is "1", like bellow.

var a = 1
console.log(a)
```

## Functions

One function have the objective to save one group of code to reuse this code in futures aplications.

Ex.:
Lets created one application of motivational phrases:

```js
  console.log('Study is very good')
  console.log('Patience and persistence')
  console.log('Review is the mother of learning')
  ```

  If we run this codes on browser, we will have the answears, but we can't use in other aplications.

  So, we have to save this information before, with function statments:

```js
  function createPhrases() {
  console.log('Study is very good')
  console.log('Patience and persistence')
  console.log('Review is the mother of learning')
}
```

The JS will save this function on his memory. The shortcut to this function is the name of her "createPhrases()".

```js
createPhrases()
```

When we run this shortcut, we have the answer:

- Study is very good
- Patience and persistence
- Review is the mother of learning

# Arguments and parameters

Parameters is the function itself. Arguments are the data for those parameters defined before (or after).

Ex.:

```js
// parameters
const sum = function(number1, number2) {
      console.log(number1 + number2)
}

// arguments
sum(2, 3)
// Browser answer = 5
```

If we put the console.log outside the {} of "parameters" will happened an error of reference.

## Returning values into the function

```js
const sum = function(number1, number2) {
      console.log(number1 + number2)
}

// arguments
let number1 = 34
let number2 = 25

console.log(`the number 1 is ${number1}`)
console.log(`the number 2 is ${number2}`)
console.log(`the sum is ${sum(number1, number2)}`)
```

The browser answer  - the number is 34
                    - the number is 25
                    - 59
                    - the sum is undefined

This way we don't have the correct answer.

The expression above happened because when the browser find the last console.log, he return (under the cloths) first the sum (59), and after calculate the function "the sum is...", without the result.

To correct this error, we criated one variable "total" that will receive the function (number1 + number2) and will return the expression inside the console.log, like bellow.

```js
const sum = function(number1, number2) {
  let total = number1 + number2
      return total
}

// arguments
let number1 = 34
let number2 = 25

console.log(`the number 1 is ${number1}`)
console.log(`the number 2 is ${number2}`)
console.log(`the sum is ${sum(number1, number2)}`)
```

The browser answer  - the number is 34
                    - the number is 25
                    - the sum is 59

Is very important never forgot to use one variable before some data, in this case the "let total". That situation can caused a big problem in the  future.

## Another way to understand functions

Lets make a juice

```js
// function is a blender (liquidificador)

function makeJuice(fruit1, fruit2) {
  return 'juice of: ' + fruit1 + fruit2
}

const copo = makeJuice('banana', ' apple')

console.log(copo)
```

Browser return: juice of: banana apple

## Function scope

```js
let subject

function createThink(subject) {
  return subject
}

console.log(subject)
console.log(createThink(subject))
```
Browser return: Undefined
                Undefined

In that case we dont specify a value to the variable, so he dont have any data to be showed on the console.

```js
let subject = 'create video'

function createThink(subject) {
  return subject
}

console.log(subject)
console.log(createThink(subject))
```
Browser return: create video
                create video

Here the variable was specify, and we have one positive return.

```js
let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))
```
Browser return: create video
                study

Now we have one value to the function variable. Only the console.log function's will received the value 'study'. In that case we have an separation of data. The 1st console,log is referent to the 'let' variable. 
It's means that is thwo diferents scopes.

Doesn't metters if we inverter the console.log, we will have the same answer, but inverted.

```js
let subject = 'create video'

function createThink() {
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)
```
Browser return: study
                study

But, if we inverted the console.log and not specify the variable on the function, the JS will read the 1st console.log, return the subject on the function ('study') and make the next console.log like the function.

```js
let subject

function createThink() {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)
```
Browser return: undefined
                study
                study

In the example above, we dont specify the value of the 1st variable and the function variable. So, the 1st console.log is undefined, the 2nd create a think and return the subject 'study', and the 3rd repeat the previows subject 'study'.

## Function hoisting (elevação)

```js
sayMyName()

function sayMyName() {
  console.log('Jeziel')
}
```
Return - Jeziel

Here hapened a function hoisting, it means that the JS run (under the cloths) the function parameters and after run the function sayMyName()
Is like the JS have this behavior:
```js
function sayMyName() {
  console.log('Jeziel')
}

  sayMyName()
```

In the other hand, the hoisting doesn't happend when we have one variable before the function, like bellow:

```js
sayMyName()

const sayMyName = function() {
  console.log('Jeziel')
}
```
Browser answer - Uncaught ReferenceError: Cannot access 'sayMyName' before initialization.

Using let or var the same error apears. Because the function was not specify yet.

## Arrow function

=> arrow

It is the other way to write function, letting the code more clean.

```js
const sayMyName = () => {
  console.log('Jeziel')
}

sayMyName()
```
Return - Jeziel

Using the arrow function, we dont need write the word "function".

## Callback function

We can criated 2 or more functions and callback (chamar de volta) one function inside the other, like bellow:

```js
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
```
Return -  before execute the function callback
          I am in a callback
          after execute the function callback

Resume: 
- The JS run the 1st console.log;
- Run the function 'name', that have a callback
- Run the 2nd console.log

## Function constructor

- expression new
- criated a new object
- this keyword

```js
function Person(name) {
  this.name = name
}

const joao = new Person("Joao")
const mary = new Person("Mary")
console.log(joao)
console.log(mary)
```
Return -  Person {name: 'Joao'}
          Person {name: 'Mary'}

The expression new is an construction function, and will return a new object.

So, the object "Person" has a propertie "name".

We also can put others functions inside the object:

```js
function Person(name) {
  this.name = name
  this.walk = function() {
    return "walking"
  }
}

const joao = new Person("Joao")
const mary = new Person("Mary")
console.log(joao.walk())
console.log(mary.walk())
```
Return -  walking
          walking


Let's have a full prhase with the function:

```js
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
```
Return -  Joao is walking
          Mary is walking

# Manipulating data

## Prototype

__proto__

Protótipo. Prototype is something thas was created before.

JavaScript is an language based in prototypes. 

Ex.: If we wanted count how many letters have in one word, we need created an formule or tag to count this letters. But the JavaSctipt already have (under the cloths) prototypes (called prototype chain) taht can bring this information to us, automaticly.

When we created any code on JS, like an object, the JS have a list of prototype, like bellow:

```js
{} //object
```
Return - {}
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

Example whit an String:

.__proto__ will bring all possibilities of data we can bring to our code as prototype.

```js
"Jeziel".__proto__
```
Return - 
      String {'', constructor: ƒ, anchor: ƒ,   big: ƒ, blink: ƒ, …}
      anchor: ƒ anchor()
      at: ƒ at()
      big: ƒ big()
      blink: ƒ blink()
      bold: ƒ bold()
      charAt: ƒ charAt()
      charCodeAt: ƒ charCodeAt()
      codePointAt: ƒ codePointAt()
      concat: ƒ concat()
      constructor: ƒ String()
      endsWith: ƒ endsWith()
      fixed: ƒ fixed()
      fontcolor: ƒ fontcolor()
      fontsize: ƒ fontsize()
      includes: ƒ includes()
      indexOf: ƒ indexOf()
      italics: ƒ italics()
      lastIndexOf: ƒ lastIndexOf()
      length: 0
      link: ƒ link()
      localeCompare: ƒ localeCompare()
      match: ƒ match()
      matchAll: ƒ matchAll()
      normalize: ƒ normalize()
      padEnd: ƒ padEnd()
      padStart: ƒ padStart()
      repeat: ƒ repeat()
      replace: ƒ replace()
      replaceAll: ƒ replaceAll()
      search: ƒ search()
      slice: ƒ slice()
      small: ƒ small()
      split: ƒ split()
      startsWith: ƒ startsWith()
      strike: ƒ strike()
      sub: ƒ sub()
      substr: ƒ substr()
      substring: ƒ substring()
      sup: ƒ sup()
      toLocaleLowerCase: ƒ toLocaleLowerCase()
      toLocaleUpperCase: ƒ toLocaleUpperCase()
      toLowerCase: ƒ toLowerCase()
      toString: ƒ toString()
      toUpperCase: ƒ toUpperCase()
      trim: ƒ trim()
      trimEnd: ƒ trimEnd()
      trimLeft: ƒ trimStart()
      trimRight: ƒ trimEnd()
      trimStart: ƒ trimStart()
      valueOf: ƒ valueOf()
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object
      [[PrimitiveValue]]: ""

## Using the prototype

```js
"Jeziel".length
```

Return - 6

Here, to count how many letters I have in the word "Jeziel", is just put the .length on front, and we will have the return "6".

## Type conversion (typecasting) vs Type coersion

- Type coersion - It's up to JS change the kind of data  to make senses to the code. In that case, the JS concatenated the string and the number, and joined the both data, returning "95".

```js
console.log('9' + 5)
```
Return - 95

- Type conversion - It's up to user change one kind of data to make senses to the code. In that case 

```js
console.log(Number('9') + 5)
```
Return - 14

## Strings in numbers

We can manipulate strings and number transforming strings in number and numbers in strings, like bellow:

```js
let string = "123"
console.log(Number(string))
```
Browser return - 123

```js
let number = 321
console.log(String(number))
```
Browser return - 321

### Counting chacacters and digits

Lets count how many chatacters have an word and how many digts have an number:

```js
let word = "Paralelepipedo"
console.log(word.length)
```
Console - 14

```js
let number
console.log(number.length)
```
Console - Error

This error apears because the number doesn't receive lenght. But we can solve this error by transforming the number in string, like bellow:

```js
let number = 1234
console.log(String(number).length)
```
Console - 4

IMPORTANT: The function name bellow "String" have to start with the first letter uppercase. If we write in lowercase "string" we will have an error.

## Decimal numbers

> Transforming an broken number (decimal) with 2 decimal places and change dot by comma (vírgula).

First, lets transforming an broken number (decimal) with 2 decimal places.

```js
let number = 312.365448162
console.log(number.toFixed(2))
```

Console - 312.37

Now, lets change dot by comma

```js
let number = 312.365448162
console.log(number.toFixed(2).replace(".",","))
```

Console - 312,37

In the last code, the object number was transforming in a string using "toFixed". And the "replace" change the dot by comma.
If we dont have change the number by string, the console will show an error, because one number can't have an "," in his function.

## Uppercase and Lowercase

Transform lowercase letters in uppercase. Do the opposit too.

```js
let word = "Programar é muito bacana"
console.log(word.toLowerCase())
```
Console - programar é muito bacana

```js
let word = "Programar é muito bacana"
console.log(word.toUpperCase())
```
Console - PROGRAMAR É MUITO BACANA

## Find words in phrases

> Verified if the text contain the word "Amor".

For this question we will use the "includes". He returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

```js
let phrase = "Eu quero viver o amor"
console.log(phrase.includes("Amor"))
```
Console - false

The console return show false because the phrase.includes is case sensitive, that means he make difference between uppercase and lowercase. In that case we dont have the word "Amor", only "amor".

```js
let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))
```
Console - true

## Separating strings

> Separate one text that contain spaces in a new array, where each word is one array position. After that, transform the array in one text and where was spaces, put _.

For this question, firts we will use the "split". 
Split = Split a string into substrings using the specified separator and return them as an array.

```js
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)
```
Console - (5) ['Eu', 'quero', 'viver', 'o', 'amor!']

    THAT IS CORRECT. We separate the words by spaces. 

    But, we can separete the words with letters.
    Ex.: Lets separate the text with "o".

    ```js
    let phrase = "Eu quero viver o amor!"
    let myArray = phrase.split("o")
    console.log(myArray)
    ```
    Console - (4) ['Eu quer', ' viver ', ' am', 'r!']

Now, lets transform the array in one text and where was spaces, put _.

For this case, we use the join. 
Join = Adds all the elements of an array into a string, separated by the specified separator string.

```js
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
```
Console - Eu_quero_viver_o_amor!

Resuming, we have to back the array to string with join and in the same time tell what is the separator we want.

## Array with constructor

Criate array with constructor

```js
let myArray = ['a', 'b', 'c']
console.log(myArray)
```
Console - (3) ['a', 'b', 'c']

With constructor

```js
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
```
Console - (3) ['a', 'b', 'c']

The return is the same, but with the constructor, each argument turn one element on the array.

