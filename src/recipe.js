import React, { Component } from 'react';
import RecipeInfo from './recipe-info';

class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const recipes = this.props.moreRecipes;
    // console.log('more recipes', this.props.moreRecipes);
    return (
      <div>
        {
          recipes.map((recipe, index) => {
            return (
              <RecipeInfo key={index} title={recipe.title} detailsArray={recipe.detailsArray} />
            )
          })
        }
      </div>
    )
  }
}

export default Recipe;
