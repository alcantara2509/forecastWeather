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
