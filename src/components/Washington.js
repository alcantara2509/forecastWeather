import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sunny from '../images/sunny.svg';
// import rainy from '../images/rainy.svg';
// import cloudy from '../images/cloudy.svg';

class Washington extends Component {
  render() {
    return (
      <div className="weather-capital-container" id="washington">
        <div className="weather-capital">
          <p>Washington</p>
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

Washington.propTypes = {
  washington: PropTypes.string,
}.isRequired;

export default Washington;
