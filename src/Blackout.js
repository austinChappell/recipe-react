import React, { Component } from 'react';

class Blackout extends Component {
  render() {
    return (
      <div className={this.props.showForm || this.props.showEditForm ? 'blackout' : 'hide'}>
        <span
          onClick={this.props.exitForm}
          className="exit-button">X</span>
      </div>
    )
  }
}

export default Blackout;
