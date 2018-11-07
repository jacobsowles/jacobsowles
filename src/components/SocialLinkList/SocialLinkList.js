import './SocialLinkList.scss';
import React, { Component } from 'react';

class SocialLinkList extends Component {
	render() {
		return (
			<div className="social-link-list">
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

export default SocialLinkList;
