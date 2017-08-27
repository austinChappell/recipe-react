import React, { Component } from 'react';
import EditRecipe from './AddRecipe.js';
import RecipeHeader from './recipe-header';
import RecipeDetails from './recipe-details';

class RecipeInfo extends Component {
  constructor() {
    super();

    this.state = {
      showIngredients: false,
      showEditForm: false
    }
  }
  showIngredients = (evt) => {
    console.log('clicked');
    this.setState({
      showIngredients: !this.state.showIngredients
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="single-recipe">
        <RecipeHeader
          title={this.props.title}
          showIngredients={this.showIngredients} />
        <RecipeDetails
          title={this.props.title}
          detailsArray={this.props.detailsArray}
          showIngredients={this.state.showIngredients}
          callEditForm={this.props.callEditForm} />
        <EditRecipe showEditForm={this.state.showEditForm} />
      </div>
    )
  }
}

export default RecipeInfo;
