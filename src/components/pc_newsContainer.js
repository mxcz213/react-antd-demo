import React from 'react';
import { Col,Row } from 'antd';

import CarouselImgNewsBlock from './carousel_imgnews';
import PCnewsTextList from './pc_newsTextList';
import PCleftNewsBlock from './pc_leftnews_block';
import PCNewsImgBlock from './pc_news_imgblock';
import YHJG from './yahoo_jg';

export default class PCnewsContainer extends React.Component {


	componentWillMount(){
		const myFetchOption = {
			method:'GET'
		}
	};

	render(){
		return(
			<Row className="news-container">
				<Col span={2}></Col>
				<Col span={20}>
					<Row>
						<Col span={6} className="left-newlist">
							<h2 className="news-column-title"><span>新闻有态度</span></h2>
							<PCleftNewsBlock></PCleftNewsBlock>
						</Col>
						<Col span={12} className="news-main-content">
							<YHJG />
							<PCNewsImgBlock type="yule" count={2}></PCNewsImgBlock>
							<PCNewsImgBlock type="caijing" count={2}></PCNewsImgBlock>
						</Col>
						<Col span={6}>
							<CarouselImgNewsBlock type="top" count={5} imgWidth="300"></CarouselImgNewsBlock>
							<PCnewsTextList title="新闻策划" type="yule" count={10}></PCnewsTextList>
							<PCnewsTextList title="新闻专题" type="shehui" count={10}></PCnewsTextList>
						</Col>
					</Row>
				</Col>
				<Col span={2}></Col>
			</Row>
		);
	}
}