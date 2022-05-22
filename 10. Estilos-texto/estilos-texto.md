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