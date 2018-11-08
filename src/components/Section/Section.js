import './Section.scss';

import React, { Component } from 'react';
import SectionBody from './SectionBody/SectionBody';
import SectionHeader from './SectionHeader/SectionHeader';

class Section extends Component {
	render() {
		return (
			<div className="section">
				<SectionHeader
					title={this.props.title}
					subtitle={this.props.subtitle}
				/>

				<SectionBody>
					{this.props.children}
				</SectionBody>
			</div>
		);
	}
}

export default Section;
