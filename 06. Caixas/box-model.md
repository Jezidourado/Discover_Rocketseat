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

  