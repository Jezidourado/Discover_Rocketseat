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

````html
<input type="time"/>
````

- **week** - trás a semana toda

````html
<input type="week"/>
````

IMPORTANTE: São campos que ainda não possuem um ótimo suporte, principalmente para navegadores como Safari.

Ficar de olho em https://caniuse.com