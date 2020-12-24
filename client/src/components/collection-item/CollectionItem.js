import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/CustomButton';
import './CollectionItem.css';

const CollectionItem = ({ id, name, price, imageUrl, addCartItem }) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{ background: `url(${imageUrl}) no-repeat center center/cover` }} />
			<CustomButton onClick={() => addCartItem({ id, name, price, imageUrl })} className='custom-button' inverted>
				ADD TO CART
			</CustomButton>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
		</div>
	);
};

export default connect(null, { addCartItem })(CollectionItem);
