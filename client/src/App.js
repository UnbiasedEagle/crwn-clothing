import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user-actions';
import { getCurrentUser } from './redux/user/user-selector';

import './App.css';
import CollectionPage from './pages/collection/CollectionPage';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/SignInAndSignUp'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

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
					<Suspense fallback={<Spinner />}>
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
					</Suspense>
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	user: getCurrentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
