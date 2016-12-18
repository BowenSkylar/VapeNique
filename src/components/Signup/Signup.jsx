import React, { Component } from 'react';
import style from './Signup.css';

// <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Username"/>
//         <input onChange={this.props.trackSignupForm} type="text" placeholder="Desired Password"/>
//         <button className="signupBtn" onClick={this.props.postSignup}>Sign Up</button>


class Signup extends Component {
  render() {
    return(
      <div>
        <h5>Instructions: <br/></h5>
        <p>Please Log in with <br/>
        Username: yo & Password: yo</p>
      </div>
    )
  }
}

export default Signup;
