import React,{Component} from 'react';
import {  CustomInput, Form, FormGroup } from 'reactstrap';
import './sort.css';

export default class Sorter extends Component{
	

	render(){

		return (

				<div >
					<h3>Sort</h3>
					<Form className="sort-cont">
						<FormGroup>
				          
				          <div className="radio-list">
				            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Price-High to Low" value="Price-High to Low" onChange={this.props.onSorterChange} />
				            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Price-Low to High" value="Price-Low to High" onChange={this.props.onSorterChange}  />
				            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Rating" value="Rating" onChange={this.props.onSorterChange}  />
				            
				          </div>
				        </FormGroup>
					</Form>

				</div>
			);
	}
}