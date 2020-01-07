import React from 'react';
import './App.css';
import PoweredByDarkSky from './assets/images/poweredby-oneline-darkbackground.png';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import MainLocation from './containers/MainLocation/MainLocation';
import WeatherLongTerm from './containers/WeatherLongTerm/WeatherLongTerm';
import WeatherToday from './containers/WeatherToday/WeatherToday';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUmbrella, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faUmbrella, faMapMarkerAlt);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
      <Switch>
        <Route path="/weather-today" component={WeatherToday} />
        <Route path="/weather-long-term" component={WeatherLongTerm} />
        <Route path="/" component={MainLocation} />
      </Switch>
      </main>
      <footer className="App__footer">
        <div className="App__footer__container">
          <p>footer text placeholder</p>
          <a className="App__footer-powered-by-dark-sky" href="https://darksky.net/poweredby/" target="blank">
            <img src={PoweredByDarkSky} alt="Powered by Dark Sky" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
