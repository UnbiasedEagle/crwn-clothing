import React from 'react';

import './CartItem.css';

const CartItem = ({ item }) => {
	const { imageUrl, price, name, quantity } = item;

	const getPrice = () => {
		return (
			<span>
				{quantity} x ${price}
			</span>
		);
	};

	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				{getPrice()}
			</div>
		</div>
	);
};

export default React.memo(CartItem);
