import './App.scss';

import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileInfoHeader from '../ProfileInfoHeader/ProfileInfoHeader';
import ProfileInfoList from '../ProfileInfoList/ProfileInfoList';
import ProfileInfoListItem from '../ProfileInfoListItem/ProfileInfoListItem';
import ProfileInfoWrapper from '../ProfileInfoWrapper/ProfileInfoWrapper';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import SectionHeader from '../SectionHeader/SectionHeader';
import SocialLinkList from '../SocialLinkList/SocialLinkList';
import SocialLinkListItem from '../SocialLinkListItem/SocialLinkListItem';

library.add(fab, faBuilding, faGithub, faLinkedin, faMapMarkerAlt)

class App extends Component {
	render() {
		return (
			<div className="app container-fluid">
				<header className="row align-items-start">
					<div className="col-2"></div>

					<div className="col-8">
						<main role="main">
							<ProfilePhoto />

							<ProfileInfoWrapper>
								<ProfileInfoHeader
									title="Jacob Sowles"
									subtitle="Full-stack developer, chronic automator, and aspiring everything-elser"
								/>

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
							</ProfileInfoWrapper>
						</main>
					</div>

					<div className="col-2"></div>
				</header>

				<section className="row align-items-center">
					<div className="col-2"></div>

					<div className="col-8">
						<SectionHeader title="What I'm currently excited about" />
					</div>

					<div className="col-2"></div>
				</section>

				<footer className="row align-items-end">
					<div className="col-2"></div>

					<div className="col-8">
						<SectionHeader title="Get in touch" />

						<SocialLinkList>
							<SocialLinkListItem
								icon={faLinkedin}
								url="https://www.linkedin.com/in/jacobsowles/"
								title="LinkedIn"
							/>
							<SocialLinkListItem
								icon={faGithub}
								url="https://github.com/jacobsowles"
								title="Github"
							/>
						</SocialLinkList>
					</div>

					<div className="col-2"></div>
				</footer>
			</div>
		);
	}
}

export default App;
