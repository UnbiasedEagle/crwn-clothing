import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import { auth } from '../../firebase/firebase';
import { createStructuredSelector } from 'reselect';
import { getCartHidden } from '../../redux/cart/cart-selector';
import { getCurrentUser } from '../../redux/user/user-selector';

import CartDropdown from '../cart-dropdown/CartDropdown';

import './Header.css';
const Header = ({ user, showCartDropdown }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>
				{user ? (
					<div style={{ cursor: 'pointer' }} onClick={() => auth.signOut()} className='option'>
						SIGN OUT
					</div>
				) : (
					<Link to='/signin' className='option'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{showCartDropdown && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getCurrentUser,
	showCartDropdown: getCartHidden
});

export default connect(mapStateToProps)(Header);
