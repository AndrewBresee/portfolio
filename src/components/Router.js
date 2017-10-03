import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import App from './App';
import Home from './Home';
import Pictures from './Pictures';
import About from './About';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="pictures" component={Pictures} />
      <Route path="about" component={About} />
    </Route>
    <Redirect from="/*" to="/home" />
  </Router>
);

export default Root;
