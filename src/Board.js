import React, { Component } from 'react';
import Cell from './Cell.js';
import CharacterPicker from './CharacterPicker.js';
import './grid.css';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill('_'),
      humanCharacter: '',
    };
  }

  pickCharacter = (character) => {
    this.setState({
      humanCharacter: character,
    });
  };

  fillCharacter = (humanCharacter, index) => {
    if (humanCharacter === '') {
      alert('Please pick a character -- X or 0');
      return;
    }
    let cells = this.state.cells;
    cells[index] = humanCharacter;
    this.setState({
      cells,
    });
  };

  renderCell(index) {
    return <Cell index={index} value={this.state.cells[index]}
                 onClickFunction={this.fillCharacter}
                 humanCharacter={this.state.humanCharacter}/>;
  }

  render() {
    return (
        <div>
          <div>
            <CharacterPicker onClickFunction={this.pickCharacter}
                             character={'O'}/>
            <CharacterPicker onClickFunction={this.pickCharacter}
                             character={'X'}/>
          </div>
          <div className={'container'}>
            <table>
              <tbody>
              <tr>
                {this.renderCell(0)}
                {this.renderCell(1)}
                {this.renderCell(2)}
              </tr>
              <tr>
                {this.renderCell(3)}
                {this.renderCell(4)}
                {this.renderCell(5)}
              </tr>
              <tr>
                {this.renderCell(6)}
                {this.renderCell(7)}
                {this.renderCell(8)}
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
        ;
  }
}

export default Board;