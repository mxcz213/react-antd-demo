import React from 'react';

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileNewsContainer from './mobile_newContainer';

export default class MobileIndex extends React.Component {

	render(){
		return (
			<div id="mobile">
				<MobileHeader></MobileHeader>
				<MobileNewsContainer></MobileNewsContainer>
				<MobileFooter></MobileFooter>
			</div>
		);
	}
}