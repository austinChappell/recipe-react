import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.showForm?'hide':'recipe-box'}>
        <h1 className="recipe-box-title">All Recipes</h1>
        <Recipe moreRecipes={this.props.moreRecipes} showIngredients={this.props.showIngredients} showTheIngredients={this.props.showTheIngredients} />
      </div>
    )
  }
}

export default RecipeBox;
