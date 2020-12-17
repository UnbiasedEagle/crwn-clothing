import React from 'react';

import './CustomButton.css';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
	return (
		<button
			{...otherProps}
			className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}`}
		>
			{children}
		</button>
	);
};

export default CustomButton;
