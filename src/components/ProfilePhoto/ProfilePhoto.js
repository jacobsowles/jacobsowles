import './ProfilePhoto.scss';

import React, { Component } from 'react';
import photo from '../../assets/profile-photo.jpg';

class PageHeader extends Component {
	render() {
		return (
			<div className="profile-photo">
				<img src={photo} alt="profile" />
			</div>
		);
	}
}

export default PageHeader;
