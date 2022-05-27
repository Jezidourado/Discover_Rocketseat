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
  console.log(eu sou o Jeziel)
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
