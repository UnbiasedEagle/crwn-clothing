import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import { getCartItems, getCartTotal } from '../../redux/cart/cart-selector';
import './Checkout.css';

const Checkout = ({ cartItems, totalCartPrice }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-blocks'>
					<span>Product</span>
				</div>
				<div className='header-blocks'>
					<span>Description</span>
				</div>
				<div className='header-blocks'>
					<span>Quantity</span>
				</div>
				<div className='header-blocks'>
					<span>Price</span>
				</div>
				<div className='header-blocks'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} item={cartItem} />)}
			<div className='total'>
				<span>TOTAL: ${totalCartPrice}</span>
			</div>
			<div className='test-warning'>
				*Please use the following test credit card for the payment* <br /> 4242 4242 4242 4242 - Exp: 05/2025 -
				CVC: 123
			</div>
			<StripeButton price={totalCartPrice} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: getCartItems,
	totalCartPrice: getCartTotal
});

export default connect(mapStateToProps)(Checkout);
