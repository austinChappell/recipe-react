import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import RecipeBox from './recipe-box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreRecipes: [
        {
          title: 'Recipe 1 For Real',
          details: 'Details for Recipe 1',
          detailsArray: ['Ingredient 1', 'Ingredient 2']
        },
        {
          title: 'Recipe 2',
          details: 'Details for Recipe 2',
          detailsArray: ['Ingredient 3', 'Ingredient 4']
        }
      ],
      newRecipe: {
        title: '',
        details: '',
        detailsArray: []
      },
      showForm: false,
      showIngredients: false
    }
  }

  addRecipe = (evt) => {
    evt.preventDefault();
    const recipeArr = this.state.moreRecipes;
    const newRecipe = this.state.newRecipe;
    newRecipe.detailsArray = newRecipe.details.split(',');
    recipeArr.push(newRecipe);
    this.setState({ moreRecipes: recipeArr, newRecipe: {title: '', details: ''}, showForm: false });
  }

  handleTitleChange = (evt) => {
    const details = this.state.newRecipe.details;
    const value = evt.target.value;
    // console.log(evt.target.value);
    this.setState({newRecipe: {title: value, details}});
  }

  handleDetailsChange = (evt) => {
    const title = this.state.newRecipe.title;
    const value = evt.target.value;
    this.setState({newRecipe: {title, details: value}});
  }

  callForm = (evt) => {
    this.setState({showForm: true})
  }

  showIngredients = (evt) => {
    console.log('clicked');
    this.setState({
      showIngredients: !this.state.showIngredients
    })
  }

  render() {
    return (
      <div className="blackout">
        <div></div>
        <RecipeBox
          moreRecipes={this.state.moreRecipes}
          showForm={this.state.showForm}
          showIngredients={this.showIngredients}
          showTheIngredients={this.state.showIngredients}/>
        {/* <button onClick={this.addRecipe}>Add Recipe</button> */}
        <AddRecipe
          showForm={this.state.showForm}
          submit={this.addRecipe}
          title={this.state.newRecipe.title}
          details={this.state.newRecipe.details}
          titleChange={this.handleTitleChange}
          detailsChange={this.handleDetailsChange} />
          <div>
            <button
              id="add-recipe-btn"
              onClick={this.callForm}
              className={this.state.showForm?'hide':'add-recipe-btn'}>Add Recipe</button>
          </div>
      </div>
    )
  }
}

export default App;
