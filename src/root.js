/**
	authors hcj
	version 1.0
*/
import React from 'react';
import ReactDOM from 'react-dom';


//引入react-router
import { BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router-dom';

import PCIndex from '../src/components/pc_index';
import MobileIndex  from '../src/components/mobile_index';
import PCnewsDtail from '../src/components/pc_news_detail';
import PCUserCenter from '../src/components/pc_usercenter';
import MobileDetail from '../src/components/mobile_news_detail';
import MobileUsercenter from '../src/components/mobile_usercenter';

import MediaQuery from 'react-responsive';


export default class Root extends React.Component{

	render(){
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<HashRouter history={hashHistory}>
						<div>
							<Route exact path="/" component={PCIndex}></Route>
							<Route path="/usercenter" component={PCUserCenter}></Route>
							<Route path="/detail/:uniquekey" component={PCnewsDtail}></Route>
						</div>
					</HashRouter>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<HashRouter history={hashHistory}>
						<div>
							<Route exact path="/" component={MobileIndex}></Route>
							<Route path="/usercenter" component={MobileUsercenter}></Route>
							<Route path="/detail/:uniquekey" component={MobileDetail}></Route>
						</div>
					</HashRouter>
				</MediaQuery>
			</div>
		);
	}
}

ReactDOM.render((
	<Root></Root>
),document.getElementById('pc_responsive'));