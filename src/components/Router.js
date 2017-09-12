import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import App from './App';
import Home from './Home';
import Chat from './Chat';
import Login from './Login';
import Profile from './Profile';

// http://redux.js.org/docs/advanced/UsageWithReactRouter.html

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/profile" component={Profile} />
    </Route>
    <Redirect from="/*" to="/home" />
  </Router>
);

export default Root;
