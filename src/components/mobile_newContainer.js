import React from 'react';
import { Row, Col, Tabs } from 'antd';
import MobileNewsList from './mobile_newslist';

const TabPane = Tabs.TabPane;

export default class MobileNewsContainer extends React.Component{
	constructor(props){
		super();
		this.state = {
			current:'top'
		}
	}
	
	tabChange(key){
		debugger;
		this.setState({current:key});
	}

	componentWillUpdate(){
		this.state = {
			
		}
	}

	render(){
		return(
			<Row>
				<Col span={2}></Col>
				<Col span={20}>
					<Tabs onChange={this.tabChange.bind(this)} activeKey={this.state.current}>
						<TabPane tab="头条" key="top">
							<MobileNewsList type="top" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="娱乐" key="yule">
							<MobileNewsList type="yule" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="社会" key="shehui">
							<MobileNewsList type="shehui" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="财经" key="caijing">
							<MobileNewsList type="caijing" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="科技" key="keji">
							<MobileNewsList type="keji" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="时尚" key="shishang">
							<MobileNewsList type="shishang" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="图片" key="tupian">
							<MobileNewsList type="tupian" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="热点" key="redian">
							<MobileNewsList type="redian" count={10}></MobileNewsList>
						</TabPane>
						<TabPane tab="股票" key="gupiao">
							<MobileNewsList type="gupiao" count={10}></MobileNewsList>
						</TabPane>
					</Tabs>
				</Col>
				<Col span={2}></Col>
			</Row>
		);
	}
}