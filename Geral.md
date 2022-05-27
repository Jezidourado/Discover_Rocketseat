# ================= HTML =================

# HTML ANATOMY

```html
<!DOCTYPE html>
<html lang="en">
  <!--
        Lang = Language. 
        Defines the language of the document. Will be identified by the browser to translate the page if necessary.
    -->
  <head>
    <meta charset="UTF-8" />
    <!--
    Meta = represents many types of meta-data
    charseat="utf-8" = accepts many characters as possbile 
    -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--
        The config above says that the content are visible in mobile devices and desktops.
    -->
    <title>Document Anatomy</title>
  </head>
  <body>
    <h1>Adjustment of route</h1>
    <p>The migration of an <b>engennier</b> to the technology.</p>
  </body>
</html>
```

# FAVICON

```html
<!--  <link> for customized icons -->

<!-- basic favicon -->
<link
  rel="icon"
  href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"
/>
```

# META SEO

```html
<head>
  <!-- SEO: SEARCH ENGINE OPTIMIZATION (motores de busca = google) -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="author" content="Jeziel" />
  <meta
    name="description"
    content="A website for programation begginers"
  />
  <!--  description is for the text description of the website on the google search -->
  <meta name="robots" content="index, follow" />
  <!--  tell to the search robots index and follow link inside the page -->
  <meta name="robots" content="noindex, nofollow" />
  <!-- tell to the search robots don't index and don't follow links inside the page -->
</head>
```

# META SOCIAL

```html
<!-- 
  <meta> for social websites
-->

<head>
  <!-- Open Graph (og): facebook -->
  <meta
    property="og:image"
    content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg"
  />
  <!-- to search an image -->
  <meta
    property="og:description"
    content="Text to be showed on the share something on Facebook"
    Aqui vem um texto para ser mostrado ao compartilhar no facebook"
  />
  <!-- para buscar uma descrição -->
  <meta property="og:title" content="Um site da Rocketseat" />

  <!-- para buscar um título -->
  <!-- Twitter -->
  <meta name="twitter:title" content="Rocketseat" />
  <head>
    <!-- Cada rede social tem sua especifidade (Facebook usa og; Twitter usa name) -->
  </head>
</head>
```

# ABREVIAÇÕES

```html
<abbr>
  abreviação

  <p>
    Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.
  </p>

  <!--
 Detalhes de contato

 <address>
-->

  <address>
    <p>Jeziel Dourado</p>
    <p><b>Santa Bárbara d'Oeste, SP.</b></p>
  </address></abbr>
```

# CABEÇALHOS E PARÁGRAFOS

```html
<h1>Sobre mim</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p>
  Optio aut esse quo deleniti nisi perferendis nihil consectetur ducimus
  quisquam magnam repudiandae, cum pariatur fugit porro. Consequatur repellat
  adipisci sed quia!
</p>

<h2>Nascimento</h2>

<h3>Infância</h3>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat neque
  dolorem laudantium, impedit corrupti perferendis optio assumenda. Atque
  libero, molestiae voluptate quidem nihil magnam saepe eligendi et, cupiditate
  blanditiis eveniet?
</p>

<h3>Adolescência</h3>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat neque
  dolorem laudantium, impedit corrupti perferendis optio assumenda. Atque
  libero, molestiae voluptate quidem nihil magnam saepe eligendi et, cupiditate
  blanditiis eveniet?
</p>

<h2>Trabalho</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur,
exercitationem tempora animi aut alias dolorum eaque sint, ab excepturi culpa ea
sequi enim sed odio porro. Maiores, molestiae exercitationem.

<a href="">Saiba mais</a>
```

# ELEMENTOS GENÉRICOS

```html
<!-- Elementos genéricos

    <div> - serve para separar o código em blocos
    <span> - serve para manter o código em linha, porém pulando linha no código em si
-->

<div class="Loja">
  <div>Camiseta</div>
  <div>R$99,99</div>
</div>

<div class="Loja">
  <span>Camiseta</span>
  <span>R$99,99</span>
</div>
```

# REPRESENTAÇÃO DE CÓDIGO

```html
<!-- 
    Representando códigos de computador

    <code>
        Partes gráficas de código
-->

<code> document.querySelector("boddy") </code>

<!--
      <pre>
          Blocos de código, pois essa tag mantém os espaços em branco e recuos que eu colocar no meu código
  -->

<pre>
      <code>
          document.
          querySelector("boddy")
            </code>
  </pre>
```

# TAGS E ATRIBUTOS

```html
<!--
    Elementos vazios
-->

<img src="" alt="" />
<input type="text" />

<!--
    Atributos HTML
-->

<img src="image.png" alt="Image1" />

<!--
    Atributos Booleanos
    Não precisam de conteúdo ex.: disabled
-->
<input type="text" disabled />

<!--
    Atributos globais mais utilizados

    - class = serve para aplicar estilos CSS, classificar conteúdo e acessar no JavaScript
    - contenteditable = diz se o conteúdo é editável ou não (true/false)
    - data-* = pode ser adicionado por qualquer nome (Ex. data-id / data-qualquer-nome). Ajuda na logica.
    - hidden = esconde o conteúdo
    - id = da um código para o conteúdo
    - style = estiliza o conteúdo
    - tabindex = sequencia a navegação pelo TAB
    - title = mostra um texto ao conteúdo ao passar o mouse em cima (ver Conteúdo 10)
-->

<div class="teste" contenteditable="true">Conteúdo1</div>

<div class="teste" contenteditable="false">Conteúdo2</div>

<div class="teste" data-id="" id="teste1">Conteúdo3</div>

<div class="teste" data-id="1" id="teste2">Conteúdo4</div>

<div class="teste" style="color: green">Conteúdo5</div>

<div class="teste" hidden>Conteúdo6</div>

<div tabindex="3">Conteúdo7</div>

<div tabindex="1">Conteúdo8</div>

<div tabindex="2">Conteúdo9</div>

<div title="Definir um título">Conteúdo10</div>

<!--
    Alinhamento de tags
-->

<p>Vou <em>escrever</em> um parágrafo</p>

<p>Esse é um novo parágrafo</p>

<p>Texto1 Texto2 Texto3</p>

<p>Texto1 <br />Texto2 <br />Texto3</p>

<!--
    Colocando em prática os conhecimentos

    Escrever 2 parágrafos, dando ênfase e importância para algumas palavras e adicione um link de saiba mais.

    - use a tag "em" para ênfase
    - use a tag "strong" para dar importância
    - o link pode levar para o Google
-->

Colocando em prática

<p>O <strong>Naruto</strong> pode ser <em>duro</em> as vezes</p>

<p>Freeza. Porquê você <strong>MATOU</strong> o <em>Kuririn</em>?</p>

<a href="https://google.com">Saiba mais sobre o Freeza.</a>

<!--
    Conteúdo do texto e caracteres reservados.
-->

<p>Espaçamento</p>
<p>O texto só é espaçado quando utilizamos caracteres especiais</p>
<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O texto só é espaçado quando utilizamos
  caracteres especiais
</p>

<p>Caracteres reservados</p>

<p>&lt; &gt; &quot; &apos; &amp;</p>
```

# HYPERLINKS

Hyeperlinks - Elemento Âncora:

```html
<a></a>
```

        + Anatomia

        + Atributos:
            - globais (tittle, id, class...)
            - href
                - para onde iremos, quando clicar
                    - url completa (website)
                    - email
                    - telefone
                    - fragmento
            - download
            - target
                - _self (padrão)
                - _blank

## Atributos globais

(tittle, id, class...)

## Atributos href

```html
website / e-mail / telefone

<p>Find-me:</p>

<ul>
  <li><a href="https://google.com.br" target="_blank">Website</a></li>
  <!--
      Neste caso, target="_blank" leva à pagina abrindo outra aba,
      permanecendo a página de origem. Sem esse atributo, o link
      é aberto na mesma aba, saindo da página de origem.
  -->
  <li><a href="malito:jezieldourado@outlook.com">Email</a></li>
  <li><a href="tel:+5519992166970">Telefone</a></li>
</ul>
```

## FRAGMENTO

```html
<p>Saiba mais</p>
<ul>
  <li><a href="#about">Sobre mim</a></li>
  <li><a href="#history">Email</a></li>
  <li><a href="#works">Trabalhos</a></li>
</ul>

<!--
  os fragmentos (Ex.:#about) servem para, ao clicar no link desejado, 
  a página leva o usuário exatamente ao trecho referente na página.
  OBS: o fragmento fica no final do link, exemplo usando works 
  (file:///C:/Users/cf426774/Desktop/HD/Works/Starter-html/hyperlinks.htm#works)
-->

<h1 id="about">Sobre mim</h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit, quaerat
adipisci ad dolore inventore nisi fugit libero corrupti ex iste maxime
praesentium culpa, dolorem autem recusandae fuga labore possimus.

<h2 id="history">História</h2>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo ab, aut
tenetur similique qui at. Ea, mollitia quod. Necessitatibus natus culpa
cupiditate ipsa, ipsum cumque modi corrupti quisquam obcaecati?

<h2 id="works">Trabalhos</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati quod
facilis fuga ipsum cumque minus facere id vero est veritatis dolorem
necessitatibus expedita perspiciatis iste, officia porro ea aperiam?
```

## CONTEÚDO DOS HYPERLINKS

- posso colocar qualquer conteúdo. Os diversos tipos de links abaixo levam ao mesmo endereço 
```html
<a href="https://google.com" title="Ir para o Google">
  <h1>Google</h1>
  <p>Link para o site da Google</p>
  <img src="https://source.unsplash.com/random" alt="" />
</a>
```

## URLs E CAMINHOS DOS ARQUIVOS

- URL - Uniform Resource Locator - https://google.com 
- Sequência de texto que define onde algo está localizado na web 
- URL usam caminhos para encontrar
arquivos 
- Caminhos dos arquivos onde, no explorador de arquivos, um recurso
está localizado 

### Caminho dos arquivos

```html
<a href="hyperlinks.htm">Abrir documento Hyperlinks</a>
```
Neste caso, o link foi direto para este documento.

### URLs

```html
<a href="https://google.com">Abrir o Google</a>
```
### Navegando pelos diretórios

> Como navegar pelos caminhos?
  - mesmo diretório
  - entrando em diretórios
  - saindo de diretórios
  - diretório raiz (root ou pai)

```html
<a href="../elementos-genericos.html">arquivo na pasta anterior</a>

<a href="./hyperlinks.htm">arquivo no diretório raiz (este doc)</a>

<a href="listas.html">arquivo na mesma pasta</a>

<a href="../citações/citacoes2.html">arquivo na pasta citações</a>
```

# LISTAS

Listas não ordenadas

```html
<h1>Suco Detox</h1>

<h2>Ingredientes:</h2>
<p>
<ul>
    <li>3 laranjas;</li>
    <li>2 folhas de couve;</li>
    <li>1 pedaço pequeno de gengibre;</li>
    <li>1 beterraba;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ul>
</p>
```
Listas ordenadas

```html
<h1>Suco Detox</h1>

<h2>Ingredientes:</h2>
<p>
<ol>
    <li>3 laranjas;</li>
    <li>2 folhas de couve;</li>
    <li>1 pedaço pequeno de gengibre;</li>
    <li>1 beterraba;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ol>
</p>
```
Listas de descrição

    <dl> - description list = lista de descrição
    <dt></dt> - description text = texto de descrição
    <dd></dd> - description = descrição em si

Objetivo: marcar um conjunto de itens e suas descrições

```html
<h2>Glossário</h2>
<dl>
    <dt>Hypertext</dt>
    <dd>É um hiper texto com possibilidades...</dd>

    <dt>Markup</dt>
    <dd>Marcação de texto...</dd>

    <dt>Language</dt>
    <dd>Linguagem com sua semântica e sintaxe...</dd>
</dl>
```

# URL

URLs absulutos vs relativos

    - Absolutos
        -inclui protocolo e nome de domínio
            - http://google.com.br
        - sempre apontará para o mesmo local, pois é absoluto

    - Relativos
        - relativo à página aberta no momento
        - apontará para lugares diferentes

```html
<a href="google.com.br">relativo: ir para o Google</a>
<br />
<a href="https://google.com.br">absoluto: ir para o Google</a>
```

# CITAÇÕES

Citações

```html
<blockquote> (aspas)
```

```html
<blockquote
  cite="https://www.uol.com.br/esporte/futebol/central-de-jogos/#/25-04-2022"
>
  <!--
      cite = atributo para referenciar a URL da citação.
  -->
  <p>
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code> </strong> (ou
    <em>HTML Block Quotation Element</em>) indica que um texto externo foi
    citado.
    <!--
      code = atributo utilizado para representar um código (em amarelo).
  --></p>
</blockquote>

<!--
      Citações
      <cite>
  -->

<p>
  De acordo com
  <a
    href="https://www.uol.com.br/esporte/futebol/central-de
      -jogos/#/25-04-2022"
    ><cite>página MDN blockquote</cite></a
  >:
</p>

<!--
      Citações
      <cite>
  -->

<p>
  O elemento quote - <code>&lt;q&gt;</code> - é
  <q
    cite="https://www.uol.com.br/esporte/futebol/central-de-jogos/#/25-04-2022"
  >
    usado para citações curtas que não precisam de parágrafos ou quebras de
    linha.</q
  >
  --
  <a
    href="https://www.uol.com.br/esporte/futebol/
      central-de-jogos/#/25-04-2022"
  >
    <cite>MDN q page</cite></a
  >.
</p>
```

# TABELAS

```html
<!--
      <table>
  
      PRÓS
      - Visualização de dados via linhas e colunas
      - Boa acessibilidade para leitura dos dados
  
      CONTRAS
      - Pouco flexível
      - Precisa de estilização para melhor visualização
  
      NÃO USAR
      - Para criação de layout
  -->

<!--tr = table row = linha 
      th = table header = cabeçalho
      caption = legenda
      tfoot = rodapé
      -->

TABELA SIMPLES

<table>
  <caption>
    Nome por idade
  </caption>

  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Jeziel</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Adriana</td>
      <td>24</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total:</td>
      <td>2 Pessoas</td>
    </tr>
  </tfoot>
</table>

TABELA COMPLEXA

<!--
    2 lojas
      Quantos produtos foram produzidos, quantos vendidos e agrupado por nome dos produtos.
  -->

<table>
  <caption>
    Produzidos x Vendidos por Loja
  </caption>

  <colgroup>
    <col />
    <col span="2" style="background-color: red;" />
    <col span="2" style="background-color: blue;" />
  </colgroup>

  <thead>
    <tr>
      <th rowspan="2"></th>
      <!--ocupa duas LINHAS-->
      <th colspan="2" scope="colgroup">Loja 1</th>
      <!--ocupa duas COLUNAS-->
      <th colspan="2" scope="colgroup">Loja 2</th>
      <!--scope (ajuda na acessibilidade a entender o que é o escopo)-->
    </tr>

    <tr>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
  </thead>

  <tbody>
    <tr align="center">
      <th>Vassouras</th>
      <td>50</td>
      <td>30</td>
      <td>20</td>
      <td>20</td>
    </tr>

    <tr align="center">
      <th>Baldes</th>
      <td>10</td>
      <td>10</td>
      <td>30</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

# =============== CSS =================

# INTRODUÇÃO

## O que significa CSS?

- Cascading style Sheet
- Código para criar estios no HTML
- HTML é a estrutura e o CSS é a beleza
- Assim como o HTML, não é uma linguagem de programação
- É uma linguagem style sheet

# ANATOMIA

```css
h1 {
  color: red;
  font-size: 60px;
  background: gray;
}
```

# SELETORES

Conecta um elemento HTML com o CSS

- Global selector '\*' - muda todo o documento
- Element/Type Selector 'h1, h2, p, div' - muda os elementos específicos
- ID selector '#box, #container' - muda as caixas
- Class selector '.red, .m-4'
- Atribute selector, Pseudo-Class, Pseudo-element, e outros

# CAIXAS

- Quase tudo são caixas do CSS
- Em uma caixa há posicionamentos, tamanhos, espaçamentos, bordas, cores
- Uma caixa pode ficar ao lado de uma outra, ou acima
- Elementos HTML são caixas \*/

# MANEIRAS DE ADICIONAR O CSS

### INLINE

- Atributo 'style' (tudo em linha)

Ex.:

```css
  <h1 style="color: blue">
```

### STYLE

- tag html que irá conter o css
  Ex.:

```html
<style>
  <style > h1 {
    color: blue;
  }

  strong {
    color: red;
  }
</style>
```

### LINK

```html
<link />
* arquivo css externo Ex.:
<link rel="stylesheet" href="style.css" />
Neste caso, é criado um arquivo css a parte para editar o arquivo html através
do link
```

### @import

- arquivo css externo

Ex.:

```css
@import 'https://fonts.googleapis.com/css...' > h1 {
  color: blue;
  font-family: 'Ranchers', cursive;
}
```

Neste caso, as fontes foram importadas do repositório do Google

# A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

- Seu estilo é lido de cima para baixo

É levado em consideração 3 fatores:

1. Origem do estilo
2. Especificidade
3. Importância

## Origem do estilo

Inline >>>>> tag style >>>>> tag link

## Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

'0. Universal selector, combinators e negation pseudo-class (:not())

'1. Element type selector e pseudo-elements (::before, ::after)

'10. Classes e atribute selectors ([type="radio"])

'100. ID Selector

'1000. Inline

## !Important

É a regra mais forte de todas. Ela subscreve quaisquer estilos anteriores.

- Cuidado, evite o uso
- Não é considerado uma boa prática
- Quebra o fluxo natural da cascata

# At-rules

at=@

- Está relacionado ao comportamento do CSS
- Cimeça com o sinal de '@' seguido do identificador e valor

## Exemplos comuns

- @import /_ incluir um CSS externo _/
- @media /_ regras condicionais para dispositivos _/
- @font-face /_ fontes externas _/
- @keyframes /_ Animation _/

```css
@import url ('http://local.com/style.css');

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

- Junção de propriedades
- resumido
- legível

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
  font-size: 0.8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /*font shorthand*/
  font: italic bold 0.8em/1.2 Arial, sans-serif;
}
```

## Detalhes

- Não irá considerar propriedades anteriores
- valores não especificados irão assumir o valor padrão
- geralmente, a ordem da escrita não importa, mas, se houver muitas propriedades com valores semelhantes poderemos encontrar problemas.

## Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, vorder-left, border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-itens, place-self, text-decoration, transition

**https://developer.mozila.org/en-US/docs/Web/CSS/Shorthand_proprierts**
link para as propriedades que aceiram shorthand

# Funções

- nome seguido de abre e fecha parentesis
- recebe argumentos

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
p {
  -webkit-background-clip: text; /* Chrome, Safari, ISO, Android */
  -moz-background-clip: text; /* Mozilla (Fireforx) */
  -ms-background-clip: text; /* Internet Exmplorer */
  -o-background-clip: text; /* Opera */
}
```

### Consultas

[http://iread.github.io/ehich-vendor-prefix/]
[https://caniuse.com]

# Box Model

- Fundamental para fazer layouts para web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa 2D

- Tamanho (largura x altura) -------- width | height
- Conteúdo -------------------------- content
- Bordas ---------------------------- border
- Preenchimento interno ------------- padding
- Espaços fora da caixa ------------- margin

\*\* Cada elemento na sua página será considerado uma caixa.

## Box sizing

Auxilia no cálculo do tamanho total da caixa.

-- content-box: border box

```css
div {
  box-sizing: border-box;
}
```

Exemplo:

```css
div {
  /* abaixo temos as definições da caixa*/
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
  /*o box-sizing entra para que as definições acima não alterem o valor total da borda, ou seja, que a caixa continue com 100px de altura e largura.*/
  box-sizing: border-box;
}
```

## display: block vs display: inline

- Como as caixas se comportam em relação a outras caixas
- Comportamento externo das caixas

```html
| **block**                     | **inline**
--------------------------------------------------------------- 
Ocupa toda a linha, colocando o |Elemento ao lado do outro
o proximo elemento abaixo deste |
--------------------------------------------------------------- 
Width e height são respeitadas  |Width e height não funcuinam
--------------------------------------------------------------- 
Padding, margin, border irão    |Somente valores horizontais 
funcionar normalmete            |de margin, padding e border
```

exemplos:
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`

inline: `<a> <strong> <span> <em>`

## Margin

Espaço entre os elementos (muda as caixas de posição  )

- margin top | margin-right | margin-bottom | margin-left (shorthand sentido horário)
- values: `<length>` |  `<percentage>` |  auto

```css
div {
  /*sorthand*/
  margin: 12px 16px 10px 4px; /*top | right | bottom | left*/
  margin: 12px 16px 0; /*top | right, left | botttom*/
  margin: 12px 16px; /*top, bottom | right, left*/
  margin: 12px; /*todas as laterais*/
}
```
 * cuidado com margin collapsing   (top se junta ao bottom)

 ## Pading

 Preenchimento interno da caixa (muda o conteúdo da caixa de posição)

 - padding-top | padding-right | padding-bottom | padding-left (shorthand sentido horário)
- values: `<length>` |  `<percentage>`

```css
div {
  /*sorthand*/
  padding: 12px 16px 10px 4px; /*top | right | bottom | left*/
  padding: 12px 16px 0; /*top | right, left | botttom*/
  padding: 12px 16px; /*top, bottom | right, left*/
  padding: 12px; /*todas as laterais*/
}
```
* Padding poderá causar diferença na largura de um elemento

## Border e outline

As bordas da caixa

- value: `<border-style>` |  `<border-width>` |  `<border-color>`
  - style:  solid | dotted | dashed | double | groove | ridge | inset | outset

```css
div {
  /*sorthand*/
  border-top: solid 2px; /* top | right | bottom | left */
  
  /* style */
  border: solid;

  /* width <lenght> | style */
  border: 2px dotted;

  /* style | color */
  border: outset #f33;

  /* width | style | color */
  border: medium dashed green;
}
```

### E o outline?

- Difere em 4 sentidos
  - Não modifica o tamanho da caixa, pois não é parte do Box Model (fica na parte externa)
  - Poderá ser diferente de retangular
  - Não permite ajustes individuais (é fixo)
  - Mais usado pelo user agent (browser) para acessibilidade

# Cores

Usamos o CSS para alterar as cores do nosso documento

## Tipos

* background-color (para fundo das caixas)
* color (para textos)
* border-color (para bordas das caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
*funções: rgb, rgba, hsl, hsla

```css
element {
  /* Keyword values */
  color: currentcolor; 

  /* <named-color> values */
  color: red;
  color: orange;
  color: tan;
  color: rebeccapurple;

  /* <hex-color> values (vai de 0-F) */
  color: #090; /* RED GREEN BLUE */
  color: #009900;
  color: ##090a;
  color: #009900aa;

  /* <rgb ()> values */
  color: rgb(34, 12, 64, 0.6); /* 0-255 */
  color: rgba(34, 12, 64, 0.6);
  color: rgb(34 12 64 / 0.6);
  color: rgba(34 12 64 / 0.3);
  color: rgb(34.0 12 64 / 60%);
  color: rgba(34.6 12 64 / 30%);

  /* <hsl()> values */
  color: hsl(30, 100%, 50%, 0.6); /*Hue - Saturation - Luminance */
  color: hsla(30, 100%, 50%, 0.6);
  color: hsl(30 100% 50% / 0.6);
  color: hsla(30 100% 50% / 0.6);
  color: hsl(30.0 100% 50% / 60%);
  color: hsla(30.2 100% 50% / 60%);
  
  /* Global values */
  color: inherit; /* herda a cor do elemento anterior*/
  color: initial; /* volta a cor inicial */
  color: unset; /* não define cor, é atribuida a cor do contexto que está inserido */
}
```
### Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

# Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
  - a posição das imagens
  - se elas se repetem ou não
  - o tamanho delas na caixa
- Usar cor e imagem juntas
- usar cor gradiente

### Background commands

````css
{
  /* Aplicando somente a cor do fundo */
  background-color: rgb(200, 100, 50);
  /* Aplicando uma imagem ao fundo */
  background-image: url(https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Flogos%2Frocketseat.svg&w=256&q=100);
  /* Definindo que a imagem não se repetirá */
  background-repeat: no-repeat;
  /* Definindo que a imagem se repetirá apenas no eixo x */
  background-repeat: repeat-x;
  /* Definindo que a imagem se repetirá apenas no eixo y */
  background-repeat: repeat-y;
  /* movendo a imagem */
  background-position: center;
  background-position: left bottom;
  background-position: right top;
  ...
  /* alterando o tamanho da imagem */
  background-size: contain; /* fica dentro da box */
  background-size: cover; /* se estica cobrindo toda a box */
  background-size: 50% 25%; /* o primeiro se aplica para largura e o segundo para altura da imagem */
  background-size: 3em; 
  background-size: 15px;
  background-origin: border-box; /* indica que a imagem irá começar a partir da borda, ou seja, pega a borda também */
  background-origin: content-box; /* indica que a imagem irá começar após da borda (padrão) */
  background-origin: padding-box; /* indica que a imagem irá começar a partir do padding, ou seja, todo o preenchimento */
  background-clip: border-box; /* indica que a imagem irá começar a partir do border */
  background-clip: content-box; /* indica que a imagem irá começar a partir do conteudo, eliminando todo o padding da box */
  background-clip: padding-box; /* indica que a imagem irá começar a partir do padding, não considerando a border */
  background-attachment: scroll; /* indica que a imagem irá abaixar junto com o texto da página quando der o scroll do mouse */
  background-attachment: fixed; /* indica que a imagem irá ficar fixa na página quando der o scroll do mouse */

  /* Shorthands */
  background: rgb(55, 100, 50) url(https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Flogos%2Frocketseat.svg&w=256&q=100) no-repeat right top / 100px border-box content-box fixed;

  /* Gradient (mudança de cores de maneira suave) */
  background: linear-gradient(180deg, red, yellow)
  background: radial-gradient(red, yellow, green)
  background: linear-gradient(rgba(13, 124, 89, 11), rgba(220, 110, 15, 0.2))
  /* Para usar múltiplos backgrounds, basta serapará-los por virgulas nos comandos. Por exemplo, para ter um background fixo e um que muda de acordo com o scroll */

}
````
# Vídeo

```html
<vídeo>
```

```html
<!-- adicionando um vídeo -->
<video src="C:\Users\cf426774\Downloads\NLW Return – Impulse_ Stage 4.mp4"></video>

<!-- adicionando controles -->
<video src="C:\Users\cf426774\Downloads\NLW Return – Impulse_ Stage 4.mp4" controls></video>

<!-- source (usar por exemplo caso o browser não reconheça o vídeo de primeira, se este estiver hospedado internamente) -->
<video controls
  <source src="C:\Users\cf426774\Downloads\NLW Return – Impulse_ Stage 4.mp4" type="video/mp4"> 
</video>

<!-- tags para melhorar a navegabilidade -->
<video controls 
  width="500"
  height="400"
  autoplay
  preload="auto"
  loop
  muted
  poster="image.jpg"
  >
```
- autoplay = vídeo carrega automaticamente (nem todos os navegadores aceitam essa tag por conta da segurança embutida)

- preload="auto" = carrega automaticamente o vídeo
  
- preload="metadata" = carrega apenas metadata, como players e duração do vídeo

- preload="none" = não carrega nada do vídeo, apenas a janela

- loop = toca o vídeo em loop quando encerrar (depende do navegador)

- muted
- autoplay = essas duas tags juntas reproduzem o  vídeo automaticamente sem audio

- poster="imagem.jpg" = imagem de background na janela do video


## IMPORTANTE:
Nem todos os browsers tem o mesmo comportamento, portanto é bom tentar mais de uma estratégia de reproduzir o vídeo, pois o navegador irá ler o código de cima para baixo e ir tentando reproduzir de diferentes formas.ss

# Audio

```html
<audio>
```

O audio tem o mesmo comportamento e comandos que o vídeo. 


# Inframe

INLINE FRAME ELEMENT - Elemento que tratá conteúdos externos

É possível incorporar diversos tipos de conteúdos, como audio, vídeo, mapas, etc.

Quando se deseja adicionar um vídeo do youtube, por exemplo, basta:
- abrir o vídeo;
- Ir em "compartilhar"
- Ir em "incorporar" ou "embed"
- copiar o link e adicionar no código, como exemplo abaixo, que irá vir com controles sugeridos do próprio Youtube.

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/X2mOfqeAH7c?start=146" 
  title="2021 em uma música" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```
- title: importante para acessibilidade
- frameborder: define a borda para o conteúdo
- allow: define as permissões do conteúdo
- allowfullscreen: permite tela cheia

# Imagens

````html
<img>
````

site referencia para imagens livres de direitos autorais: source.unsplash.com

- src: tag que procura a imagem (link)

- alt: caso a imagem não for encontrada, usa-se uma alternativa, pode conter um texto para auxiliar a explicar o que era aquela imagem.

- title: texto sobre a imagem quando se descansa o mouse encima da mesma.

- width: largura
- height: altura
IMPORTANTE: caso não se saiba a proporção da imagem, colocar apenas uma medida (altura ou largura) para que não se tenha uma imagem esticada.

- adicionando link: através da tag "a".

Exemplo de codigo:

````html
<a href="https://google.com.br">
  <img 
    src="https://source.unsplash.com/random" alt="Imagem não encontrada"
    title="Imagem qualquer"
    width="800px"
    >
</a>
````

## Criando títulos ou legendas visíveis nas imagens

Há a possibilidade de deixar textos visíveis ás imagens adicionadas, sendo em formato de texto explicativo ou até mesmo para legendas, onde a intenção é dar o crédito da imagem.

````html
<figure>
````

Exemplo:

```html

  <figure>
    <img 
    src="https://source.unsplash.com/random" alt="Imagem não encontrada"
    title="Imagem qualquer"
    width="800px"
    >
    <figcaption>Legenda da imagem</figcaption>
  </figure>
```

<Figcaption> é usado para identificar que a legenda é referente àquela imagem em específico quando se há diversas imagens. Caso haja somente uma imagem, pode-se usar a tag <p>

# SVG

SVG - Scalable Vector Graphics 

````html
<svg>
````

É uma marcação, estilo html, mas não é para textos e sim para criação de imagens.

- Imagem rasterizadas: fotografias, imagens prontas
- Imagens vetorizadas: imagens criadas que possuem um código (por exemplo as imagens criadas com FIGMA ou CANVAS)

Benefícios imagem vetorizada (SVG)
- Mais leve
- Mais detalhada (melhor qualidade)
- Maior acessibilidade e SEO - Search Engine Optimization (otimização de mecanismos de busca)
- Pode ser editada via CSS ou atributos

Desvantagens imagem vetorizada (SVG)
- Pode ser mais complicado de trabalhar
- Quanto mais complexa a imagem, mais trabalho para o navegador
- Navegadores mais antigos não possuem suporte para essa tag

OBS: Para fotografias, prefira imagens rasterizadas (.jpg, .jpeg, .png)

Exemplo de svg:

````html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" stroke="red"
    stroke-width="6" fill="blue"
    />
</svg>

<svg width="300" height="300">
    <rect
    stroke="blue"
    stroke-width="4"
    width="100%"
    height="100%"
    fill="green" />
</svg>
````

Para não deixarmos o svg no código, podemos criar um arquivo.svg

# Layouts

> Anteriormente os layouts eram feitos através de tabelas **tables**

> Posteriormente vieram os **floats** possibilitando que os elementos flutuassem na página e **clear** para parar de flutuar

> Os **frameworks** vieram para dar a ideia de **Grid Systems**, dividindo a tela em grids para posicionamento dos elementos

> Com o **flexbox** e o **grid** foi possivel posicionais os elementos com mais liberdade

## Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

> Name: **position**

> Value: **static | relative | absolute | fixed**

> **Static** comportamento normal do layout, deixando um elemento abaixo do outro.

> **Relative** permite movimentar um elemento para qualquer lugar da tela, sem que os demais sejam afetados.

```css
.box1 {
  background-color: red;
  position: relative;
  left: 300px;
  top: 80px;
}
```
> **Absolute** adiciona uma nova camada ao layout. O elemento fica independente dos demais, podendo ser movimentado livremente fora da camada dos demais elementos.

````css
.box2 {
  background-color: blue;
  position: absolute;
  top: 450;
}
````

> **Fixed** fixa o elemento na página, de modo que o mesmo não se mova em função do scroll do mouse, por exemplo.

````css
.box3 {
  background-color: green;
  position: fixed;
  top: 70;
}
````
> **z-index** ou Element Stacking. Dá o grau de importância para as camadas, dizendo qual deve ficar acima, ou abaixo.

````css
.box4 {
  background-color: yellow;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}

.box5 {
  background-color: purple;
  position: absolute;
  left: 10;
  top: 10;
  z-index: 2;
}

.box6 {
  background-color: aqua;
  position: absolute;
  left: 20;
  top: 20;
  z-index: 1;
}
````
# Flexbox

````css
display: flex;
````

> Nos permite posicionar vários elementos dentro de uma caixa

> Controle em uma dimensão (horizontal ou vertical)

> Alinhamento, direcionamento, ordenar e tamanhos

## Flex-direction

> Qual a direção do flex: horizontal ou vertical

> row | column

## Alinamento

> **justify-content**

> **aling-items**

Exemplo: Deixando o conteúdo exatamente no meio da página independente do tamanho da mesma.

HTML

````html
<head>
  <link rel="stylesheet" href="./layout.css" />
</head>
<div class="container">
  <div class="box red"></div>
  <div class="box blue"></div>
  <div class="box green"></div>
</div>
````
CSS
````css
body {
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
}

.container {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.box {
  width: 100px;
  height: 100px;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
````

# Grid

> Posicionamento dos elementos dentro da caixa

> Posicionamento horizontal e vertical ao mesmo tempo

> Pode ser flexível ou fixo

> Cria espaços para os elementos filhos habitarem

Exemplo: Criar um layout com cabeçalho, rodapé conteúdo e informações adicionais, onde:
- o **cabeçalho** e **rodapé** peguem todo o eixo x;
- **infos adicionais** fique ao lado direito com largura fixa de 80px;
- **conteúdo** fique ao lado esquerdo, pegando a largura restante.

HTML
````html
<Head>
  <link rel="stylesheet" href="./layout.css" />
</Head>  
  
  <body>
    <header>Cabeçalho</header>

    <main>Conteúdo</main>

    <aside>Infos adicionais</aside>

    <footer>Rodapé</footer>
  </body>
````
CSS
````css
body {
  margin: 0;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header header"
  "main aside"
  "footer footer";

  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px;
  /* fr = fração */
}

header {
  grid-area: header;
  background-color: green;
}
main {
  grid-area: main;
  background-color: red;
}
aside {
  grid-area: aside;
  background-color: blue;
}
footer {
  grid-area: footer;
  background-color: gray;
}
````
Usando flex no grid, para adicionar logo e menu no cabeçalho

HTML
````html
<Head>
  <link rel="stylesheet" href="./layout.css" />
</Head>  
  
<body>
  <header>
    <div>logo</div>
    <div>menu</div>
  </header>

  <main>Conteúdo</main>

  <aside>Infos adicionais</aside>

  <footer>Rodapé</footer>
</body>
````
CSS
````css
body {
  margin: 0;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header header"
  "main aside"
  "footer footer";

  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px;
  /* fr = fração */
}

header {
  grid-area: header;
  background-color: green;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
main {
  grid-area: main;
  background-color: red;
}
aside {
  grid-area: aside;
  background-color: blue;
}
footer {
  grid-area: footer;
  background-color: gray;
}
````
# Fontes

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

> Tipo de fonte deum elemento

> Lista de fontes e ordem de prioridade

> inclui "fallback" font (escape, caso o caminho original não seja suficiente), exemplo:

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```
Neste caso, caso o browser não encontre "Times New Roman" irá procurar "Times" e "serif" posteriormente.

## Font-weight

Referência: https://www.w3.org/TR/css-fonts-3/

Tipos de peso de fontes:

>	normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

OBS: Nem todo tipo de peso vai funcionar para todas as fontes.

```css
p {
  font-weight: bold;
}
```

## Font-style

Referência: https://www.w3.org/TR/css-fonts-3/

Tipos de peso de fontes:

>	normal | italic | oblique

```css
span {
  font-style: italic;
}
```

## Font-size

Define o tamanho da fonte.

````css
p {
  font-size: 18px;
}
````


## Web fonts

Nem sempre as mesmas fontes estão em todas as máquinas, portanto, ao fazer  uma aplicação com um font-family: "Segoe UI" por exemplo, há a opção de buscar essa fonte na web, para que haja uma padronização em qualquer lugar que ela for aberta.

Referências: 
https://www.w3.org/TR/css-fonts-3/
CSS TRICKS - https://css-tricks.com/snippets/css/using-font-face/
GOOGLE FONTS - https://fonts.google.com

É possível importar essas fontes através de:

> #font-face

> @immport

> link

Exemplo:

HTML

```html
<Head>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">  
</Head>
<body>
  <link rel="stylesheet" href="./estilos-texto.css">
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maxime necessitatibus eligendi iste similique blanditiis nostrum cupiditate ratione recusandae facilis soluta quo harum perferendis labore exercitationem, vel doloremque veniam officiis!
  </p>
</body>
```
CSS
```css
p {
  font-weight: normal;
  font-style: oblique;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
}
```
## Mais estilos de fontes

Referência:
MDN - https://developer.mozila.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

## Font-variant

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/font-variant

Deixa as letras minúsculas em maiúsculo, mas com um tamanho menor do que as maiúsculas de origem
````css
p {
    font-variant: small-caps;
  }
  ````
## font-stretch

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/font-stretch

  - Alargamento ou encolhimento da fonte
  - Aceita palavra-chaves como: expanded, condensed, normal
  - Aceita porcentagens de 50% a 200%
  
````css
  p{
    font-stretch: expanded;
  }
````
## Letter-spacing

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/letter-spacing


Espaços entre caracteres

````css
p {
  letter-spacing: 4px;
}
````

## Word-spacing

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/word-spacing

Espaços entre palavras

````css
p {
  word-spacing: 4px;
}
````

## Line-height

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/line-height

- Espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Comuns: 1.5 ou 2

````css
p {
  line-height: 1.6;
}
````

## Text-transform

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/text-transform

- Transformação do texto

> Uppercase | lowercase | Capitalize | none 

````css
p {
  text-transform: uppercase; 
}
````

## Text-decoration

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/text-decoration

- Aparência decorativa de um texto

> Line: underline | overline | line-through
- Podemos aplicar mais de 1 valor

> Style: wavy | dotted | double | dashed | solid

> color: `<color>` values

````css
p {
  text-decoration: underline; /* shorthand */
}
````

## Text-align

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/text-align

- Alinhamento de um texto

> left | right | center | justify

````css
p {
  text-align: center;
}
````

## Text-shadow

Referência: https://developer.mozila.org/en-US/docs/Web/CSS/text-shadow

- Aplica sompras no texto
- Permite múltiplos valores

> offset-x | offset-y | blur-radius | color

````css
p {
  text-shadow:  1px 1px 1px red, /* shorthand */
                2px 2px 1px green; /* shorthand */
}
````

## Shorthand para fontes

> font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

````css
p {
  /* -style, -variant, -stretch, -size, -line-height e -family */
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
````

# Formulários

````html
<form>
````

> Pra que serve?
- capturar dados de entrada (input)
- Interação
- Controle

> Pré requisitos
- Básico HTML

> Dominar
- Estilização
- Validação
- Controles customizados
- Javascript

> Atributos básicos
- **action**: caso fique vazio, os dados do formulário serão enviados para a mesma página 
- **method**: "GET" mostra os dados na URL; "POST" não mostra os dados.

## Fieldset legend

````html
<fieldset>
````

Agrupamento de campos que tenham o mesmo propósito, a fim de deixa o HTML mais semântico e com maior acessibilidade.

> Atributos especiais

- **disabled** 
  - desabilita o elemento
  - não serão enviados ao submeter o formulário
- **form**
  - o id de um formulário ao qual esse fieldset pertence
  - não precisa estar dentro do fieldset
- **name**
  - nome do grupo
- **legend**
  - nome do agrupamento
  - primeiro elemento dentro do fieldset

Exemplo form 1:
````html
<form id="Contato" action="">
  <button>Enviar</button>
  <!-- No caso, quando clicar em "enviar" os dados de "Nome" seráo enviados para o formulário, por causa do ID -->
</form>

  <fieldset form="Contato">
    <legend>Contato</legend>
    <label for="">Nome</label>
    <input type="text">
  </fieldset>
  ````

  ## Label

````html
  <label> 
````
> Pra que serve? 

- Associar e identificar uma (ou mais) tag de entrada de dados
- Acessibilidade
- Possibilidade de clicar para mudar o foco de entrada de dados (| piscando indicando entrada de dados)

Ex.:
````html
<label>Nome Completo
  <input type="text">
</label>
````

> Atributos

- **for**
  - para fazer a conexão enre este label e a tag de entrada de dados
  - é feita via id do input
  - só funciona com elementos específicos
    - **buttom | input (not hidden) | meter | output | progress | select | textarea**

Ex.:
````html
<label for="nome">Nome Completo</label>  
  <input id="nome" type="text">
````

## Button

````html
<button>
````

> Pra que serve?
- Representa um botão
- Usado para enviar formulários
- É estilizado pelo user agent (browser)

> Atributos comuns
- **type**
  - submit - envia o formulário
  - reset - reseta os dados do formulário (limpa)
  - button - envia o formulário
- **autofocus** - dá foco para um botão específico. Por exemplo, se colocar "autofocus" em um botão de ENVIAR, ao clicar ENTER o formulário irá enviar os dados (é como se tivesse clicado no botão ENVIAR)
- **disabled** - desabilita um botão. Geralmente é utilizado para deixar o botão ENVIAR desabilitado enquanto as outras informações não são preenchidas (com auxílio de Javascript).
- **name** - name e value servem para enviar um valor descrito em um botão, será visto mais pra frente exemplos.
- **value**
- **form** - faz o link de um elemento com o formulário em questão através do ID.

Ex.: Botão reset (limpar)
````html
<form action="">
  <input type="text" value="">
  <button type="reset">Limpar</button>
</form>
````

Ex.: Botão autofocus
````html
<button autofocus>Enviar</button>
````

Ex.: Botão disable
````html
<button disable>Enviar</button>
````

Ex.: Botão name e value
````html
<button type="submit" name="button" value="Valor qualque">Enviar</button>
````

Ex.: Botão form
````html
<form action="" id="meu-form"></form>

<button type="submit" form="meu-form">Enviar</button>
````

## Datalist

- Lista de valores como sugestão a uma tag "input"
- Valores sugestivos e não obrigatórios
- Usuário poderá selecionar um dos valores, ou colocar um valor diferente da sugestão.

````html
<datalist id="fruitsdata">
  <option>apple</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
  <option>cherry</option>
</datalist>
````

## List

- Recebe como valor o id de um "datalist" residente no mesmo documento.

> Tipos de input suportados

- **text | search | url | tel | email | date | month | week | time | datetime-local | number | range | color**
- Valores de datalist que não são compatíveis com o tipo do 'input' não serão apresentados.

> Tipos de input não suportados (conforme especificação)

- **hidden, | password | checkbox | radio | file | ou qualquer tipo de botton**

> User Agent

Verificar a compatibilidade com o browser https://caniuse.com

Ex.: Criar um formulário com opções de fruta e cores

````html
<input 
  type="text"
  list="fruitsdata"
  placeholder="Escolha uma fruta"/>

<datalist id="fruitsdata">
  <option>apple</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
  <option>cherry</option>
</datalist>

<input 
  type="color"
  list="colorsdata"
  placeholder="Escolha uma cor"/>

<datalist id="colorsdata">
  <option>#748910</option>
  <option>#ff00ff</option>
  <option>#780027</option>
  <option>#234253</option>
  <option>#918273</option>
</datalist>
````

## Input

````html
<input>
````

- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

> Atributos
- **type**
- **name**
- **id**

> Atributos comuns do input

- **autocomplete** - sugere ao usuário o restante do dado que está sendo inserido, desde que esse seja um dado frequente usado no browser em questão, Ex.: e-mail.

````html
<input type="email"
autocomplete="email">
````

- **autofocus** - Só um por página. Serve para indicar onde o cursos irá focar.

 ````html
<input type="type" autofocus>
````

- **disable** - desabilita um campo. No caso de haver um value (ex. abaixo) e não quiser permitir que o usuário o apague, basta usar o disable. Deixa o campo opaco.

 ````html
<input type="type" value="qualquer valor" disable>
````

- **readonly (quase todos)** - mesmo comportamento do "disable" mas não deixa o campo opaco.

 ````html
<input type="type" value="qualquer valor" readonly>
````

- **value** - mostra um valor no campo. Serve para deixar uma dica como "digite seu nome aqui". Porém ao clicar no campo, o texto precisa ser apagado primeiramente.

 ````html
<input type="type" value="qualquer">
````

- **form (quase todos)** - caso o input não esteja dentro do form, serve para linkar ao form.

````html
<form id="meu-form"></form>
<input name="email" type="email" form="meu-form">
````

- **name** - importante para demonimar o que é aquele input, como se fosse um id.

- **required (quase todos)** - required = obrigatório. Define quais campos tem preenchimentos obrigatórios.

 ````html
<input type="type" required>
````

- **placeholder (quase todos)** - mostra um texto no campo, geralmente um texto de instrução (digite seu e-mail). Ao digitar o texto desaparece automaticamente.

 ````html
<label for="email">Email</label>
<input id="email" type="email" placeholder="Digite seu e-mail">
````

**IMPORTANTE** - sempre usar o label antes do placeholder. Apesar de possuirem a mesma função de instrução, o "label" serve para acessibilidade.

## Password

> Pra que serve?
- Colocar uma senha de maneira segura
- Esconde o que está sendo digitado no campo
- O estilo da apresentação do campo, depende do User Agent

> Atributos do password

- **minlength / maxlength**
  - O número mínimo e/ou máximo de caracteres para este campo.

````html
  <form action="">
    <input type="password"
       minlength="4"
       maxlength="8"
    >
````

- **size**
  - O tamanho do campo password é limitado ao número aceitável de caracteres que esse campo deverá conter.

````html
  <form action="">
    <input type="password"
       minlength="4"
       maxlength="8"
       size="8" 
    >
````

- **pattern**
  - Expressão regular para validar o que está sendo digitado no campo.
  - Altamente recomendado o uso de um padrão de segurança alto de senhas.
  - Exemplo: queremos que a senha contenha hexadeximais com o limíte mínimo 4 e no máximo 8 caracteres.
    - **pattern="[0-9a-zA-Z]{4,8}"**

````html
<form action="">
  <input type="password"
     pattern="[0-9a-zA-Z]{4,8}"
     title="Minimo 4 e maximo 8 caracteres"
  >
  <button type="submit">Enviar</button>
</form>
````

- **placeholder** 
  - Mostra um exemplo de texto a ser digitado no campo.
  
````html
<form action="">
  <input type="password"
     pattern="[0-9a-zA-Z]{4,8}"
     title="Minimo 4 e maximo 8 caracteres"
     placeholder="Insira sua senha"
  >
  <button type="submit">Enviar</button>
</form>
````

- **readonly / disabled** 
  - Atributo boleano indicado se o campo está habilitado ou não

- **required**
  - O campo será obrigatório

- **inputmode**
  - Poderá alterar o uso do teclado em smartphones
  - Ex.: queremos que o cliente só adicione números, o **inputmode="numeric"** abrirá o teclado numérico do smartphone.

````html
<form action="">
  <input type="password"
     inputmode="numeric" 
  >
  <button type="submit">Enviar</button>
</form>
````

- **autocomplete**
  - on: permite a sugestão de: new-password ou current-password
  - off: desabilita a opção de autocompletar
  - new-password: o navegador poderá sugerir uma nova senha

## Email

````html
<input type="email">
````

- Espera que o usuário digite um email
- Irá validar se o valor digitado é um email

> Atributos email

- **placeholder**
- **readonly / disabled**
- **value**
- **required**

````html
<form action="">
  <input type="email"
    placeholder
    disable
    value="jeziel@email.com"
    >
    <button type="submit">Enviar</button>
</form>
````

- **multiple**: o campo irá receber 1 ou mais emails, separado por vírgulas.

- **minlenght / maxlenght**: o mínimo e/ou máximo valor que o campo irá conter.

- **size**: valor numérico indicando quantos caracteres esse campo pode conter.

- **pattern**
  - Uso de expressão regular para validar o campo
  - Ex.: O usuário só poderá colocar email do domínio google.com, então:

````html
<form action="">
  <input type="email"
    pattern=".+@google\.com"
    title="Somente e-mails @google.com serão aceitos"
    >
    <button type="submit">Enviar</button>
</form>
````

- **list** 
  - o id de uma tag "datalist" que está no mesmo documento
  - "datalist" irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
    - Os valores do "datalist" que não forem compatíveis com o campo, não serão apresentados como sugestão

````html
<form action="">
  <datalist id="emailslist">
      <option>jeziel@email.com</option>
  </datalist>
  <input type="email"
  list="emailslist"
    >
    <button type="submit">Enviar</button>
</form>
````

## URL

````html
<input type="url" />
````

- Espera que o usuário digite uma url
- Irá validar se o valor digitado é uma url

> Atributos url

- **placeholder**
- **readonly**
- **value**
- **required**
- **minlength / maxlength**: o mínimo e/ou máximo valor que o campo irá conter

- **size**: valor numérico indicando quantos caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário

- **pattern**: uso de expressão regular para validar o campo
  - Ex.: o usuário só poderá colocar domínio.com.br
    - **pattern=".*\.com\.br\/.*"**

````html
<form action="">
  <input type="url"
  pattern=".*\.com\.br\/.*"
  >
  <button type="submit">Enviar</button>
</form>
````

- **list**
  - o ide de uma tag "datalist" que está no mesmo documento
  - "datalist" irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
    - Os calores do "datalist" que não forem compatíveis com o campo, não serão apresentados como sugestão.

- **spellcheck**
  - Habilitar a verificação ortográfica para este input
    - **spellcheck="false"** - não usa a verificação ortográfica
    - **spellcheck="on"** - usa a verificação ortográfica

## File

````html
<input type="file"/>
````

- Usuário poderá escolher 1 ou mais arquivos para enviar no formulário

> Atributos file

- **value**
  - contém o arquivo a ser enviado
- **accept**
  - descreve que tipos de arquivos serão aceitos
  - Ex.: **.doc | .docx | .pdf | audio/* | image/png | .png**
````html
<input type="file" accept="image/png">
````
- **files**
  - a lista de arquivo ou arquivos
- **multiple** (boolean)
  - permite o envio de múltiplos arquivos

> Envio dos arquivos

  Para envio dos arquivos o formulário deverá utilizar OBRIGATÓRIAMENTE o método POST e o atributo enctypr como "multipart/form-data", sendo:

````html
<form action="" method="post" enctype="multipart/form-data">
<input type="file" accept="image/png">
</form>
````

## Color

````html
<input type="color" />
````

- Interface para selecionar cor
- Color picker

> Atributos color
- **value**: RGB
  - Se inválido, o preto será exibido

````html
<input type="color" value="ff0000a"/>
````

- **list (quase todos)**
  - o id de uma tag "datalist" que está no mesmo documento
    - **datalist** irá conter uma lista de valores pré definidos a fim de 
    - os valores do "datalist" que não forem compatíveis com o 

````html
<datalist id="colorsdata">
  <option>#0000ff</option>
</datalist>
<input type="color" list="colorsdata"/>
````

## Checkbox

````html
<input type="checkbox" />
````

- Caixas que podem ser marcadas
- Selecionar um valor para ser enviado
- Se não selecionado, não será enviado nenhum dado

> Atributos
- **globais**
- **value**
  - valor que aquele campo contém
  - se não estiver presente, o padrão é 'on'

````html
<label for="subscribe">Receber notificações</label>
<input type="checkbox" name="subscribe" id="subscribe"/>
````

- **checked** (boolean)
  - para deixar o campo marcado como padrão

````html
<label for="subscribe">Receber notificações</label>
<input type="checkbox" name="subscribe" id="subscribe" checked/>
````

> Marcar múltiplos valores
- Usar o atributo 'name' com o mesmo nome para os diversos campos

````html
<label for="subscribe">Receber notificações</label>
<input type="checkbox" name="subscribe" id="subscribe" checked/>
````

## Hiden

````html
<input type="hidden" id="timestamp" name="timestamp"/>
````

obs: timestamp = horário

- insivível ao usuário
- será enviado com o formulário
- não receberá foco
- leitores de tela não percebem esse campo

## Radio

````html
<input type="radio"/>
````

- Projetado para selecionar uma única opção de um grupo de opções. É diferente do checkbox.

> Atributos essenciais
- **checked**
  - indica que o campo foi marcado
- **value**
  - valor que aquele campo contém

````html
<fieldset>
<legend>Bora tomar um café?</legend>
  <label for="yep">Sim</label>
  <input type="radio" id="yep" name="coffee" value="yes" checked>

  <label for="nono">Não</label>
  <input type="radio" id="nono" name="coffee" value="não" checked>
</fieldset>
````

# Text area

````html
<textarea>
````

- mais de uma linha
- útil para textos grandes

> Atributos
- **id** - liga outros elementos

````html
<label for="message">Mensagem</label>
<textarea id="message"></textarea>
````

- **name** - pode ser o mesmo do id. Serve para o back-end para rastrear de onde veio o valor.

````html
<textarea name="message"></textarea>
````

- **rows e cols** - linhas e colunas. Define tamanho do text area padrão. Lembrando que o usuário pode aumentar ou diminuir o tamanho da "textarea" no browser

````html
<textarea cols="5" rows="10"></textarea>
````

- **maxlength e minlength** - tamanho máximo ou mínimo do texto.

````html
<textarea minlength="5" maxlength="10"></textarea>
````

- **wrap** - wrap = embrulhar. Determina se o texto vai ou não ser "embrulhado", ou seja, se ficará numa única linha ou se irá descer conforme a largura e altura da textarea.

````html
<textarea wrap="off"></textarea>
````

.. outros comuns aos "inputs"
  - **autocomplete | autofocus | disable | placeholder | readonly | form | required**

## Select

````html
<select>
````

- Controle que fornece um menu de opções

````html
<option>
````

- Contém as opções a serem selecionadas
- Atributos necessários
  - **value**

> Atributos únicos

- **multiple** - habilita multiplas opções

- **size** - mostra quantas opções você deseja deixar visível

````html
<label for="carselect">Qual o modelo do carro?</label>
<br>
<select name="carmodel" id="carselect" multiple size="2">
  <option value="fiat">Uno</option>
  <option value="Chevrolet">Celta</option>
  <option value="ford">Fiesta</option>
  <option value="Renault">Sandero</option>
</select>
````

## Option group (optgroup)

- Faz agrupamento dos "options" dentro do "select", ou seja, numa lista não será uma opção selecionável, serve como um título para agrupar as opções quando se há mais de um grupo de opções. 

Exemplo:

````html
<label>Please chose one or more pets
  <select name="pets" multiple>
    <optgroup label="4 legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
    </optgroup>
    <optgroup label="flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
````

## Search

````html
<input type="search"/>
````

- Para campos de busca
- É igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent, como por exemplo, apresenta uma lista e, ao selecionar o valor aparece um botão "X" para o usuário desabilitar a seleção.

> Atributos
- **list / datalist**
````html
<datalist id="searchterms">
  <option>Macbook</option>
  <option>Windows</option>
  <option>Linux</option>
</datalist>

<input type="search" name="sistem" list="searchterms">
````
- **pattern**

````html
<form action="">
  <label for="">Pesquisar pelo ID</label>
  <input type="search" name="id" size="6" pattern="[0-9]{6}" title="Digite o número do ID">
  <button>Pesquisar</button>
</form>
````

- **aria-label** - serve como acessibilidade. Para o caso do campo search não é interessante colocar um "label" aparente, portanto entra o aria-label que fica escondido e cumpre a função de acessibilidade.

````html
<form action="">
  <input type="search" name="sistem" placeholder="Digite seu termo de busca" size="30" aria-label="Campo de pesquisa: Digite seu termo de busca">
  <button>Pesquisar</button>
</form>
````

## Number

````html
<input type="number"/>
````

- Entrada de números

> Atributos
- **min / max** - número mínimo e máximo.

````html
<form action="">
  <input type="number" min="18" max="60">
  <button>Enviar</button>
</form>
````

- **step** - define de o intervalo numérico que deverá ser inserido. Ex. 10, 20, 30, 40...

````html
<form action="">
  <input type="number" step="10">
  <button>Enviar</button>
</form>
````

## Range

````html
<input type="range"/>
````

- Controle para selecionar um valor numérico
- Slider ou dial control, ou seja, barra de range

> Atributos
- **min / max** - número mínimo e máximo.
- **step** - define de o intervalo numérico que deverá ser inserido. Ex. 10, 20, 30, 40...

````html
<input type="range" min="1" max="100" step="1">
````

Importante usar os atributos juntos, pois sem o step o browser não entende como a barra deve andar.

## Data e hora

> Atributos
- **date** - trás a data

````html
<input type="date"/>
````

- **datetime-local** - trás a data e horário

````html
<input type="datetime-local"/>
````

- **month** - trás o mês

````html
<input type="month"/>
````

- **time** - trás a hora

~~~html
<input type="time"/>
~~~

- **week** - trás a semana toda

````html
<input type="week"/>
````

IMPORTANTE: São campos que ainda não possuem um ótimo suporte, principalmente para navegadores como Safari.

Ficar de olho em https://caniuse.com



## Desenhando o formulário (planejamento)

É importante desenhar o formulário (literalmente) para ajudar a pensar nos requisitos e definir as necessidades do formulário.

> Dicas:
- O formulário deve ser simples e focado. Um formulário com muitos campos deixam o usuário desmotivado (UX)
- Somente dados necessários
- Verifique o que te agrada (UX)

### Exercício prático

Crie um formulário de Contato

1. O formulário deverá conter um título de nome Contato. Usar fieldset e legend para essa finalidade

2. O formulário conterá 3 campos
  - Nome (input texto)
  - Email (Input email)
  - Mensagem (textarea)

3. O formulário deverá conter um botão para enviar

ATENÇÃO: O formulário deverá conter regras de acessibilidade, como o label para cada campo, por exemplo.

EXERCÍCIO FINALIZADO:

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário</title>
</head>
<body>
  
  <form id="contact" action="">
  
  <fieldset form="contact">
   
    <legend>Contato</legend>

    <label for="name">Nome</label><br>
    <input id="name" name="name" type="text" autocomplete="name" placeholder="Nome completo" autofocus required size="35"/>

    <br>

    <label for="email">E-mail</label><br>
    <input id="email" name="email" type="email" autocomplete="email" placeholder="nome@dominio.com" required size="35" pattern=".+@\"/>
    
    <br>

    <label for="mensage">Mensagem</label><br>
    <textarea id="mensage" name="mensage" maxlength="400" placeholder="Digite sua mensagem (até 400 caracteres)" required cols="35" rows="10" wrap="on"></textarea>
    
    <br>
    <br>
    
    <label for="button"></label>
    <button type="submit" id="button" form="contact">Enviar</button>
    
  </fieldset>
</form>

</body>
</html>
````

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