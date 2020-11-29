import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rainy from '../images/rainy.svg';
import sunny from '../images/sunny.svg';
import cloudy from '../images/cloudy.svg';

class Joanesburgo extends Component {
  handleIconsWeather() {
    const { joanesburgo } = this.props;
    if (joanesburgo === 'sunny') {
      return sunny;
    }
    if (joanesburgo === 'rainy') {
      return rainy;
    }
    if (joanesburgo === 'cloudy') {
      return cloudy;
    }
  }

  render() {
    return (
      <div className="weather-capital-container" id="joanesburgo">
        <div className="weather-capital">
          <p>Joanesburgo</p>
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

const mapStateToProps = ({ joanesburgo }) => ({
  joanesburgo,
});

Joanesburgo.propTypes = {
  joanesburgo: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Joanesburgo);
