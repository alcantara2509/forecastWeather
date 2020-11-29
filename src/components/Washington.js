import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rainy from '../images/rainy.svg';
import sunny from '../images/sunny.svg';
import cloudy from '../images/cloudy.svg';

class Washington extends Component {
  handleIconsWeather() {
    const { washington } = this.props;
    if (washington === 'sunny') {
      return sunny;
    }
    if (washington === 'rainy') {
      return rainy;
    }
    if (washington === 'cloudy') {
      return cloudy;
    }
  }

  render() {
    return (
      <div className="weather-capital-container" id="washington">
        <div className="weather-capital">
          <p>Washington</p>
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

const mapStateToProps = (state) => ({
  washington: state.weatherReducer.washington,
});

Washington.propTypes = {
  washington: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Washington);
