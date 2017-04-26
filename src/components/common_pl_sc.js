import React from 'react';
import { Row, Col, Form, Button, Input, notification, Card } from 'antd';

const FormItem = Form.Item;

class Comments extends React.Component {
	constructor(){
		super();
		this.state = {
			comments:''
		}
	}

	componentWillMount(){
		const myFetchOptions = {
			method:'GET'
		}
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({comments:json}));
	}

	handleSubmit(){

		const myFetchOptions = {
			method:'GET'
		}
		const formData = this.props.form.getFieldsValue();

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&commnet="+formData.comments,myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			debugger;
			this.componentWillMount();
		});

		notification.success({
			message:'评论成功',
			description:formData.comments
		});

	}

	render(){
		const { getFieldDecorator } = this.props.form;
		const { comments } = this.state;
		const commentList = comments.length 
			? comments.map((list,index)=>(
				<Card title={list.UserName} key={index}>
					<p>{list.Comments}</p>
					<p>{list.datetime}</p>
				</Card>
			))
			:"暂时没有评论，来抢沙发吧！" ;

		return(
			<Row>
				<Col span={2}></Col>
				<Col span={20}>
					<div className="common-list">{commentList}</div>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormItem label="评论：">
							{ getFieldDecorator ('comments',{initialValue:'来啰嗦两句吧！'})(
									<Input type="textarea" />
								)
							}
						</FormItem>
						<Button type="primary" htmlType="submit">提交评论</Button>
					</Form>
				</Col>
				<Col span={2}></Col>
			</Row>
		);
	}
}
export default Comments = Form.create({})(Comments);