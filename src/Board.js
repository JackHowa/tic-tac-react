import React, { Component } from 'react';
import Cell from './Cell.js';
import CharacterPicker from './CharacterPicker.js';
import './grid.css';

// constants go outside of the class
const WINNING_SOLUTIONS = [
  // horizontal
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // vertical
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // diagonal
  [0,4,8],
  [2,4,8]
];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill('_'),
      humanCharacter: '',
    };
  }

  checkWinner = () => {
    // findIndex returns the first time it matches
    // isWinner checks for match
    // might be implicit true
    console.log(WINNING_SOLUTIONS.findIndex(solution => this.isWinner(solution, 'X')));
  };

  isWinner = (targetIndex, humanCharacter = 'X') => {
    let targetValues = this.state.cells.filter((input, index) => targetIndex.includes(index)); // ["X","X","X"]

    // will return true if all match
    return targetValues.every(value => value === humanCharacter);
  };

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
    this.checkWinner();
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