import './App.scss';

import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { far, faAddressCard, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile/Profile';
import ProfileInfoList from '../ProfileInfoList/ProfileInfoList';
import ProfileInfoListItem from '../ProfileInfoListItem/ProfileInfoListItem';
import SocialLinkList from '../SocialLinkList/SocialLinkList';
import SocialLinkListItem from '../SocialLinkListItem/SocialLinkListItem';

library.add(fab, far, faAddressCard, faBuilding, faCogs, faGithub, faLinkedin, faMapMarkerAlt, faTwitter)

class App extends Component {
	render() {
		return (
			<div className="app">
				<main role="main">
					<Profile
						name="Jacob Sowles"
						tagline="Full-stack developer, chronic automator, and aspiring everything-elser"
					>
						

						
							<ProfileInfoList>
								<ProfileInfoListItem
									icon={faMapMarkerAlt}
									text="Portland, Oregon"
								/>
								<ProfileInfoListItem
									icon={faBuilding}
									text="Vespa Group"
									url="https://vespa-group.com"
								/>
							</ProfileInfoList>

							<SocialLinkList>
								<SocialLinkListItem
									icon={faLinkedin}
									url="https://www.linkedin.com/in/jacobsowles/"
									title="LinkedIn"
								/>
								<SocialLinkListItem
									icon={faTwitter}
									url="https://twitter.com/jacobsowles/"
									title="Twitter"
								/>
								<SocialLinkListItem
									icon={faGithub}
									url="https://github.com/jacobsowles/"
									title="GitHub"
								/>
							</SocialLinkList>
					</Profile>
				</main>
			</div >
		);
	}
}

export default App;
