import React, { Component } from 'react';
import Cell from './Cell.js';
import CharacterPicker from './CharacterPicker.js';

class Board extends Component {
	constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill('X'),
    };
	}

	renderCell(index) {
		return <Cell index={index} value={this.state.cells[index]} />
	}
	
	render() {
		return (
			<div>
				<CharacterPicker />
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
		)
	}
}

export default Board;