import React from 'react';
import './FormInput.css';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className='group'>
			<input placeholder={label} {...otherProps} className='form-input' onChange={handleChange} />
		</div>
	);
};

export default FormInput;
