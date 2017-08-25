import React, { Component } from 'react';
import RecipeHeader from './recipe-header';
import RecipeDetails from './recipe-details';

class RecipeInfo extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="single-recipe">
        <RecipeHeader title={this.props.title} showIngredients={this.props.showIngredients} />
        <RecipeDetails detailsArray={this.props.detailsArray} showTheIngredients={this.props.showTheIngredients} />
      </div>
    )
  }
}

export default RecipeInfo;
