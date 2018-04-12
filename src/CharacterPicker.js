import React, { Component } from 'react';

class CharacterPicker extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.character);
  };

  render() {
    return (
        <div>
          <button
              onClick={this.handleClick}>{this.props.character}</button>
        </div>
    );
  }
}

export default CharacterPicker;