import './Section.scss';

import React, { Component } from 'react';

class Section extends Component {
	render() {
		return (
			<div className="section">
				{this.props.children}
			</div>
		);
	}
}

export default Section;
