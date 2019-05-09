import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <div className="container">Profile!</div>;
		}
		return <Redirect to="/login" />;
	}
}
