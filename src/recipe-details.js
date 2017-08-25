import React, { Component } from 'react';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.showTheIngredients?'show-ingredients':'hide'}>
        {this.props.detailsArray.map((ingredient, i) => {
          return (
            <span className="ingredient" key={i}>{ingredient}</span>
          )
        })}
      </div>
    )
  }
}

export default RecipeDetails;
