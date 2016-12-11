// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import RecipeForm from './RecipeForm/RecipeForm.jsx'


// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      signupForm: {
        username: '',
        password: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      currentToken: ''
    }
  }

  addIngredient(e){
    console.log('add new ingredient')
  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    //skylar pls remember to consolelog fieldsArr
    this.setState({
      signupForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      loginForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  postSignup() {
    console.log('clicked')
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signupForm.username,
        password: this.state.signupForm.password
      })
    })
    .then((data) => {
      this.setState({
        signupForm: {
          username: '',
          password: ''
        }
      })
    })
  }

  postLogin() {
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.loginForm.username,
        password: this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        loginForm: {
          username: '',
          password: ''
        }
      }, () => {
        console.log(this.state)
      })
    })
  }

  logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    })
  }
  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to VapeNique</h1>


            <Signup
              trackSignupForm={this.trackSignupForm.bind(this)}
              postSignup={this.postSignup.bind(this)}
            />

            <Login
              trackLoginForm={this.trackLoginForm.bind(this)}
              postLogin={this.postLogin.bind(this)}
              logout={this.logout.bind(this)}
            />
        </header>

            <RecipeForm
              addIngredient={this.addIngredient.bind(this)}
            />

        <div>
        </div>

      </div>


    );
  }
}

export default App;
