import './ProfileInfoHeader.scss';
import React, { Component } from 'react';

class ProfileInfoHeader extends Component {
	render() {
		return (
			<header className="profile-info-header">
				<h1>{this.props.title}</h1>
				<p className="subtitle">{this.props.subtitle}</p>

				<hr />
			</header>
		);
	}
}

export default ProfileInfoHeader;
