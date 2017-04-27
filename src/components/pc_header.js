import React from 'react';
import { Row, Col, Menu, Icon, Tabs, Form, Input, Button, Modal, message } from 'antd';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
	constructor(){
		super();

		this.state = {
			current:'top',
			userNikeName:'',
			userid:'',
			action:'login',
			hasLogined:false,
			modalVisiable:false,
			action:'login'
		}
	};

	componentWillMount(){
		if(localStorage.userNikeName !== '' && localStorage.userid !== ''){
			this.state.hasLogined = true;
			this.state.userNikeName = localStorage.userNikeName;
		}
	}

	handleClick(e){
		this.setState({
			current:e.key
		});

		if(e.key == 'register'){
			this.setState({current:'register'});
			this.setModalVisiable(true);
		}
		else{
			this.setState({current:e.key});
		}
	};

	setModalVisiable(value){
		this.setState({
			modalVisiable:value
		});
	}

	logout(){
		localStorage.userNikeName = '';
		localStorage.userid = '';
		this.setState({
			userNikeName:'',
			userid:'',
			hasLogined:false
		});
	}

	tabCallback(key){
		if(key == 1){
			this.setState({action:'login'});
		}
		else{
			this.setState({action:'register'});
		}
	}

	handleSubmit(e){
		e.preventDefault();
		const formData = this.props.form.getFieldsValue();
		console.log(formData);
		let myFetchOptions = {
			method:'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+
			this.state.action+"&username="+
			formData.userName+"&password="+
			formData.password+"&r_userName="+
			formData.r_userName+"&r_password="+
			formData.r_password+"&r_confirmPassword="+
			formData.r_confirmPassword,myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			debugger;
			localStorage.userNikeName = 'NickUserName';
			localStorage.userid = '3305';
			this.setState({userNikeName:'NickUserName',userid:'3305',hasLogined:true});
			if(this.state.action =='login'){
				this.setState({hasLogined:true});
			}
		});
		message.success("请求成功");
		this.setModalVisiable(false);

	}

	render(){
		const { getFieldDecorator } = this.props.form;

		const userShow = this.state.hasLogined 
			? <MenuItem key="logout" className="register">
				<Link to="usercenter" className="a-inline-block">
					<Button type="primary" htmlType="button">{this.state.userNikeName}</Button>
				</Link>
					&nbsp;&nbsp;
					{/*<Link to="/usercenter" target="_blank">
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					&nbsp;&nbsp;*/}
				<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出登录</Button>
				</MenuItem> 
			: 
			<MenuItem key="register" className="register">
				<Icon type="appstore" />登录/注册
			</MenuItem>;

		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="../src/assets/logo2.png" alt="聚力云"/>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
							<MenuItem key="top"><Icon type="appstore" />头条</MenuItem>
							<MenuItem key="yule"><Icon type="appstore" />娱乐</MenuItem>
							<MenuItem key="tiyu"><Icon type="appstore" />体育</MenuItem>
							<MenuItem key="shipin"><Icon type="appstore" />视频</MenuItem>
							<MenuItem key="caijing"><Icon type="appstore" />财经</MenuItem>
							<MenuItem key="keji"><Icon type="appstore" />科技</MenuItem>
							<MenuItem key="gupiao"><Icon type="appstore" />股票</MenuItem>
							<MenuItem key="qiche"><Icon type="appstore" />汽车</MenuItem>
							<MenuItem key="shishang"><Icon type="appstore" />时尚</MenuItem>
							{userShow}
						</Menu>
						<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisiable} onCancel={()=>this.setModalVisiable(false)} onOk={()=>this.setModalVisiable(false)} OkText="关闭">
							<Tabs type="card">
								<TabPane tab="登录" key="1" onChange={this.tabCallback.bind(this)}>
									<Form size="large" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="用户名：">
											{getFieldDecorator('userName')(
													<Input type="text" placeholder="请输入用户名" />
												)
											}
										</FormItem>
										<FormItem label="密码：">
											{getFieldDecorator('password')(
													<Input type="password" placeholder="请输入密码" />
												)
											}
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2" onChange={this.tabCallback.bind(this)}>
									<Form size="large" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="用户名：">
											{getFieldDecorator('r_userName')(
													<Input type="text" placeholder="请输入用户名" />
												)
											}
										</FormItem>
										<FormItem label="密码：">
											{getFieldDecorator('r_password')(
													<Input type="password" placeholder="请输入密码" />
												)
											}
										</FormItem>
										<FormItem label="确认密码：">
											{getFieldDecorator('r_confirmPassword')(
													<Input type="password" placeholder="请再次输入密码" />
												)
											}
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>   {/*modal是隐藏的随便写在那里都行*/}
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}

export default PCHeader = Form.create()(PCHeader);