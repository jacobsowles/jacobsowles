import './App.scss';

import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { far, faAddressCard, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile/Profile';
import Section from '../Section/Section';
import SocialLinkList from '../SocialLinkList/SocialLinkList';
import SocialLinkListItem from '../SocialLinkListItem/SocialLinkListItem';

library.add(fab, far, faAddressCard, faBuilding, faCogs, faGithub, faLinkedin, faMapMarkerAlt, faTwitter)

class App extends Component {
	render() {
		return (
			<div className="app container-fluid">
				<header className="row align-items-start">
					<div className="col-3"></div>

					<div className="col-6">
						<main role="main">
							<Profile />
						</main>
					</div>

					<div className="col-3"></div>
				</header>

				<section className="row align-items-center">
					<div className="col-3"></div>

					<div className="col-6">
						<Section title="Things I'm currently excited about">
							<ul>
								<li>Effortlessly processing receipts with Zapier and Hazel</li>
								<li>Automatically cataloging business card contacts with optical character recognition and the Airtable API</li>
								<li>Jumpstarting my daily guitar practice with Evernote, Harvest, and Keyboard Maestro</li>
							</ul>
						</Section>
					</div>

					<div className="col-3"></div>
				</section>

				<footer className="row align-items-end">
					<div className="col-3"></div>

					<div className="col-6">
						<Section title="Get in touch">
							<SocialLinkList>
								<SocialLinkListItem
									icon={faLinkedin}
									url="https://www.linkedin.com/in/jacobsowles/"
									title="LinkedIn"
								/>
								<SocialLinkListItem
									icon={faTwitter}
									url="https://twitter.com/jacobsowles"
									title="Twitter"
								/>
								<SocialLinkListItem
									icon={faGithub}
									url="https://github.com/jacobsowles"
									title="Github"
								/>
							</SocialLinkList>
						</Section>
					</div>

					<div className="col-3"></div>
				</footer>
			</div>
		);
	}
}

export default App;
