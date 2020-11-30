### Rodando os exercícios localmente

Para executar as aplicações que estão no repositório, tudo o que você precisa fazer é:

Instalar todo o necessário para a aplicação (`npm install`)

Carregar a aplicação (`npm start`)

## Enunciado dos exercícios

### Exercício 1 - Previsão do tempo

- Nesse exercício você irá receber informações do clima de quatro cidades via *props* e deverá retornar corretamente o ícone correspondente.

  Exemplo: Se for "sunny”, deve retornar o icone "sunny.svg".

- Os arquivos a serem alterados nesse exercício são: `Brasilia.js, Joanesburgo.js, London.js` e `Washington.js` na pasta `/components`.

``` js
// src/components/Brasilia.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rainy from '../images/rainy.svg';
import sunny from '../images/sunny.svg';
import cloudy from '../images/cloudy.svg';

class Brasilia extends Component {
  handleIconsWeather() {
    const { brasilia } = this.props;
    if (brasilia === 'sunny') {
      return sunny;
    }
    if (brasilia === 'rainy') {
      return rainy;
    }
    if (brasilia === 'cloudy') {
      return cloudy;
    }
  }

  render() {
    return (
      <div className="weather-capital-container" id="brasilia">
        <div className="weather-capital">
          <p>Brasília</p>
        </div>
        <div className="current-weather">
          <img
            src={ this.handleIconsWeather() }
            alt="weather icon"
            className="weather-icon"
          />
        </div>
      </div>
    );
  }
}

Brasilia.propTypes = {
  brasilia: PropTypes.string,
}.isRequired;

export default Brasilia;

// Faça o mesmo para as outras cidades.
```

### Exercício 2 - Configurando o Redux

- Nesse exercício você deverá refatorar o arquivo `src/pages/WeatherForecast.js` de modo que ele envie as informações de clima do estado do componente para o estado do redux.

- Implemente o ***store*** no arquivo `src/store/index.js`, a ***action*** no arquivo `src/action/index.js`, o ***reducer*** no arquivo `src/reducers/index.js`, o ***dispacth*** e o ***connect*** no arquivo `src/pages/WeatherForecast.js`.

```js
// src/store/index.js

import { createStore } from 'redux';
import weatherReducer from '../reducers';

const store = createStore(weatherReducer);

export default store;
```

```js
// src/action/index.js

export const CURR_WEATHER = 'CURR_WEATHER';

export const currWeather = (brasilia, washington, london, joanesburgo) => ({
  type: CURR_WEATHER,
  brasilia,
  washington,
  london,
  joanesburgo,
});
```

```js
// src/reducers/index.js

import { CURR_WEATHER } from '../actions';

const INITIAL_STATE = {
  brasilia: '',
  washington: '',
  london: '',
  joanesburgo: '',
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURR_WEATHER:
    return { ...state,
      brasilia: action.brasilia,
      washington: action.washington,
      london: action.london,
      joanesburgo: action.joanesburgo };
  default:
    return state;
  }
}

export default weatherReducer;
```

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Brasilia from '../components/Brasilia';
import Joanesburgo from '../components/Joanesburgo';
import London from '../components/London';
import Washington from '../components/Washington';
import './WeatherForecast.css';
import { currWeather } from '../actions';

class WeatherForecast extends Component {
  constructor() {
    super();

    this.state = {
      brasilia: 'sunny',
      washington: 'cloudy',
      london: 'rainy',
      joanesburgo: 'cloudy',
    };
  }

  componentDidMount() {
    const { dispatchWeather } = this.props;
    const { brasilia, washington, london, joanesburgo } = this.state;
    dispatchWeather(brasilia, washington, london, joanesburgo);
  }

  render() {
    return (
      <div className="weather-container">
        <Brasilia />
        <Washington />
        <London />
        <Joanesburgo />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchWeather:
  (brasilia,
    washington,
    london,
    joanesburgo) => dispatch(currWeather(brasilia, washington, london, joanesburgo)),
});

WeatherForecast.propTypes = {
  dispatchWeather: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WeatherForecast);
```

### Exercício 3 - Utilizando o State

- Nesse exercício você deverá refatorar os componentes das cidades, para que eles busquem as informações de clima no estado do Redux.

- Os arquivos a serem alterados nesse exercício são: `Brasilia.js, Joanesburgo.js, London.js, Washington.js` na pasta `/components`.

```js
// src/components/Brasilia.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rainy from '../images/rainy.svg';
import sunny from '../images/sunny.svg';
import cloudy from '../images/cloudy.svg';

class Brasilia extends Component {
  handleIconsWeather() {
    const { brasilia } = this.props;
    if (brasilia === 'sunny') {
      return sunny;
    }
    if (brasilia === 'rainy') {
      return rainy;
    }
    if (brasilia === 'cloudy') {
      return cloudy;
    }
  }

  render() {
    return (
      <div className="weather-capital-container" id="brasilia">
        <div className="weather-capital">
          <p>Brasília</p>
        </div>
        <div className="current-weather">
          <img
            src={ this.handleIconsWeather() }
            alt="weather icon"
            className="weather-icon"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ brasilia }) => ({
  brasilia,
});

Brasilia.propTypes = {
  brasilia: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Brasilia);

// Faça o mesmo para as outras cidades.
```

