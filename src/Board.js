import React, { Component } from "react";
import Cell from "./Cell.js";
import CharacterPicker from "./CharacterPicker.js";
import "./grid.css";
import Result from "./Result";

// constants go outside of the class
const WINNING_SOLUTIONS = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 8]
];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill("_"),
			humanCharacter: "",
			outputMessage: ""
    };
  }

  checkWinner = (targetCharacter = "X") => {
    // findIndex returns the first time it matches
    // isWinner checks for match
    // might be implicit true
    // if -1 then no solution found
    let winnerResult = WINNING_SOLUTIONS.findIndex(solution =>
      this.isWinner(solution, targetCharacter)
    );
    let outputMessage;
    switch (winnerResult) {
      case -1:
        outputMessage = "no winner";
        break;
      case 0:
      case 1:
      case 2:
        outputMessage = targetCharacter + " won via horizontal";
        break;
      case 3:
      case 4:
      case 5:
        outputMessage = targetCharacter + " won via vertical";
        break;
      case 6:
			case 7:

        outputMessage = targetCharacter + " won via diagonal";
        break;
      default:
        outputMessage = "No winner or unrecognized solution";
		}
		// pass down the props of outputMessage
		// todo: refactor naming convention for game status
    this.setState({
			outputMessage
		})
  };

  isWinner = (targetIndex, humanCharacter) => {
    // find the values at the index
    let targetValues = this.state.cells.filter((input, index) => {
      return targetIndex.includes(index);
    }); // ["X","X","X"]

    // will return true if all match
    return targetValues.every(value => value === humanCharacter);
  };

  pickCharacter = character => {
    this.setState({
      humanCharacter: character
    });
  };

  fillCharacter = (humanCharacter, index) => {
    if (humanCharacter === "") {
      alert("Please pick a character -- X or 0");
      return;
    }
    let cells = this.state.cells;
    cells[index] = humanCharacter;
    this.setState({
      cells
    });
    this.checkWinner();
  };

  renderCell(index) {
    return (
      <Cell
        index={index}
        value={this.state.cells[index]}
        onClickFunction={this.fillCharacter}
        humanCharacter={this.state.humanCharacter}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          <CharacterPicker
            onClickFunction={this.pickCharacter}
            character={"O"}
          />
          <CharacterPicker
            onClickFunction={this.pickCharacter}
            character={"X"}
          />
        </div>
        <div className={"container"}>
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
					<Result outputMessage={this.state.outputMessage}/>
        </div>
      </div>
    );
  }
}

export default Board;
