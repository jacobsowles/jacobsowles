import './Profile.scss';

import React, { Component } from 'react';
import ProfileInfoHeader from './ProfileInfoHeader/ProfileInfoHeader';
import ProfileInfoList from './ProfileInfoList/ProfileInfoList';
import ProfileInfoListItem from './ProfileInfoListItem/ProfileInfoListItem';
import ProfileInfoWrapper from './ProfileInfoWrapper/ProfileInfoWrapper';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<ProfilePhoto />

				<ProfileInfoWrapper>
					<ProfileInfoHeader
						title="Jacob Sowles"
						subtitle="Full-stack developer, chronic automator, and aspiring everything-elser"
					/>

					<ProfileInfoList>
						<ProfileInfoListItem
							icon="map-marker-alt"
							text="Portland, Oregon"
						/>
						<ProfileInfoListItem
							icon="building"
							text="Vespa Group"
							url="https://vespa-group.com"
						/>
					</ProfileInfoList>
				</ProfileInfoWrapper>
			</div>
		);
	}
}

export default Profile;
