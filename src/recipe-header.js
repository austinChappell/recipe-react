import React, { Component } from 'react';

class RecipeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default RecipeHeader;
