import React from 'react';

import Navigation from './Navigation';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Google Photo Upload</h2>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
