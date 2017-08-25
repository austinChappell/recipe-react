import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.showForm?'hide':''}>
        <Recipe moreRecipes={this.props.moreRecipes} />
      </div>
    )
  }
}

export default RecipeBox;
