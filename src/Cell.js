import React, { Component } from 'react';

class Cell extends Component {
	render() {
		return (
			<th>
				<p>{this.props.index}</p>
			</th>
		)
	}
}

export default Cell;