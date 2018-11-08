import './Profile.scss';

import React, { Component } from 'react';
import ProfileInfoWrapper from '../ProfileInfoWrapper/ProfileInfoWrapper';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

class Profile extends Component {
	render() {
		return (
			<div className="profile container-fluid">
				<div className="row">
					<div className="profile-wrapper col-12">
						<ProfilePhoto />

						<ProfileInfoWrapper>
							{this.props.children}
						</ProfileInfoWrapper>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
