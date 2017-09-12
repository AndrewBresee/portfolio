import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Gallery from './Gallery';
import Upload from './Upload';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/upload" component={Upload} />
      <Route path="/gallery" component={Gallery} />
    </Route>
    <Redirect from="/*" to="/home" />
  </Router>
);

export default Root;
