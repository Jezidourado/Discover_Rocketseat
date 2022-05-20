# ================= HTML =================

# ANATOMIA HTML

```html
<div style="color: red;">ANATOMIA HTML</div>

<!DOCTYPE html>
<html lang="en">
  <!--
        Lang = Language. 
        Define a linguagem do documento. Vai ser identificado pelo browser para traduzir ou não a página
    -->
  <head>
    <meta charset="UTF-8" />
    <!--
    Meta = serve para representar varios tipos de meta-dados
    charseat="utf-8" = serve para dizer que o documento aceita a maior parte de caracteres possivel
    -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--
        A configuação acima do meta, diz que o conteúdo da página será visível
        tanto em dispositivos móveis como em desktops.
    -->
    <title>Anatomia do documento</title>
  </head>
  <body>
    <h1>Ajuste de rota</h1>
    <p>A migração de um <b>engenheiro</b> para a área de tecnologia.</p>
  </body>
</html>
```

# FAVICON

```html
<!--  <link> para ícones personalizados -->

<!-- favicon básico -->
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
    content="Um website para iniciantes em programação"
  />
  <!--  description serve para a descrição do website na busca do Google -->
  <meta name="robots" content="index, follow" />
  <!--  fala para os robos de busca indexarem e seguir links dentro da página -->
  <meta name="robots" content="noindex, nofollow" />
  <!--  fala para os robos de busca não indexarem e não seguir links dentro da página -->
</head>
```

# META SOCIAL

```html
<!-- 
  <meta> redes sociais
-->

<head>
  <!-- Open Graph (og): facebook -->
  <meta
    property="og:image"
    content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg"
  />
  <!-- para buscar uma imagem -->
  <meta
    property="og:description"
    content="Aqui vem um texto para ser mostrado ao compartilhar no facebook"
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
    Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar
    nossos documentos da web.
  </p>

  <!--
 Detalhes de contato

 <address>
-->

  <address>
    <p>Jeziel Dourado</p>
    <p><b>Santa Bárbara d'Oeste, SP.</b></p>
  </address></abbr
>
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

<code> document.quetySelector("boddy") </code>

<!--
      <pre>
          Blocos de código, pois essa tag mantém os espaços em branco
          e recuos que eu colocar no meu código
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
    Não precisam de conteúdo
-->
<input type="text" />
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
                - para onde itemos, quando clicar
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
<div style="color: green;">website / e-mail / telefone /</div>

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

```html
- posso colocar qualquer conteúdo Os diversos tipos de links abaixo levam ao
mesmo endereço -->

<h2 style="color: green;">Conteúdo dos hyperlinks</h2>

<a href="https://google.com" title="Ir para o Google">
  <h1>Google</h1>
  <p>Link para o site da Google</p>
  <img src="https://source.unsplash.com/random" alt="" />
</a>
```

## URLs E CAMINHOS DOS ARQUIVOS

```html
- URL - Uniform Resource Locator - https://google.com - Sequência de texto que
define onde algo está localizado na web - URL usam caminhos para encontrar
arquivos - Caminhos dos arquivos Onde, no explorador de arquivos, um recurso
está localizado -->

<p>Caminho dos arquivos</p>

<a href="hyperlinks.htm">Abrir documento Hyperlinks</a>
<!--
          Neste caso, o link foi direto para este documento.
      -->

<p>URLs</p>

<a href="https://google.com">Abrir o Google</a>

<!--
  Navegando pelos diretórios

  Como navegar pelos caminhos?

  - mesmo diretório
  - entrando em diretórios
  - saindo de diretórios
  - diretório raiz (root ou pai)
-->
<h2 style="color: green;">Navegando pelos diretórios</h2>

<a href="../elementos-genericos.html">arquivo na pasta anterior</a>
<br />
<a href="./hyperlinks.htm">arquivo no diretório raiz (este doc)</a>
<br />
<a href="listas.html">arquivo na mesma pasta</a>
<br />
<a href="../citações/citacoes2.html">arquivo na pasta citações</a>
```

# LISTAS

```html
    <!-- Listas não ordenadas -->

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

<!-- Listas ordenadas -->

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

<!--
    Listas de descrição

    <dl> - description list = lista de descrição
        <dt></dt> - description text = texto de descrição
        <dd></dd> - description = descrição em si

Objetivo: marcar um conjunto de itens e suas descrições
-->

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

```html
<!--
    URLs absulutos vs relativos

    - Absolutos
        -inclui protocolo e nome de domínio
            - http://google.com.br
        - sempre apontará para o mesmo local, pois é absoluto

    - Relativos
        - relativo à página aberta no momento
        - apontará para lugares diferentes
-->

<a href="google.com.br">relativo: ir para o Google</a>
<br />
<a href="https://google.com.br">absoluto: ir para o Google</a>
```

# CITAÇÕES

```html
<!--
    Citações
    <blockquote> (aspas)
-->

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
