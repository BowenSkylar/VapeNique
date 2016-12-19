import React, { Component } from 'react';
import style from './RecipeItem.css';

const RecipeItem = props => (
  <div className="recipeItem">
    <img className="trashcan" onClick={this.props.deleteRecipe} src="http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png"/>
    <p>Recipe Name: {props.recipe_name}</p>
    <p>Nicotine Level: {props.nicotine}</p>
    <p>Size: {props.size}</p>
  </div>)

export default RecipeItem;
