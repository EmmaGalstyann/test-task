import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
	state = {
		username: '',
		password: '',
	};
	onBtnCLick = e => {
		e.preventDefault();
		if (this.state.username === '1' && this.state.password === '1') {
			localStorage.setItem('login', true);
			this.props.logIn(localStorage.getItem('login'));
		} else {
			alert('I do not know you!)');
		}
	};

	onChange = e => {
		const { id } = e.currentTarget;
		this.setState({ [id]: e.currentTarget.value });
	};
	render() {
		const { username, password } = this.state;

		if (this.props.isLoggedIn) {
			return <Redirect to="/profile" />;
		}
		return (
			<div className="container">
				<form className="login-form">
					<input
						type="text"
						id="username"
						placeholder="Enter your email"
						className="email-input"
						onChange={this.onChange}
						value={username}
					/>

					<input
						type="text"
						id="password"
						placeholder="Enter your password"
						className="password-input"
						onChange={this.onChange}
						value={password}
					/>

					<button onClick={this.onBtnCLick} className="btn">
						LOGIN
					</button>
				</form>
			</div>
		);
	}
}
