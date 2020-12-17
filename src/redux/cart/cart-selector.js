import { createSelector } from 'reselect';

//Input Selectors
const getCart = (state) => state.cart;

//Memoized Selectors
export const getCartItems = createSelector([ getCart ], (cart) => cart.cartItems);

export const getCartItemsCount = createSelector([ getCartItems ], (cartItems) =>
	cartItems.reduce((result, curr) => {
		return result + curr.quantity;
	}, 0)
);

export const getCartHidden = createSelector([ getCart ], (cart) => !cart.hidden);

export const getCartTotal = createSelector([ getCartItems ], (cartItems) =>
	cartItems.reduce((result, curr) => {
		return result + curr.price * curr.quantity;
	}, 0)
);
