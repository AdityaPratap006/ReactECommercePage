import React, {Component} from 'react';
import './navbar.css';
import { Container, Row, Col, Input,
	Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { ReactComponent as UserIcon } from './man-user.svg';
import { ReactComponent as ShoppingCart } from './shopping-cart.svg';


class Navbar extends Component {


	constructor(props){
		super(props);
		
	    this.state = {
	      dropdownOpen1: false,
	      dropdownOpen2: false
	    

	    };
		
	}

	 toggle1 =()=> {
	    this.setState(prevState => ({
	      dropdownOpen1: !prevState.dropdownOpen1
	    }));
	  };

	  toggle2 =()=> {
	    this.setState(prevState => ({
	      dropdownOpen2: !prevState.dropdownOpen2
	    }));
	  };

	render(){

		const logoText = (
						<Col  xs={0} md={8}>
       						<h3 className="logo pointer"  onClick={() => this.props.changeRoute('home')}  >
					           {(window.innerWidth >= 768)? "Zipkart":null }
					        </h3>
       					</Col>);	
       	const middleDropdown = (window.innerWidth >= 768)?(<Col xs={0} md={4}>
			    		<Dropdown  isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
					        <DropdownToggle color={'#2979ff'} caret style={{"font-size":'1.2rem',"color":"#fff"}}>
					          More
					        </DropdownToggle>
					        <DropdownMenu >
					          <DropdownItem>Sell on Zipkart</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem>24x7 Customer Care </DropdownItem>
					          <DropdownItem divider />

					          <DropdownItem >Advertise</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem>Download App</DropdownItem>
					          
					          
					        </DropdownMenu>
					      </Dropdown>
			    	</Col>):null;	
       	const userMenu = (window.innerWidth >= 768)?(<DropdownToggle   color={'#2979ff'} caret style={{"font-size":'1.2rem',"color":"#fff"}}>
					         USER
					        </DropdownToggle>):(<DropdownToggle   color={'#2979ff'}  style={{"font-size":'1.2rem',"color":"#fff"}}>
					         <UserIcon style={{"height":"1.2rem","width":"1.2rem"}}/>
					        </DropdownToggle>);

		return (
    
       <div className="navbar ">
       	<Container >
       		<Row className="center navbar-row" >
       			<Col xs={3} >
       				<Row>
       					<Col xs={12} md={4}>
       						<div className="navbar-logo pointer center"  onClick={() => this.props.changeRoute('home')}  >
					          <img alt={'Logo'}/>
					        </div>
       					</Col>
       					{logoText}
       				</Row>
       			</Col>
       			<Col xs={5} md={5}>
       				<Input className="search-input center"  type="text" name="search" id="searchBar" placeholder="Search..."/>
			    </Col>
			    <Col xs={4} md={4}>
			    <Row>
			    	<Col xs={6} md={4}>
			    		<Dropdown   isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
					        {userMenu}

					        <DropdownMenu right={(window.innerWidth<768)?true:false} >
					          <DropdownItem>My Profile</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem>My Orders</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem > My Wishlist</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem>My Chats</DropdownItem>
					          <DropdownItem divider />
					          <DropdownItem>Logout</DropdownItem>
					          
					        </DropdownMenu>
					      </Dropdown>
			    	</Col>
			    	{middleDropdown}
			    	<Col xs={6} md={4}>
			    		<DropdownToggle color={'#2979ff'} style={{"font-size":'1.2rem',"color":"#fff"}}>
					          <span style={{"font-size":"1.2rem","color":"#ffffff","margin-top":"1.5rem"}}><ShoppingCart style={{"width":"1.2rem","height":"1.2rem"}}/>{(window.innerWidth>=768)?"Cart":null}</span>
					     </DropdownToggle>
			    			 
			    			
			    		
			    	</Col>
			    </Row>
			    	
			    </Col>
       		</Row>
       	</Container>
       </div>
    
  );
	}
}

export default Navbar;
