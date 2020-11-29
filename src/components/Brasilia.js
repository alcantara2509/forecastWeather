import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sunny from '../images/sunny.svg';
// import rainy from '../images/rainy.svg';
// import cloudy from '../images/cloudy.svg';

class Brasilia extends Component {
  render() {
    return (
      <div className="weather-capital-container" id="brasilia">
        <div className="weather-capital">
          <p>Brasília</p>
        </div>
        <div className="current-weather">
          <img
            src={ sunny }
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
