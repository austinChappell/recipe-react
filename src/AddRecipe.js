import React, { Component } from 'react';

class AddRecipe extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.showForm?'recipe-form-div':'hide'}>
        <h3>Add Recipe</h3>
        <input placeholder="Recipe Name" value={this.props.title} onChange={this.props.titleChange} />
        <textarea placeholder="Ingredients (separate by comma)" onChange={this.props.detailsChange} value={this.props.details}></textarea>
        <input id="submit-form-btn" onClick={this.props.submit} type="submit" />
      </div>
    )
  }
}

export default AddRecipe;
