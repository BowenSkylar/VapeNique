import React, { Component } from 'react';
import style from './Login.css';

//user authentication help from Dan Pease
class Login extends Component {
  render() {
    return(
      <div>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button className="loginBtn" onClick={this.props.postLogin}>Login</button>
        <button className="logoutBtn" onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default Login;
