import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Row, Col, Icon } from 'antd';
import { hashHistory } from 'react-router-dom';
import Comments from './common_pl_sc';

export default class MobileDetail extends React.Component {
	constructor(){
		super();
		this.state = {
			news:''
		}
	}

	getHtml(){
		return {__html:this.state.news.pagecontent};
	}

	comeBack(){
		console.log(this.props.history);
		this.props.history.goBack();
	}

	componentWillMount(){
		const myFetchOption = {
			method:'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.match.params.uniquekey)
		.then(response=>response.json())
		.then(json=>this.setState({news:json}))
	}

	render(){

		return (
			<div>
				<MobileHeader></MobileHeader>
				<Row>
					<Col span={1}></Col>
					<Col span={22}>
						<div className="mobile-back"><Icon type="left-circle-o" onClick={this.comeBack.bind(this)} /></div>
						<div dangerouslySetInnerHTML={this.getHtml()} className="mobile-news-detail"></div>
						<Comments></Comments>
					</Col>
					<Col span={1}></Col>
				</Row>
				<MobileFooter></MobileFooter>
			</div>
		);
	}
}