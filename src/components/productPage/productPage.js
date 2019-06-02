import React,{Component} from 'react';
import {  Badge,Container,Row,Col,Button } from 'reactstrap';
import './productPage.css';

class ProductPage extends Component{
	constructor(props){
		super(props);
		this.state={
			data:this.props.data
		};



	}

	render(){

		let ratingColor = "success";
		if(this.props.data.rating<4 && this.props.data.rating>=3){
			ratingColor = "warning";
		}
		else if(this.props.data.rating <3){
			ratingColor="danger";
		}
		else{
			ratingColor = "success";
		}

		return(
				<div style={{"width":"100%"}} >

					<Container style={{"margin-top":"50px"}}>
						 <Button onClick={()=>this.props.toggle()} color="primary" size="sm">Go Back</Button>
					    <Row>
					    	<Col xs={3}>
					    		 
					    		
					    	</Col>
					    </Row>
						<Row className="prod-box">
							<Col xs={12} >
								<img className="prod-image" alt={this.props.data.brand + " " + this.props.data.name} src={this.props.data.img}/>
							</Col>
							<Col xs={12} >
								<h2>{this.props.data.brand + " " + this.props.data.name}</h2>
								<h3>Highlights</h3>
								<br/>
								<br/>
								<Row className="prod-info">
									<Col   xs={5}>Price</Col>
									<Col xs={2}>:</Col>
									<Col xs={5}><h2>Rs. {this.props.data.price}</h2></Col>
								</Row>
								<Row className="prod-info">
									<Col xs={5}>Rating</Col>
									<Col xs={2}>:</Col>
									<Col xs={5}><Badge href="#" color={ratingColor}>{this.props.data.rating}</Badge></Col>
								</Row>
								<Row className="prod-info">
									<Col xs={5}>Microphone</Col>
									<Col xs={2}>:</Col>
									<Col xs={5}>{this.props.data.microphone}</Col>
								</Row>
								<Row className="prod-info">
									<Col xs={5}>Connectivity</Col>
									<Col xs={2}>:</Col>
									<Col xs={5}>{this.props.data.connectivity}</Col>
								</Row>
								<Row className="prod-info">
									<Col xs={5}>Type</Col>
									<Col xs={2}>:</Col>
									<Col xs={5}>{this.props.data.type}</Col>
								</Row>
								<br/>
								<Row >
									<Col xs={6}><Button  color="primary" size="lg">Add to Cart</Button></Col>
									<Col xs={6}><Button  color="success" size="lg">Buy</Button></Col>
								</Row>
							</Col>

						</Row>
					</Container>
				</div>
			)
	}
}

export default ProductPage;
