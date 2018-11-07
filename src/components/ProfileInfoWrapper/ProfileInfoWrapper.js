import './ProfileInfoWrapper.scss';
import React, { Component } from 'react';

class ProfileInfoWrapper extends Component {
	render() {
		return (
			<div className="profile-info-wrapper">
				{this.props.children}
			</div>
		);
	}
}

export default ProfileInfoWrapper;
