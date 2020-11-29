import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rainy from '../images/rainy.svg';
import sunny from '../images/sunny.svg';
import cloudy from '../images/cloudy.svg';

class London extends Component {
  handleIconsWeather() {
    const { london } = this.props;
    if (london === 'sunny') {
      return sunny;
    }
    if (london === 'rainy') {
      return rainy;
    }
    if (london === 'cloudy') {
      return cloudy;
    }
  }

  render() {
    return (
      <div className="weather-capital-container" id="london">
        <div className="weather-capital">
          <p>London</p>
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

const mapStateToProps = ({ london }) => ({
  london,
});

London.propTypes = {
  london: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(London);
