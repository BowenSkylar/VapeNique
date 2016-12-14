import React, { Component } from 'react';
import style from './RecipeItem.css';

const RecipeItem = props => (
  <div className="recipeItem">
    <p>Recipe Name: {props.recipe_name}</p>
    <p>Nicotine: {props.nicotine}</p>
    <p>Size: {props.size}</p>
  </div>)

export default RecipeItem;
