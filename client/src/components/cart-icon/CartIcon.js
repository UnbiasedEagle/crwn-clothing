import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { getCartItemsCount } from '../../redux/cart/cart-selector';

import { createStructuredSelector } from 'reselect';

import './CartIcon.css';

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemsCount: getCartItemsCount
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
