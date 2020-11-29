# O que vamos Aprender?

Na aula passada aprendemos sobre o **Redux**, uma biblioteca externa de gerenciamento de estado. Vimos as principais etapas para o seu funcionamento *fora do React*. Hoje vamos aprender a *conectar* o Redux ao React!

## Você será capaz de:

Implementar seus conhecimentos em **Redux** no **React**:

- Criando um **store** utilizando `createStore()`
- Criando um **reducer** utilizando `switch`
- Criando **actions** para alimentar o *reducer*
- Criando **dispatchers** utililzando `mapDispatchToProps()`
- Retornando elementos utilizando `mapStateToProps()`
- **Conectando** o *Redux* aos componentes *React*

# Por que isso é importante?

Como vimos anteriormente, o Redux é uma ferramenta excelente para armazenar os estados da aplicação e utilizá-los apenas onde for necessário. Ele deixa mais claro onde cada informação está, evitando erros e a famosa ***props drilling***, tornando o código mais limpo, legível e escalável.  Além disso, vale lembrar que o Redux, em conjunto com o React, é uma das ferramentas de gerenciamento de estado mais utilizadas no mercado de trabalho. 

# Conteúdos 
#### *tempo sugerido para realização: 30 minutos*

# Exercícios 
#### *tempo sugerido para realização: 60 minutos*

## Agora a prática

Você irá desenvolver um aplicativo web para previsão do tempo de algumas cidades importantes do mundo.

### Exercício 1 - Previsão do tempo

- Nesse exercício você irá receber informações do clima de quatro cidades via *props* e deverá retornar corretamente o ícone correspondente.

  Exemplo: Se for "sunny”, deve retornar o icone "sunny.svg".

- Os arquivos a serem alterados nesse exercício são: `Brasilia.js, Joanesburgo.js, London.js` e `Washington.js` na pasta `/components`.

### Exercício 2 - Configurando o Redux

- Nesse exercício você deverá refatorar o arquivo `src/pages/WeatherForecast.js` de modo que ele envie as informações de clima do estado do componente para o estado do redux.

- Implemente o ***store*** no arquivo `src/store/index.js`, a ***action*** no arquivo `src/action/index.js`, o ***reducer*** no arquivo `src/reducers/index.js`, o ***dispacth*** e o ***connect*** no arquivo `src/pages/WeatherForecast.js`.

### Exercício 3 - Utilizando o State

- Nesse exercício você deverá refatorar os componentes das cidades, para que eles busquem as informações de clima no estado do Redux.

- Os arquivos a serem alterados nesse exercício são: `Brasilia.js, Joanesburgo.js, London.js, Washington.js` na pasta `/components`.
