import React, { Component } from 'react';
import style from './RecipeForm.css';

class RecipeForm extends Component {
  render() {
    return(
      <div className="recipeFormBox">
        Recipe Name: <input className="recipeNameInput" type="text" placeholder="Enter Recipe Name" name="recipeName" required="required"/><br/><br/>
        Bottle Size: <input className="sizeInput" type="number" step="5" placeholder="(ml)" min="10" max="100" name="size" required="required"/>ml<br/><br/>

        Nicotine Level: <input className="nicotineInput" type="number" step="1" placeholder="nic" min="0" max="24" name="nicotine" required="required"/><br/><br/>

        <button className="addFlavor" onClick={this.props.addIngredient}>+</button>add another ingredient <br/>
        Flavor: <input className="flavorInput" type="text" placeholder="Ingredient Name"name="ingredient" required="required"/>
        Amount: <input className="measurementInput" type="number" step=".1" placeholder="Amount of Flavor"  name="measurement" required="required"/>

      </div>
    )
  }
}

export default RecipeForm;
