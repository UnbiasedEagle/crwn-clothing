import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Checkout from './pages/checkout/Checkout';

import { auth, createUserProfileDocument } from './firebase/firebase';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user-actions';
import { getCurrentUser } from './redux/user/user-selector';

import './App.css';
import CollectionPage from './pages/collection/CollectionPage';

class App extends React.Component {
	unsubscribeFromAuh = null;

	componentDidMount() {
		this.unsubscribeFromAuh = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const user = await createUserProfileDocument(userAuth);

				this.props.setCurrentUser(user);
			} else {
				this.props.setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuh();
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route
						exact
						path='/signin'
						render={(props) => {
							return this.props.user ? <Redirect to='/' /> : <SignInAndSignUp {...props} />;
						}}
					/>
					<Route exact path='/checkout' component={Checkout} />
					<Route exact path='/shop/:collectionId' component={CollectionPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	user: getCurrentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
