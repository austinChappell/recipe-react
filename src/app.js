import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import Blackout from './Blackout';
import EditRecipe from './EditRecipe';
import RecipeBox from './recipe-box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreRecipes: [
        {
          title: 'Recipe 1 For Real',
          details: 'Details for Recipe 1',
          detailsArray: ['Ingredient 1', 'Ingredient 2'],
          isEditing: false
        },
        {
          title: 'Recipe 2',
          details: 'Details for Recipe 2',
          detailsArray: ['Ingredient 3', 'Ingredient 4'],
          isEditing: false
        }
      ],
      newRecipe: {
        title: '',
        details: '',
        detailsArray: []
      },
      showForm: false,
      showEditForm: false
    }
  }

  // NEED TO ADD ERROR HANDLING SO TITLE OF RECIPE IS UNIQUE

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
    this.setState({newRecipe: {title: value, details}});
  }

  handleDetailsChange = (evt) => {
    const title = this.state.newRecipe.title;
    const value = evt.target.value;
    this.setState({newRecipe: {title, details: value}});
  }

  findRecipe = (title) => {
    this.state.moreRecipes.map((recipe) => {
      if (recipe.title === title) {
        return recipe.isEditing = true;
      }
    })
  }

  callEditForm = (evt, title, ingredients) => {
    this.findRecipe(title);
    console.log('clicked', title, ingredients);
    const editRecipe = {
      showEditForm: true,
      newRecipe: {
        title,
        details: ingredients.join(', ')
      }
    }

    this.setState(editRecipe)
  }

  editRecipe = () => {
    let recipeIndex;
    let moreRecipes = this.state.moreRecipes;

    this.state.moreRecipes.forEach((recipe) => {
      if (recipe.isEditing === true) {
        recipeIndex = moreRecipes.indexOf(recipe);
      }
    })

    moreRecipes[recipeIndex].title = this.state.newRecipe.title;
    moreRecipes[recipeIndex].detailsArray = this.state.newRecipe.details.split(',');

    this.setState({
      showEditForm: false,
      moreRecipes: moreRecipes
    })
  }

  exitForm = () => {
    this.setState({
      showForm: false,
      showEditForm: false
    })
  }

  render() {
    return (
      <div>
        <div>
          <button
            id="add-recipe-btn"
            onClick={this.callForm}
            // className={this.state.showForm?'hide':'add-recipe-btn'}>Add Recipe</button>
            className='add-recipe-btn'>Add Recipe</button>
          </div>
          <Blackout
            exitForm={this.exitForm}
            showForm={this.state.showForm}
            showEditForm={this.state.showEditForm} />
        <RecipeBox
          moreRecipes={this.state.moreRecipes}
          showForm={this.state.showForm}
          showIngredients={this.showIngredients}
          showTheIngredients={this.state.showIngredients}
          callEditForm={this.callEditForm}/>
        {/* <button onClick={this.addRecipe}>Add Recipe</button> */}
        <AddRecipe
          showForm={this.state.showForm}
          submit={this.addRecipe}
          title={this.state.newRecipe.title}
          details={this.state.newRecipe.details}
          titleChange={this.handleTitleChange}
          detailsChange={this.handleDetailsChange} />
        <EditRecipe
          showForm={this.state.showEditForm}
          title={this.state.newRecipe.title}
          ingredients={this.state.newRecipe.details}
          submit={this.editRecipe}
          titleChange={this.handleTitleChange}
          detailsChange={this.handleDetailsChange} />
      </div>
    )
  }
}

export default App;
