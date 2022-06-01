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
scripts.html:20 > existe x depois do bloco? 0

Ou seja, a variável **var** x existe antes do bloco {}, porém ainda não há um valor definido. Após o bloco ela existe e tem valor definido.
Isso ocorre pois debaixo dos panos o JS sobe a variável **var** para cima do primeiro console.log, mesmo que sem um valor definido.

Isso faz com que a variável **var** seja uma variável perigosa de se usar, justamente com conta de seu dinamismo.

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
scripts.html:13 Uncaught ReferenceError: x is not defined at scripts.html:13:47
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
scripts.html:16 Uncaught ReferenceError: x is not defined at scripts.html
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
  - camelCase: ao invésde colocar espaços na variável, escrever tudo junto com a primeira letra da próxima palavra em maísculo: myNameIsJeziel. A primeia palavra sempre em minusculo.
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
    console.log(`The ${name} have ${age} years.`)
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
 
> 4. The sdudent variable above is what kind of data? = object

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
console.log(students[1])
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