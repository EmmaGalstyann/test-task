import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = () => {
	return (
		<div className="container">
			<ul className="menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li className="login">
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
