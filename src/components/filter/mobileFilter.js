import React from 'react';
import './mobileFilter.css';
import Filter from './filter.js';

const SideDrawer = props => {

	let drawerClasses = ['side-drawer'];
	if(props.show){
		drawerClasses.push('drawer-open');
	}

					

	return(
			<nav className={drawerClasses.join(' ')} >
			  <div className="button-container">
			  	<div className='close-button' onClick={props.close}>
			  		<span>&#x2716;</span>
			  	</div>
			  </div>
			  <div className='Filter-Box center'>
				<Filter 
					onBrandChange={props.onBrandChange}
					onTypeChange={props.onTypeChange}
					onConnecChange={props.onConnecChange}
					onMicChange={props.onMicChange} 
		    	/>
		    	</div>
			</nav>
		);

};
		
	

export default SideDrawer;