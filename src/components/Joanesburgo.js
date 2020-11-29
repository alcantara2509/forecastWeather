import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sunny from '../images/sunny.svg';
// import rainy from '../images/rainy.svg';
// import cloudy from '../images/cloudy.svg';

class Joanesburgo extends Component {
  render() {
    return (
      <div className="weather-capital-container" id="joanesburgo">
        <div className="weather-capital">
          <p>Joanesburgo</p>
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

Joanesburgo.propTypes = {
  joanesburgo: PropTypes.string,
}.isRequired;

export default Joanesburgo;
