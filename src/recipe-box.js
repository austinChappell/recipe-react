import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeBox extends Component {
  render() {
    return (
      // <div className={this.props.showForm?'hide':'recipe-box'}>
      <div className='recipe-box'>
        <h1 className="recipe-box-title">All Recipes</h1>
        <Recipe
          moreRecipes={this.props.moreRecipes}
          showTheIngredients={this.props.showTheIngredients}
          callEditForm={this.props.callEditForm}
          deleteRecipe={this.props.deleteRecipe} />
      </div>
    )
  }
}

export default RecipeBox;
