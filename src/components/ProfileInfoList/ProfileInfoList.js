import './ProfileInfoList.scss';
import React, { Component } from 'react';

class ProfileInfoList extends Component {
	render() {
		return (
			<div className="profile-info-list">
				<ul>
					{
						React.Children.map(this.props.children, child => {
							return <li>{child}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

export default ProfileInfoList;
