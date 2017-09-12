import React from 'react';

import Navigation from './Navigation';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>React Chat App</h2>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
