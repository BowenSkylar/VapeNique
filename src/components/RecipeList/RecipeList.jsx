import React, { Component } from 'react';
import style from './RecipeList.css';
import RecipeItem from '../RecipeItem/RecipeItem.jsx'


class RecipeList extends Component {
  constructor(props){
    super(props);
}

showRecipe() {
  // console.log('*************' + props.recipes)
return this.props.recipes.map((recipe,i) =>
    <RecipeItem
      key={i}
      recipe_name={recipe.recipe_name}
      nicotine={recipe.nicotine}
      size={recipe.size}
      deleteRecipe={this.props.deleteRecipe}
    />);
}

render(){
  return(
    <div className="recipeList">
        <h1>Your Recipes</h1>
          {this.showRecipe()}
    </div>
    );
  }
}
export default RecipeList;
