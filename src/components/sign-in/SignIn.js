import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle, auth } from '../../firebase/firebase';

import './SignIn.css';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.error('Error signing in with password and email', error);
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label='Email'
					/>

					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
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
	}
}

export default SignIn;
