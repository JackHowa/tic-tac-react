import React, { Component } from 'react';
import Cell from './Cell.js';

class Board extends Component {
	render() {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<Cell index={0} />
							<Cell index={1} />
							<Cell index={2} />
						</tr>
						<tr>
							<Cell index={3} />
							<Cell index={4} />
							<Cell index={5} />
						</tr>
						<tr>
							<Cell index={6} />
							<Cell index={7} />
							<Cell index={8} />
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Board;