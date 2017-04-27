import React from 'react';
import { Row, Col, Tabs, Card, Upload, Icon, Modal} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;

export default class MobileUsercenter extends React.Component {
	constructor(){
		super();
		this.state = {
			previewVisible:false,
			commentlist:'',
			userconnectlist:'',
			previewImage:'',
			fileList:[{
				uid: -1,
			    name: 'xxx.png',
			    status: 'done',
			    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}]
		}
	}

	componentDidMount(){
		const myFetchOptions = {
			method:'GET'
		}
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&userid="+localStorage.userid,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({commentlist:json}));

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+localStorage.userid,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({userconnectlist:json}));
	}

	handlePreview(file){
		this.setState({previewImage:file.url || file.thumbUrl,previewVisible:true});
	}

	handleChange({fileList}){
		this.setState({fileList});
	}

	handleCancel(){
		this.setState({previewVisible:false});
	}

	render(){
		const {commentlist,userconnectlist} = this.state;
		const comments = commentlist.length
		? commentlist.map((list,index)=>{
			<Card title={`评论于：${list.datetime}`} key={index} extra={<a href={`/#/detail/${list.uniquekey}`}>查看</a>}>
				<p>{list.datetime}</p>
			</Card>
		})
		:"您还没有评论任何文章，快去评论吧";

		const userconnect = userconnectlist.length
		? userconnectlist.map((uclist,index)=>{
			<Card title={uclist.UserName} key={index}>
				<p>{uclist.title}</p>
			</Card>
		})
		:"您还没有收藏任何文章，快去收藏吧！";

		const { previewVisible, previewImage, fileList } = this.state;
		const uploadProps = {
			action:'https://jsonplaceholder.typicode.com/posts/',
			listType:'picture-card',
			fileList:fileList,
			headers:{
				'Access-Control-Allow-Origin':'*'  //cors跨域请求的头
			},
			onPreview:this.handlePreview.bind(this),
			onChange:this.handleChange.bind(this)
		}

		return(
			<div>
				<MobileHeader />
				<Row>
					<Col span={1}></Col>
					<Col span={22}>
						<Tabs className="common-list">
							<TabPane tab="个人信息" key="1">
								<Upload {...uploadProps}>
									<div>
								        <Icon type="plus" />
								        <div className="ant-upload-text">Upload</div>
								    </div>
								</Upload>
								<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
						          <img alt="example" src={previewImage} style={{ width: '100%' }} />
						        </Modal>
							</TabPane>
							<TabPane tab="我的评论" key="2">
								{comments}
							</TabPane>
							<TabPane tab="我的收藏" key="3">
								{userconnect}
							</TabPane>
						</Tabs>
					</Col>
					<Col span={1}></Col>
				</Row>
				<MobileFooter />
			</div>
		);
	}
}