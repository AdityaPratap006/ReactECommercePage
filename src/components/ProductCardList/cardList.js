import React from 'react';
import ProductCard from '../productCard/card.js';


const ProductCardList = ({productData}) => {
	//console.log('SearchBox');
const cardArray = productData.map((product, i) => {
	return (
			<ProductCard
			    
				key={i}
				id ={productData[i].id}
				img = {productData[i].img}
				name={productData[i].name}
				brand={productData[i].brand}
				price={productData[i].price}
				rating={productData[i].rating}
			    microphone={productData[i].microphone}
			    connectivity={productData[i].connectivity} 
			    type ={productData[i].type}
			    
			/>
		);
});

	return (
		<div className='prod-list'>
			
			{(cardArray.length > 0)? cardArray :<div style={{"margin":"4rem 0.5rem 4rem 0.5rem"}}>
				<h2>
					Oops! No Items Found :(
				</h2>
				<h3>
					Please adjust your filters
				</h3>
			</div>}
				
		</div>
	);
}

export default ProductCardList;