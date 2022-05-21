# Vídeo

tag <vídeo>

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

<audio>

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

site referencia para imagens livres de direitos autorais: source.unsplash.com

<img>

- src: tag que procura a imagem (link)

- alt: caso a imagem não for encontrada, usa-se uma alternativa, pode conter um texto para auxiliar a explicar o que era aquela imagem.

- title: texto sobre a imagem quando se descansa o mouse encima da mesma.

- width: largura
- height: altura
IMPORTANTE: caso não se saiba a proporção da imagem, colocar apenas uma medida (altura ou largura) para que não se tenha uma imagem esticada.

- adicionando link: através da tag <a>.

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

<figure>

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

SVG - Scalable Vector Graphics <svg>

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



 