import './ProfileInfoListItem.scss';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileInfoListItem extends Component {
	render() {
		const itemText = this.props.url
			? <a href={this.props.url}>{this.props.text}</a>
			: this.props.text;
		
		return (
			<span className="profile-info-list-item">
				<FontAwesomeIcon icon={this.props.icon} />
				{itemText}
			</span>
		);
	}
}

export default ProfileInfoListItem;
