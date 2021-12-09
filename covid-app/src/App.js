import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CountriesPageContainer from './containers/CountriesPageContainer';
import WorldPageContainer from './containers/WorldPageContainer';
import AboutPage from './components/AboutPage';
import CountriesService from './services/countries.service';
import { setItemToSession } from './utils/functions';
import ContactPage from './components/ContactPage';

function App() {
  const getCountriesData = () => {
    CountriesService.getCountriesNames()
      .then((data) => {
        data.sort((a, b) => a.Country.localeCompare(b.Country));
        setItemToSession('countries', JSON.stringify(data));
      })
      .catch(() => alert('Something goes wrong..'));
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={WorldPageContainer} />
          <Route path="/countries" exact component={CountriesPageContainer} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
