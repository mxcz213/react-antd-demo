import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default class PCnewsTextList extends React.Component {
	constructor(){
		super();
		this.state = {
			news:''
		}
	}

	componentWillMount(){
		const myFetchOptions = {
			method:'GET'
		}

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+
			"&count="+this.props.count,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({news:json}));
	};

	render(){
		const news = this.state.news;
		const newList = news.length 
			? news.map((newsItem, index) =>(
				<li key={index}>
					<Link to={`detail/${newsItem.uniquekey}`} target="_blank">
		              {newsItem.title}>
		            </Link>
				</li>
			))
			:'没有加载到任何新闻！';

		return(
			<Card title={this.props.title} className="card-news-list">
				<ul>
					{newList}
				</ul>
			</Card>
		);
	}
}