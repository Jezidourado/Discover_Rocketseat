# Introdução

## O que significa CSS?

* Cascading style Sheet
* Código para criar estios no HTML
* HTML é a estrutura e o CSS é a beleza
* Assim como o HTML, não é uma linguagem de programação
* É uma linguagem style sheet


# ANATOMIA

h1 {
  color: red;
  font-size: 60px;
  background: gray;
}

# SELETORES
 
Conecta um elemento HTML com o CSS

* Global selector '*' - muda todo o documento
* Element/Type Selector 'h1, h2, p, div' - muda os elementos específicos
* ID selector '#box, #container' - muda as caixas 
* Class selector '.red, .m-4'
* Atribute selector, Pseudo-Class, Pseudo-element, e outros */

# CAIXAS
 
* Quase tudo são caixas do CSS
* Em uma caixa há posicionamentos, tamanhos, espaçamentos, bordas, cores
* Uma caixa pode ficar ao lado de uma outra, ou acima
* Elementos HTML são caixas */

# MANEIRAS DE ADICIONAR O CSS
 
### INLINE
* Atributo 'style' (tudo em linha)
Ex.:
  <h1 style="color: blue">


### <style>
* tag html que irá conter o css
Ex.:
  <style>
    h1 {
      color: blue;
    }

    strong {
      color: red;
    }
  </style>


### <link>
* arquivo css externo
Ex.:
    <link rel="stylesheet" href="style.css">
Neste caso, é criado um arquivo css a parte para editar o arquivo html através do link


### @import
* arquivo css externo
Ex.:

```css
@import 'https://fonts.googleapis.com/css...'>

h1 {
  color: blue;
  font-family: 'Ranchers', cursive;
}
```

Neste caso, as fontes foram importadas do repositório do Google


# A cascata (cascading)
A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo

É levado em consideração 3 fatores:
1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

Inline >>>>> tag style >>>>> tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e atribute selectors ([type="radio"])
100. ID Selector
1000. Inline

### !Important

É a regra mais forte de todas. Ela subscreve quaisquer estilos anteriores.
* Cuidado, evite o uso
* Não é considerado uma boa prática
* Quebra o fluxo natural da cascata

# At-rules
at=@

* Está relacionado ao comportamento do CSS
* Cimeça com o sinal de '@' seguido do identificador e valor

### Exemplos comuns

- @import           /* incluir um CSS externo */
- @media            /* regras condicionais para dispositivos */
- @font-face        /* fontes externas */
- @keyframes        /* Animation */

```css
@import url ("http://local.com/style.css");

@media (min-widht: 500px) {
  /* rules here*/
}

@font-face {
  /* rules here*/
}

@keyframes nameofanimation {
  /* rules here*/
}
```


# Shorthand

* Junção de propriedades
* resumido
* legível

```css
{
  /*background proprierts */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /*background shorthand*/
  background: #000 url(images/bg.gif) no-repeat left top;

  /*font propierties*/
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /*font shorthand*/
  font: italic bold .8em/1.2 Arial, sans-serif;
}
```

### Detalhes

* Não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem da escrita não importa, mas, se houver muitas propriedades com valores semelhantes poderemos encontrar problemas.

### Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, vorder-left, border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-itens, place-self, text-decoration, transition

**https://developer.mozila.org/en-US/docs/Web/CSS/Shorthand_proprierts**
link para as propriedades que aceiram shorthand

# Funções

*nome seguido de abre e fecha parentesis
* recebe argumentos

### Exemplos

```css
@import url("https://urlaqui.com/style.css");

{
  color: rgb(255,0,100)
  width: calc(100% - 10px);
}
```

# Vendor prefixes

Permite que browsers adicionem 'features' a fim de colocar em uso alguma novidade que vemos no CSS

### Exemplo

```css
p{
  -webkit-background-clip: text; /* Chrome, Safari, ISO, Android */
  -moz-background-clip: text; /* Mozilla (Fireforx) */
  -ms-background-clip: text; /* Internet Exmplorer */
  -o-background-clip: text; /* Opera */
}
```

### Consultas
[http://iread.github.io/ehich-vendor-prefix/]
[https://caniuse.com]