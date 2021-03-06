import React, { Component } from 'react';
import style from './RecipeForm.css';
import RecipeList from '../RecipeList/RecipeList.jsx'

class RecipeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: this.props.ingredients
    }
  }

  addIngredient(){
    let ingredients = this.state.ingredients
    ingredients.push({id: Date.now(), flavor:'', amount:''})
    this.setState(
      {ingredients: ingredients}
      )
  }
  ingredientFlavorUpdate(i,e){
    let ingredient = this.state.ingredients[i]
    ingredient.flavor = e.target.value
    this.setState(this.state)
  }

  ingredientAmountUpdate(i,e){
    let ingredient = this.state.ingredients[i]
    ingredient.amount = e.target.value
    this.setState(this.state)
  }



  render() {
    const ingredientsForm = this.state.ingredients.map((ingredient, i)=>(
      <Ingredient amount={ingredient.amount}
                  flavor={ingredient.flavor}
                  key={ingredient.id}
                  ingredientFlavorUpdate={this.ingredientFlavorUpdate.bind(this,i)}
                  ingredientAmountUpdate={this.ingredientAmountUpdate.bind(this,i)}
                  />
      ))


    return(
      <div className="bigmama">
      <div className="recipeFormBox">
      <form onSubmit="">
        Recipe Name: <input className="recipeNameInput"
                            type="text"
                            placeholder="Enter Recipe Name"
                            name="recipeName" required="required"
                            onChange={this.props.updateRecipeName}
                            /><br/><br/>

        Bottle Size: <input className="sizeInput"
                            type="number" step="5"
                            placeholder="(ml)"
                            min="10" max="100"
                            name="size"
                            required="required"
                            onChange={this.props.updateSize}
                            />ml<br/><br/>

        Nicotine Level: <input className="nicotineInput"
                                type="number"
                                step="1"
                                placeholder="nic"
                                min="0" max="24"
                                name="nicotine"
                                required="required"
                                onChange={this.props.updateNicotine}
                                /><br/><br/>

        <button className="addFlavor"
                onClick={this.addIngredient.bind(this)}>+</button>add another ingredient <br/>
      </form>
        {ingredientsForm}
        <button className="addRecipeBtn"
                onClick={this.props.postRecipe}>Add to My Recipes</button>
      </div>
         <div className="personalRecipeFormBox">

        <RecipeList
            recipes={this.props.recipes}
            deleteRecipe={this.props.deleteRecipe}
        />

         </div>
      </div>
    )
  }
}
const Ingredient = (props)=> (
  <div>
    Flavor: <input className="flavorInput"
                    type="text"
                    placeholder="Ingredient Name"
                    name="ingredients[][flavor]"
                    required="required"
                    value={props.flavor}
                    onChange={props.ingredientFlavorUpdate}
                    />
    Amount: <input className="measurementInput"
                    type="number"
                    step=".1"
                    placeholder="Amount of Flavor"
                    name="ingredients[][amount]"
                    required="required"
                    value={props.amount}
                    onChange={props.ingredientAmountUpdate}
                    />
  </div>
  )


export default RecipeForm;
