import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import Navbar from './components/navbar/navbar.js';
import { Container, Row, Col} from 'reactstrap';
import Filter from './components/filter/filter.js';
import Sorter from './components/sort/sort.js';
import SideDrawer from './components/filter/mobileFilter.js';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ProductData from './components/productData.js';
import ProductCardList from './components/ProductCardList/cardList.js';


class App extends Component {

	constructor(){
		super();
		this.state = {
			brandFilter:[],
			typeFilter:[],
			microphoneFilter:[],
			connectivityFilter:[],
			sortBy:null,
			sideDrawerOpen:false,
			modal:false,
			data:ProductData,
			route:'home',
			
		}
	}

	toggleModal = () => {
	    this.setState(prevState => ({
	      modal: !prevState.modal
	    }));
	  };

	onBrandChange = (e) => {
	    let x = this.state.brandFilter;
	    let index = 0;

	    if(e.target.checked){
	      x.push(e.target.value )
	    }
	    else{
	      index = x.indexOf(e.target.value )
	      x.splice(index,1);

	    }

    
    	this.setState(Object.assign(this.state,{brandFilter:x}));
   
  };

  onTypeChange = (e) => {
	    let x = this.state.typeFilter;
	    let index = 0;

	    if(e.target.checked){
	      x.push(e.target.value )
	    }
	    else{
	      index = x.indexOf(e.target.value )
	      x.splice(index,1);

	    }

    
    	this.setState(Object.assign(this.state,{typeFilter:x}));
   
  };

  onMicChange = (e) => {
	    let x = this.state.microphoneFilter;
	    let index = 0;

	    if(e.target.checked){
	      x.push(e.target.value )
	    }
	    else{
	      index = x.indexOf(e.target.value )
	      x.splice(index,1);

	    }

    
    	this.setState(Object.assign(this.state,{microphoneFilter:x}));
   
  };

  onConnecChange = (e) => {
	    let x = this.state.connectivityFilter;
	    let index = 0;

	    if(e.target.checked){
	      x.push(e.target.value )
	    }
	    else{
	      index = x.indexOf(e.target.value )
	      x.splice(index,1);

	    }

    
    	this.setState(Object.assign(this.state,{connectivityFilter:x}));
   
  };

  onSorterChange = (e) => {
  	if(e.target.checked){
  		this.setState(Object.assign(this.state,{sortBy:e.target.value}));
  	}
  	else{
  		this.setState(Object.assign(this.state,{sortBy:null}));
  	}
  };

  drawerToggleClickHandler = () => {
  	this.setState((prevState) => {
  		return {sideDrawerOpen: !prevState.sideDrawerOpen};
  	});
 };



  closeButtonClickHandler = () => {
 	this.setState({sideDrawerOpen: false});
 };

 cancelSorter = () => {
 	this.setState({sortBy:null});
 }



changeRoute = (route) => {
	this.setState({route:route,brandFilter:[],connectivityFilter:[],
	microphoneFilter:[],typeFilter:[]});
	this.setState(Object.assign(this.state.product,{
				id:null ,
				img: null ,
			    name: null,
				brand: null,
				price: 0,
				rating:0,
			    microphone:null ,
			    connectivity :null,
			    type : null
			    
			}));

}
 

render(){


	console.log(this.state)	

	let list = this.state.data;
	let newList = list.filter(product => {
	 		return (((this.state.brandFilter.length > 0)?this.state.brandFilter.includes(product.brand.toLowerCase()):1 ) && ((this.state.typeFilter.length > 0)?this.state.typeFilter.includes(product.type):1 ) && ((this.state.microphoneFilter.length > 0)?this.state.microphoneFilter.includes(product.microphone):1 ) && ((this.state.connectivityFilter.length > 0)?this.state.connectivityFilter.includes(product.connectivity.toLowerCase()):1 ))
	 	});
	


const compareLowToHigh = (a,b) => {
	
	if(a.price > b.price){
		return 1;
	}
	if(a.price < b.price){
		return -1;
	}

 return 0;
	 	
}

const compareHighToLow = (a,b) => {
	
	if(a.price > b.price){
		return -1;
	}
	if(a.price < b.price){
		return 1;
	}

 return 0;
	 	
}

const compareRating = (a,b) => {
	if(a.rating > b.rating){
		return -1;
	}
	if(a.rating < b.rating){
		return 1;
	}

 return 0;
}

if(this.state.sortBy === 'Price-High to Low'){
	newList.sort(compareHighToLow)
}
else if(this.state.sortBy === 'Price-Low to High'){
	newList.sort(compareLowToHigh)
}
else if(this.state.sortBy === 'Rating'){
	newList.sort(compareRating)
}

 	
console.log('new:',newList);
	const controls = (window.innerWidth >= 768)?(
					<div className="filters">
		    			<Filter 
		    				onBrandChange={this.onBrandChange}
		    				onTypeChange={this.onTypeChange}
		    				onConnecChange={this.onConnecChange}
		    				onMicChange={this.onMicChange} 
		    			/>
		    			<hr/>
		    			<Sorter cancelSorter={this.cancelSorter} onSorterChange={this.onSorterChange}/>
		    		</div>
		):(
				<div className="filters">
					<Container>
						<Row>
							<Col xs='6'>
								<div className='control-btn'  onClick={this.toggleModal}>
									<h4>Sort</h4>
							    </div>
							    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
							          
							          <ModalBody>
							            <Sorter cancelSorter={this.cancelSorter} onSorterChange={this.onSorterChange}/>
							          </ModalBody>
							          <ModalFooter>
							            <Button color="primary" onClick={this.toggleModal}>Apply</Button>{' '}
							            <Button color="secondary" onClick={() => {this.toggleModal();
							            		this.setState({sortBy:null});}}>Cancel</Button>
							          </ModalFooter>
							        </Modal>
							</Col>
							<Col xs='6'>
								<div onClick={this.drawerToggleClickHandler} className='control-btn'>
									<h4>Filter</h4>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
		);	

		



		return (
    <div className="App">
	    <Navbar/>
	   	{(window.innerWidth<768)?<SideDrawer 
            show={this.state.sideDrawerOpen} 
            close={this.closeButtonClickHandler}
            onBrandChange={this.onBrandChange}
			onTypeChange={this.onTypeChange}
			onConnecChange={this.onConnecChange}
			onMicChange={this.onMicChange}
         />:null}
	    <Container fluid  className="cont">
						<Row>
					    	<Col md={2}>
					    		{controls}
					    	</Col>
					    	<Col md={10}>

					    		<div className="contents">
					    		<div className="content-heading"><h2>Headphones</h2></div>
					    		 <div className="product-box">
					    			<ProductCardList  productData={newList}/>
					    			</div>
					    		</div>
					    	</Col>
					    </Row>
				    </Container>
	 </div>
  );
	}
  
}

export default App;
