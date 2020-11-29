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

const mapStateToProps = (state) => ({
  brasilia: state.weatherReducer.brasilia,
});

Brasilia.propTypes = {
  brasilia: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Brasilia);
