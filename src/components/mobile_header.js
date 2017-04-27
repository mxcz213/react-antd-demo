import React from 'react';
import { Row, Col, Menu, Icon, Modal, Form, Tabs, Input, Button, message, Dropdown} from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const MenuItem = Menu.Item;

class MobileHeader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			current:this.props.tabKey,
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

	setModalVisiable(value){
		this.setState({modalVisiable:value});
	};

	handleModal(){
		this.setModalVisiable(true);
	};

	handleSubmit(e){
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
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
			localStorage.userNikeName = 'NickUserName';
			localStorage.userid = '3305';
			this.setState({userNikeName:'NickUserName',userid:'3305',hasLogined:true});
			if(this.state.action == 'login'){
				this.setState({hasLogined:true});
			}
		});

		message.success("请求成功");
		this.setModalVisiable(false);

		console.log(formData);
	}

	tabCallback(key){
		if(key == '1'){
			this.setState({action:'login'});
		}
		else{
			this.setState({action:'register'});
		}
	};

	logout(){
		localStorage.userNikeName = '';
		localStorage.userid = '';
		this.setState({hasLogined:false});
	}

	render(){
		const { getFieldDecorator } = this.props.form;	

		const dropDownMenu = (
			<Menu>
				<MenuItem key="usercenter">
					<Link to="usercenter">
						<Button type="dashed">个人中心</Button>
					</Link>
				</MenuItem>
				<MenuItem key="logout">
					<Button type="primary" onClick={this.logout.bind(this)}>退出登录</Button>
				</MenuItem>
			</Menu>
		);

		{/*<Dropdown overlay={dropDownMenu}>个人中心</Dropdown><Icon type="user" className="seting-icon"></Icon><Icon type="down"></Icon>*/}
		const userShow = this.state.hasLogined 
			? <Dropdown overlay={dropDownMenu}><Icon type="user" className="seting-icon" /></Dropdown>
			: <Icon type="setting" className="seting-icon" onClick={this.handleModal.bind(this)} />;

		return (
			<div id="mobile-header">
				<header>
					<Row>
						<Col span={1}></Col>
						<Col span={11}><img src="../src/assets/logo2.png" alt="聚力云"/></Col>
						<Col span={11}>{userShow}</Col>
						<Col span={1}></Col>
					</Row>
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
				</header>
			</div>
			
		);
	}
}

export default MobileHeader = Form.create()(MobileHeader);