import React from 'react';
import { Row, Col } from 'antd';

export default class MobileFooter extends React.Component {
	render(){
		return (
			<footer>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>&copy;&nbsp;2017聚力云. All Right Resolved.</Col>
					<Col span={2}></Col>
				</Row>
			</footer>
		);
	}
}