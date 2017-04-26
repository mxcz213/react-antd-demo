import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MobileNewsList extends React.Component{
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
	}

	render(){
		const news = this.state.news;
		const newsList = news.length 
			? news.map((newItem,index)=>(
				<li key={index}>
					<Row>
						<Col span={6}>
							<div className="mobile-list-img"><img src={newItem.thumbnail_pic_s02} /></div>
						</Col>
						<Col span={18}>
							<div className="mobile-news-block">
								<div className="mobile-news-title">
									<Link to={`detail/${newItem.uniquekey}`}>{newItem.title}</Link>
								</div>
								<div className="mobile-news-time">{newItem.Id.Timestamp}<span className="mobile-news-count"><Icon type="eye-o" />{newItem.Id.Pid}</span></div>
							</div>
						</Col>
					</Row>
				</li>
			))
		 	: '没有新闻！';

		return(
			<div>
				<ul className="mobile_newslist_ul">
					{newsList}
				</ul>
			</div>
		);
	}
}


//获取新闻详情
//http://newsapi.gugujiankong/Handler.ashx?action=getnewsItem&uniquekey=121233