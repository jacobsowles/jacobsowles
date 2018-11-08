import './Profile.scss';

import React, { Component } from 'react';
import ProfileInfoHeader from '../ProfileInfoHeader/ProfileInfoHeader';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

class Profile extends Component {
	render() {
		return (
			<div className="profile container-fluid">
				<div className="row">
					<div className="profile-wrapper col-12">
						<ProfilePhoto />

						<div className="profile-info-wrapper">
							<ProfileInfoHeader
								title={this.props.name}
								subtitle={this.props.tagline}
							/>

							<div className="profile-info-body-wrapper">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
