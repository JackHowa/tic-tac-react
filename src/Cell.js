import React, { Component } from 'react';

class Cell extends Component {
	render() {
		return (
			<th>
				<p>{this.props.value}</p>
			</th>
		)
	}
}

export default Cell;