import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button onClick={this.props.postLogin}>Login</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default Login;
