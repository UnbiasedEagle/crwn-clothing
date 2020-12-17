import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { getCartItems } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { createStructuredSelector } from 'reselect';
import './CartDropdown.css';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	const onCheckoutClick = () => {
		toggleCartHidden();

		history.push('/checkout');
	};

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={onCheckoutClick}>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: getCartItems
});

export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown));
