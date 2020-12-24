import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import { auth } from '../../firebase/firebase';
import { createStructuredSelector } from 'reselect';
import { getCartHidden } from '../../redux/cart/cart-selector';
import { getCurrentUser } from '../../redux/user/user-selector';

import CartDropdown from '../cart-dropdown/CartDropdown';

import { LogoContainer, OptionsContainer, HeaderContainer, OptionLink } from './Header.styles';

import './Header.css';
const Header = ({ user, showCartDropdown }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				{user ? (
					<OptionLink as='div' style={{ cursor: 'pointer' }} onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{showCartDropdown && <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	user: getCurrentUser,
	showCartDropdown: getCartHidden
});

export default connect(mapStateToProps)(Header);
