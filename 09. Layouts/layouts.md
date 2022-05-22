# Page Layouts

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