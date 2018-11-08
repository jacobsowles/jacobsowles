import './SectionBody.scss';
import React, { Component } from 'react';

class SectionBody extends Component {
	render() {
		return (
			<div className="section-body">
				{this.props.children}
			</div>
		);
	}
}

export default SectionBody;
