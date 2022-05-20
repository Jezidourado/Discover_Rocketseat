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
  color: rgba(34.6 12 64 / 30%;

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
  )
}
```
## Referência

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