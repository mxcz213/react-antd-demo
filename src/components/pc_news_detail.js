import React from 'react';
import { Row, Col, BackTop } from 'antd';
import CarouselImgNewsBlock from './carousel_imgnews';
import PCnewsTextList from './pc_newsTextList';
import Comments from './common_pl_sc';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCnewsDtail extends React.Component {
	constructor(){
		super();
		this.state = {
			newcontent:''
		}
	};

	componentWillMount(){
		const myFetchOption = {
			method:'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.match.params.uniquekey)
		.then(response=>response.json())
		.then(json=>{
			this.setState({newcontent:json})
			document.title = this.state.newcontent.title + '聚力云平台';
		});
	};

	setInnerHtml(){
		return {__html:this.state.newcontent.pagecontent};
	}

	render(){
		return(
			<div>
				<PCHeader></PCHeader>
					<Row>
						<Col span={2}></Col>
						<Col span={14}>
							<div className="pc_news-detail" dangerouslySetInnerHTML={this.setInnerHtml()}></div>
							<Comments uniquekey={this.props.match.params.uniquekey}></Comments>	
						</Col>
						<Col span={6}>
							<CarouselImgNewsBlock type="top" count={5} imgWidth="500"></CarouselImgNewsBlock>
							<PCnewsTextList title="新闻策划" type="yule" count={10}></PCnewsTextList>
							<PCnewsTextList title="专题推荐" type="shehui" count={10}></PCnewsTextList>
							<PCnewsTextList title="股票财经" type="caijing" count={10}></PCnewsTextList>
						</Col>
						<Col span={2}></Col>
					</Row>
				<PCFooter></PCFooter>
				<BackTop />
			</div>
		);
	}
}