import React from 'react';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCnewsContainer from './pc_newsContainer';

export default class PCIndex extends React.Component {
	render(){
		return(
			<div>
				<PCHeader></PCHeader>
				<PCnewsContainer></PCnewsContainer>
				<PCFooter></PCFooter>
			</div>
		);
	}
}