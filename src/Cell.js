import React, { Component } from 'react';

class Cell extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.humanCharacter, this.props.index);
  };

  render() {
    return (

        <th>
          <div className={'item'}>
            <p onClick={this.handleClick}>{this.props.value}</p>
          </div>
        </th>

    );
  }
}

export default Cell;