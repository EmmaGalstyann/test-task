import React, { Component } from 'react';
import Article from '../article';

export default class News extends Component {
	render() {
		const { data, isLoading } = this.props;
		let newsTemplate;

		if (isLoading) {
			return <p className="container">загружаю</p>;
		} else if (!isLoading && data.length) {
			newsTemplate = data.map(function(item) {
				return <Article key={item.id} data={item} />;
			});
		} else {
			newsTemplate = <p>Don`t have news</p>;
		}

		return (
			<section className="news">
				<div className="container">
					<h3 className="page-title">News</h3>
					{newsTemplate}
				</div>
			</section>
		);
	}
}
