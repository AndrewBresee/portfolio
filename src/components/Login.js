import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
  successGoogle() {
    console.log('successGoogle')
  }
  failureGoogle() {
    console.log('failure')
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <GoogleLogin
          clientId="temp"
          buttonText="Login"
          onSuccess={this.successGoogle}
          onFailure={this.failureGoogle}
        />
      </div>
    );
  }
}
