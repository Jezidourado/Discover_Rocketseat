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
  autoplay = essas duas tags juntas reproduzem o vídeo automaticamente sem audio

- poster="imagem.jpg" = imagem de background na janela do video