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
