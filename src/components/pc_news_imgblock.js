import React from 'react';
import { Link } from 'react-router-dom';

export default class PCNewsImgBlock extends React.Component{
	constructor(){
		super();
		this.state = {
			imgnews:''
		}
	}

	componentWillMount(){
		const myFetchOptions = {
			method:'GET'
		}

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({imgnews:json}));
	}

	render(){
		const {imgnews} = this.state;
		const imgBlockList = imgnews.length 
			? imgnews.map((newItem,index)=>(
				<li key={index}>
					<Link to={`detail/${newItem.uniquekey}`}>
						<h2 className="imgnewblock-title">{newItem.title}</h2>
						<div>
							<img src={newItem.thumbnail_pic_s} />
							<img src={newItem.thumbnail_pic_s02} />
							<img src={newItem.thumbnail_pic_s03} />
						</div>
					</Link>
				</li>
			))
			:"没有加载到新闻"

		return (
			<div className="img-news-block">
				<ul>
					{imgBlockList}
				</ul>
			</div>
		);
	}
}