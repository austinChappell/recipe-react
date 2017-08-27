import React, { Component } from 'react';

class EditRecipe extends Component {
  render() {
    return (
      <div className={this.props.showForm?'recipe-form-div':'hide'}>
        <h3>Edit Recipe</h3>
        <input placeholder="Recipe Name" value={this.props.title} onChange={this.props.titleChange} />
        <textarea placeholder="Ingredients (separate by comma)" onChange={this.props.detailsChange} value={this.props.ingredients}></textarea>
        <input id="submit-form-btn" onClick={this.props.submit} type="submit" />
      </div>
    )
  }
}

export default EditRecipe;
