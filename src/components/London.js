import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sunny from '../images/sunny.svg';
// import rainy from '../images/rainy.svg';
// import cloudy from '../images/cloudy.svg';

class London extends Component {
  render() {
    return (
      <div className="weather-capital-container" id="london">
        <div className="weather-capital">
          <p>London</p>
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

London.propTypes = {
  london: PropTypes.string,
}.isRequired;

export default London;
