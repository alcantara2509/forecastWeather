import React, { Component } from 'react';
import Brasilia from '../components/Brasilia';
import Joanesburgo from '../components/Joanesburgo';
import London from '../components/London';
import Washington from '../components/Washington';
import './WeatherForecast.css';

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

  render() {
    const { brasilia, washington, london, joanesburgo } = this.state;
    return (
      <div className="weather-container">
        <Brasilia currentWeather={ brasilia } />
        <Washington currentWeather={ washington } />
        <London currentWeather={ london } />
        <Joanesburgo currentWeather={ joanesburgo } />
      </div>
    );
  }
}

export default WeatherForecast;
