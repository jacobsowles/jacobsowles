import './SocialLinkListItem.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialLinkList extends Component {
	render() {
		return (
			<li className="social-link-list-item">
				<a href={this.props.url} title={this.props.title}>
					<FontAwesomeIcon icon={this.props.icon} />
				</a>
			</li>
		);
	}
}

export default SocialLinkList;
