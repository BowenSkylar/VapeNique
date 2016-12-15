import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import RecipeForm from './RecipeForm/RecipeForm.jsx'
import Chat from './Chat/Chat.jsx';
import RecipeList from './RecipeList/RecipeList.jsx';
//user authentication help from Dan Pease
// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
    recipes:[],
    userInput: {
      recipeName: '',
      size: '',
      nicotine: ''
    },
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
   updateRecipeName(e){
    this.setState({
      userInput: {
        recipeName: e.target.value,
        size: this.state.userInput.size,
        nicotine: this.state.userInput.nicotine
      }
    })
  }

   updateSize(e){
    this.setState({
      userInput: {
        recipeName: this.state.userInput.recipeName,
        size: e.target.value,
        nicotine: this.state.userInput.nicotine
      }
    })
  }

    updateNicotine(e){
    this.setState({
      userInput: {
        recipeName: this.state.userInput.recipeName,
        size: this.state.userInput.size,
        nicotine: e.target.value
      }
    })
  }

  addIngredient(e){
    console.log('add new ingredient')
  }

//user authentication help from Dan Pease
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
    this.getRecipes();
      })
    })
  }


//react function to fetch
postRecipe(event) {
    console.log('add recipe post')
    fetch('/db/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.currentToken}`
      },
      body: JSON.stringify({
        recipeName: this.state.userInput.recipeName,
        size: this.state.userInput.size,
        nicotine: this.state.userInput.nicotine
      })
    })
    .then((data) => {
      this.setState({
        userInput: {
        recipeName: '',
        size: '',
        nicotine: ''
      }
      })
      this.getRecipes()
    })
  }

////////////////////////////////////////////////////////////////
getRecipes() {
    console.log('getting all recipes for user')
    fetch('/db/recipes', {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.currentToken}`
      }
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      this.setState({
        recipes:data
      })
    });
  }



////////////////////////////////////////////////////////////////
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
            {/*<h5>Home of Your Personal E-Juice Recipes!</h5>*/}


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
              ingredients={[]}
              updateRecipeName={event => this.updateRecipeName(event)}
              updateSize={event => this.updateSize(event)}
              updateNicotine={event => this.updateNicotine(event)}
              postRecipe={event => this.postRecipe(event)}
              getRecipes={event => this.getRecipes()}
              recipes={this.state.recipes}
            />
{/*WEB SOCKET HELP COURTSEY TO SANG MIN NA*/}
     <div className="socket-container">
          <Chat username={this.state.loginForm.username}/>
        </div>

        <footer>
        <div
            id="open-chat"
            onClick={() => {
                      document.querySelector('.message-popup').style.display='block';
                    }}
          >
          Open Flavor Chat!
          </div>
        </footer>
      </div>




    );
  }
}


export default App;
