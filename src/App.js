import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import MainLocation from './containers/MainLocation/MainLocation';
import WeatherLongTerm from './containers/WeatherLongTerm/WeatherLongTerm';
import WeatherToday from './containers/WeatherToday/WeatherToday';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUmbrella, faCloudSunRain, faCloudMoonRain, faMapMarkerAlt, faDizzy } from '@fortawesome/free-solid-svg-icons';
library.add(faUmbrella, faCloudSunRain, faCloudMoonRain, faMapMarkerAlt, faDizzy);

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
      <Footer />
    </div>
  );
};

export default App;
