import React from 'react';
import { Carousel } from 'antd';

export default class CarouselImgNewsBlock extends React.Component {
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
		const setting = {
			
		}
		return(
			<div>
				<Carousel dots>
					<div className="carousel_block">
						<a href="#">
							<img src="../src/assets/news_1.jpg" width={this.props.imgWidth} />
							<h2>看客：花式减压秀，疲惫的都市人</h2>
						</a>
					</div>
					<div className="carousel_block">
						<a href="#">
							<img src="../src/assets/news_2.jpg" width={this.props.imgWidth} />
							<h2>看客：花式减压秀，疲惫的都市人</h2>
						</a>
					</div>
					<div className="carousel_block">
						<a href="#">
							<img src="../src/assets/news_3.jpg" width={this.props.imgWidth} />
							<h2>看客：花式减压秀，疲惫的都市人</h2>
						</a>
					</div>
					<div className="carousel_block">
						<a href="#">
							<img src="../src/assets/news_4.jpg" width={this.props.imgWidth} />
							<h2>看客：花式减压秀，疲惫的都市人</h2>
						</a>
					</div>
				</Carousel>
			</div>
		);
	}
}