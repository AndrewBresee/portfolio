import React from 'react';
import GoogleLogin from 'react-google-login';
import config from '../config';

export default class Login extends React.Component {
  successGoogle(event) {
    console.log('successGoogle with event: ', event)
  }
  failureGoogle(event) {
    console.log('failure because of: ', event)
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <GoogleLogin
          clientId={config.GoogleAPIKey}
          buttonText="Login"
          onSuccess={this.successGoogle}
          onFailure={this.failureGoogle}
        />
      </div>
    );
  }
}
