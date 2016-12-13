import React, { Component } from 'react';
import style from './Signup.css';


class Signup extends Component {
  render() {
    return(
      <div>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <button className="signupBtn" onClick={this.props.postSignup}>Signup</button>
      </div>
    )
  }
}

export default Signup;
