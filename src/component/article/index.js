import React, { Component } from 'react';

export default class Article extends Component {
	state = {
		visibleText: false,
	};

	handleReadMore = e => {
		e.preventDefault();
		this.setState({ visibleText: true });
	};

	render() {
		const { author, text, bigText } = this.props.data;
		const { visibleText } = this.state;

		return (
			<div className="one-new">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
				{!visibleText && (
					<a
						href="#test"
						className="news__readmore"
						onClick={this.handleReadMore}
					>
						READ MORE
					</a>
				)}
				{visibleText && <p className="news__big-text">{bigText}</p>}
			</div>
		);
	}
}
