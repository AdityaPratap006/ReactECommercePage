import React,{Component} from 'react';
import './card.css';
import { Badge,Container,Row,Col } from 'reactstrap';

class ProductCard extends Component{


	

	render(){
		

	let ratingColor = "success";
	if(this.props.rating<4 && this.props.rating>=3){
		ratingColor = "warning";
	}
	else if(this.props.rating <3){
		ratingColor="danger";
	}
	else{
		ratingColor = "success";
	}

	const my_card = (window.innerWidth>=768)?(
		<div >
			<img className="med-img" alt='robots' src={this.props.img}/>
			<div className='tc '>
				<h4  style={{"max-width":"15rem"}}>{this.props.brand} {this.props.name}</h4>
				<small >{this.props.type}, {this.props.connectivity}</small>
				<br/>
				Rating:<Badge href="#" color={ratingColor}>{this.props.rating}</Badge>
				<h3>Rs. {this.props.price}</h3>
			</div>
		</div>):(
				<div >
					<Container>
						<Row>
							<Col xs={3}>
								<img className="sm-img" alt='product' src={this.props.img}/>
							</Col>
							<Col xs={9}>
								<div className='tc card-cont'>
									<p style={{"font-size":"1.1rem","max-width":"70vw"}}>{this.props.brand} {this.props.name}</p>
									<small >{this.props.type}, {this.props.connectivity}</small>
									<br/>
									Rating:<Badge href="#" color={ratingColor}>{this.props.rating}</Badge>
									<h4>Rs. {this.props.price}</h4>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
		);

		

		return (
			<div  className={(window.innerWidth>=768)?'bg-white dib br3 pa3 pointer  ma2 grow bw2 shadow-5 ':'sm-card'}>
			{my_card}
		
			</div>
		);
	}

}  

	
	


export default ProductCard;
