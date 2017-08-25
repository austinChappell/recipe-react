import React, { Component } from 'react';

class RecipeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="recipe-title" onClick={this.props.showIngredients}>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default RecipeHeader;
