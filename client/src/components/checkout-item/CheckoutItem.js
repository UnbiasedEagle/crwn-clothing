import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, addCartItem, removeItem } from '../../redux/cart/cart-actions';
import './CheckoutItem.css';

const CheckoutItem = ({ item, removeCartItem, addCartItem, removeItem }) => {
	const { imageUrl, name, quantity, price, id } = item;

	const onRemoveHandler = () => {
		removeCartItem(id);
	};

	const removeItemHandler = () => {
		removeItem(item);
	};

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div onClick={removeItemHandler} className='arrow'>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div onClick={() => addCartItem(item)} className='arrow'>
					&#10095;
				</div>
			</span>
			<span className='price'>${price}</span>
			<div className='remove-button' onClick={onRemoveHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default connect(null, { removeCartItem, addCartItem, removeItem })(CheckoutItem);
