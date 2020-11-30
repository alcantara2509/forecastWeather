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

Como vimos anteriormente, o Redux é uma ferramenta excelente para armazenar os estados da aplicação e utilizá-los apenas onde for necessário.

Ele deixa mais claro onde cada informação está, evitando erros e o famoso ***prop drilling***. Além disso, ele torna o código mais limpo, legível e escalável.

E vale lembrar que o Redux, em conjunto com o React, é uma das ferramentas de gerenciamento de estado mais utilizadas no mercado de trabalho. 

# Conteúdos 
#### *tempo sugerido para realização: 30 minutos*

## O que você precisa para começar?

Primeiramente, vamos criar uma aplicação React.

```js
npx create-react-app my-app
```

Agora, vamos instalar as dependências do Redux.

```js
npm install --save redux react-redux
```

O React Redux é uma biblioteca que faz a conexão entre o React e o Redux.


## Fluxo de dados no Redux

Você sabe todas as etapas do Redux? No infográfico abaixo, mostramos como funciona o fluxo de dados nessa ferramenta.

[Infográfico]

Para começar, precisamos criar um Store. Ele é um grande objeto JavaScript que armazena todos os estados da aplicação.

```js
import { createStore } from 'redux';

const store = createStore();

export default store;
```

Depois, vamos configurar o Provider. É ele que vai disponibilizar as informações contidas na Store para os outros componentes.

No arquivo `App.js`

```js
import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          // componentes aqui
        </Provider>
      </div>
    );
  }
}

export default App;
```

Agora, vamos criar um novo componente.

```js

```

Depois de criar o componente, é preciso criar um método para buscar a informação do estado e trazer para o componente via Props. Esse método é o mapStateToProps.

```js
const mapStateToProps = state => ({
  list: state.listReducer});
```

O próximo passo é criar uma Action - um objeto JavaScript derivado de uma interação do usuário que deve ser atualizado no estado.

```js
export const addAssignment = (value) => ({type: 'ADD_ELEMENT', value });
```

Uma vez que a Action foi realizada, precisamos criar um Reducer para receber essa ação e retornar um novo estado.

```js
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;
```

Esses dados filtrados pelo Reducer precisam ser enviados para o Store através do Dispatch.

```js
const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});
```



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
