import React, { Component } from 'react';
import style from './Signup.css';


class Signup extends Component {
  render() {
    return(
      <div>
      <h4>Instructions: Please Login In Using , Username : yo Password :yo</h4>
      </div>
    )
  }
}

export default Signup;



// <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Username"/>
// <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Password"/>
// <button className="signupBtn" onClick={this.props.postSignup}>Sign Up</button>
