import React, { Component } from 'react';
import style from './Signup.css';


class Signup extends Component {
  render() {
    return(
      <div>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Password"/>
        <button className="signupBtn" onClick={this.props.postSignup}>Sign Up</button>
      </div>
    )
  }
}

export default Signup;
