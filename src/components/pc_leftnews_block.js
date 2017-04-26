import React from 'react';

export default class PCleftNewsBlock extends React.Component {
	constructor(){
		super();
		this.state = {
			news_block:'',
			news_list:''
		}
	}

	componentWillMount(){
		/*const myFetchOptions = {
			method:'GET'
		}

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top"+
			"&count="+this.props.count,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({news:json}));*/
	}

	render(){
		return(
			<div className="left-news-block">
				<ul className="news_block_li">
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_sd"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_rj"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_dgxm"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_ssyg"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_ssyh"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_ssyh"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_wq1990"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p className="tag_center"><a href="#" className="tag_title tag_title_qsyk"></a></p>
						<div className="column_main">
							<a href="#">
								<h3>啃老有方，中国年轻一代70%有房</h3>
								<div className="news_photo">
									<a href="#"><img src="../src/assets/news_3.jpg" /></a>
								</div>
							</a>
							<ul className="left-text-list">
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
								<li><a href="#">每年50万美国人买了机票还被拒载</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}