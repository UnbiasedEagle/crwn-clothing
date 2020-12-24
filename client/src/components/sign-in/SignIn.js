import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle, auth } from '../../firebase/firebase';

import './SignIn.css';

const SignIn = () => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = userCredentials;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			setUserCredentials({
				email: '',
				password: ''
			});
		} catch (error) {
			console.error('Error signing in with password and email', error);
		}
	};

	const handleChange = (e) => {
		setUserCredentials({
			...userCredentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={userCredentials.email}
					handleChange={handleChange}
					required
					label='Email'
				/>

				<FormInput
					type='password'
					name='password'
					value={userCredentials.password}
					handleChange={handleChange}
					required
					label='Password'
				/>
				<div className='buttons'>
					<CustomButton type='submit'>SIGN IN</CustomButton>
					<CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
