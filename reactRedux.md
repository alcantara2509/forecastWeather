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

Como vimos anteriormente, o Redux é uma ferramenta excelente para armazenar os estados da aplicação e utilizá-los apenas onde for necessário. Ele deixa mais claro onde cada informação está, evitando erros e o famoso ***prop drilling***. Além disso, ele torna o código mais limpo, legível e escalável.

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

O React-Redux é uma biblioteca que faz a conexão entre o React e o Redux.


## Fluxo de dados no Redux

Você sabe todas as etapas do Redux? No infográfico abaixo, mostramos como funciona o fluxo de dados nessa ferramenta.

![Fluxo do Redux](https://raw.githubusercontent.com/alcantara2509/forecastWeather/master/infografico-redux.png)

Para começar, precisamos criar um Store. Ele é um grande objeto JavaScript que armazena todos os estados da aplicação.

Crie um novo arquivo dentro do `/src` com o nome `store.js`.

- Importe a função `createStore` do Redux
- Em seguida, crie uma constante `store` que recebe a função `createStore`
- Agora, exporte a `store`

```js
import { createStore } from 'redux';
import resultReducer from './reducer'

const store = createStore(resultReducer);

export default store;

```

Depois, vamos configurar o Provider. É ele que vai disponibilizar as informações contidas na Store para os outros componentes.

No arquivo `App.js`, faça as seguintes alterações:

- Importe o método `Provider` do *react-redux*
- Importe a `store`
- Inclua a tag `Provider` envolvendo todos os componentes que receberão as informações
- A tag `Provider` recebe a propriedade `store`

```js
import React from 'react';
import Calculator from './Calculator';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Calculator />
        </Provider>
      </div>
    );
  }
}

export default App;

```

Agora, vamos criar dois novos componentes.

- Na pasta `/src`, crie um arquivo `Calculator.js` e outro `Result.js`

```js
// src/Calculator.js

import React, { Component } from 'react';
import Result from './Result';

class Calculator extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    }
  }

  handleChange({ target }) {
    const { name, value } = target; 
    this.setState({ [name]: value })
  };

  handleClick() {
    const { numberOne, numberTwo } = this.state;
    const result = parseInt(numberOne) + parseInt(numberTwo)
    this.setState({ result: result })

    const { dispatchResult } = this.props;
    dispatchResult(result);
  };

  render() {
    return (
      <>
        <input
          type="number"
          onChange={ this.handleChange }
          name="numberOne"
          value={this.numberOne}
        />
        <input
          type="number"
          onChange={ this.handleChange }
          name="numberTwo"
          value={this.numberOne}
        />
        <button type="button" onClick={ this.handleClick }>Somar</button>
        <Result />
      </>
    )
  }
}

export default Calculator;

```

```js
// src/Result.js

import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { result } = this.props
    console.log(result);
    return (
      <>
        <h1>{result}</h1>
      </>
    )
  }
}

export default Result;

```

Depois de criar o componente, é preciso criar um método para buscar a informação do estado e trazer para o componente via Props. Esse método é o `mapStateToProps`.

- No componente `Result.js` crie a função `mapStateToProps()`, que recebe como parâmetro o estado e retorna a informação desejada.

```js
const mapStateToProps = (state) => ({ result: state.result });

```

O próximo passo é criar uma Action - um objeto JavaScript derivado de uma interação do usuário que deve ser atualizado no estado.

- Crie um novo arquivo `action.js`
- Por convenção, a action recebe uma chave `type`. Não obstante, ela também pode receber quantas chaves forem necessárias
- Inclua a chave `result` com o valor `result`

```js
export const SEND_RESULT = 'SEND_RESULT';

export const sendResult = (result) => ({
  type: SEND_RESULT,
  result,
});

```

Uma vez que a Action foi realizada, precisamos criar um Reducer para receber essa ação e retornar um novo estado.

- Crie uma função que recebe como parâmetro um estado inicial e uma Action
- A função deve verificar se o Reducer recebeu uma Action. Caso positivo, retorna um novo estado com as informações recebidas. Caso negativo, retorna o estado

```js
import { SEND_RESULT } from './action.js'

const INITIAL_STATE = { result: 0, };

function resultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_RESULT:
      return {...state, result: action.result};
    default:
      return state;
  }
}

export default resultReducer;

```

Esses dados filtrados pelo Reducer precisam ser enviados para o Store através do Dispatch.

- No arquivo `Calculator.js` crie a função `mapDispatchToProps()` logo antes do export
- A função recebe como parâmetro um `dispatch` e retorna um objeto cujo valor é uma callback

```js
const mapDispatchToProps = (dispatch) => ({
  dispatchResult: (result) => dispatch(sendResult(result)),
});

export default Calculator;

```

Agora precisamos criar a chamada da callback.

- Na função de click no arquivo `Calculator.js`, insira a função que chama o dispatch

```js
handleClick() {
    const { numberOne, numberTwo } = this.state;
    const result = parseInt(numberOne) + parseInt(numberTwo)
    this.setState({ result: result })

    const { dispatchResult } = this.props;
    dispatchResult(result);
  };
  
```

Por fim, precisamos vincular o React com o Redux através do Connect.

- A sintaxe do *connect* segue o seguinte padrão:
  `connect()();`
- O primeiro parênteses recebe as funções `mapStateToProps` e `mapDispatchToProps`. Caso tenha sido utilizada apenas uma delas, coloque `null` no lugar da outra
- No arquivo `Calculator.js`, insira o `connect` com apenas o `mapDispatchToProps`
- No arquivo `Result.js`, insira o `connect` com apenas o `mapStateToProps`
- Lembre-se de importar o connect do `'react-redux'`

```js
// src/Calculator.js
export default connect(null, mapDispatchToProps)(Calculator);

```

```js
// src/Result.js
export default connect(mapStateToProps, null)(Result);

```

### Ao final de todas essas etapas, seu código deve ficar assim:

```js
// src/store.js

import { createStore } from 'redux';
import resultReducer from './reducer'

const store = createStore(resultReducer);

export default store;

```

```js
// src/App.js

import React from 'react';
import Calculator from './Calculator';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Calculator />
        </Provider>
      </div>
    );
  }
}

export default App;

```

```js
// src/Result.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  render() {
    const { result } = this.props
    console.log(result);
    return (
      <>
        <h1>{result}</h1>
      </>
    )
  }
}

const mapStateToProps = (state) => ({ result: state.result });

export default connect(mapStateToProps, null)(Result);

```

```js 
// src/action.js

export const SEND_RESULT = 'SEND_RESULT';

export const sendResult = (result) => ({
  type: SEND_RESULT,
  result,
});

```

```js
// src/reducer.js

import { SEND_RESULT } from './action.js'

const INITIAL_STATE = { result: 0, };

function resultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_RESULT:
      return {...state, result: action.result};
    default:
      return state;
  }
}

export default resultReducer;

```

```js
// src/Calculator.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import { sendResult } from './action'

class Calculator extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    }
  }

  handleChange({ target }) {
    const { name, value } = target; 
    this.setState({ [name]: value })
  };

  handleClick() {
    const { numberOne, numberTwo } = this.state;
    const result = parseInt(numberOne) + parseInt(numberTwo)
    this.setState({ result: result })

    const { dispatchResult } = this.props;
    dispatchResult(result);
  };

  render() {
    return (
      <>
        <input
          type="number"
          onChange={ this.handleChange }
          name="numberOne"
          value={this.numberOne}
        />
        <input
          type="number"
          onChange={ this.handleChange }
          name="numberTwo"
          value={this.numberOne}
        />
        <button type="button" onClick={ this.handleClick }>Somar</button>
        <Result />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchResult: (result) => dispatch(sendResult(result)),
});

export default connect(null, mapDispatchToProps)(Calculator);

```

# Exercícios 
#### *tempo sugerido para realização: 60 minutos*

## Agora a prática

Você irá desenvolver um aplicativo web para previsão do tempo de algumas cidades importantes do mundo. 

Antes de começar, clone [esse repositório](https://github.com/alcantara2509/forecastWeather/).

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
