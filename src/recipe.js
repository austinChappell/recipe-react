import React, { Component } from 'react';
import RecipeInfo from './recipe-info';

class Recipe extends Component {
  render() {
    const recipes = this.props.moreRecipes;
    // console.log('more recipes', this.props.moreRecipes);
    return (
      <div>
        {
          recipes.map((recipe, index) => {
            return (
              <RecipeInfo
                key={index}
                title={recipe.title}
                detailsArray={recipe.detailsArray}
                showIngredients={this.props.showIngredients}
                showEditForm={this.showEditForm}
                callEditForm={this.props.callEditForm}
                deleteRecipe={this.props.deleteRecipe} />
            )
          })
        }
      </div>
    )
  }
}

export default Recipe;
