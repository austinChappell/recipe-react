import React, { Component } from 'react';
import RecipeHeader from './recipe-header';
import RecipeDetails from './recipe-details';

class RecipeInfo extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <RecipeHeader title={this.props.title} />
        <RecipeDetails detailsArray={this.props.detailsArray} />
      </div>
    )
  }
}

export default RecipeInfo;
