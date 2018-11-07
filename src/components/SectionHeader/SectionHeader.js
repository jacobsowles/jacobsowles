import './SectionHeader.scss';
import React, { Component } from 'react';

class SectionHeader extends Component {
	render() {
		return (
			<div className="section-header">
				<h2>{this.props.title}</h2>
				<p className="subtitle">{this.props.subtitle}</p>
			</div>
		);
	}
}

export default SectionHeader;
