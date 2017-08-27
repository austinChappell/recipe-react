import React, { Component } from 'react';

class RecipeDetails extends Component {
  render() {
    const ingredients = this.props.detailsArray;
    const title = this.props.title;
    return (
      <div className={this.props.showIngredients?'show-ingredients':'hide'}>
        {this.props.detailsArray.map((ingredient, i) => {
          return (
            <span className="ingredient" key={i}>{ingredient}</span>
          )
        })}
        <button onClick={(evt) => this.props.callEditForm(evt, title, ingredients)}>Edit Recipe</button>
      </div>
    )
  }
}

export default RecipeDetails;
