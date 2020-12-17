import React from 'react';
import './StripeButton.css';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	//coverting usd to cents
	const priceForStripe = price * 100;

	//stripe publishable key
	const publishableKey =
		'pk_test_51Hy8yxLULwhv2HjBHlVv4Angj8OxkUSZAmQwAJxE5Hz7iCKy5q2VI0sILdYvzfJSxD7rRTO479q8sB3blcxobJKj00zl2aCxdy';

	const onToken = (token) => {
		alert('Payment Successfull');
		console.log(token);
	};

	return (
		<StripeCheckout
			stripeKey={publishableKey}
			amount={priceForStripe}
			label='Pay Now'
			name='CRWN Clothing Ltd'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			panelLabel='Pay Now'
			token={onToken}
		/>
	);
};

export default StripeButton;
