import './SocialLinkListItem.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialLinkList extends Component {
	render() {
		return (
			<a href={this.props.url} className="social-link-list-ite" title={this.props.title}>
				<FontAwesomeIcon icon={this.props.icon} />
			</a>
		);
	}
}

export default SocialLinkList;
