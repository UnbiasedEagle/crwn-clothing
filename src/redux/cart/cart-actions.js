import { CartActionTypes } from './cart-types';

export const toggleCartHidden = () => {
	return {
		type: CartActionTypes.TOGGLE_CART_HIDDEN
	};
};

export const addCartItem = (item) => {
	return {
		type: CartActionTypes.ADD_CART_ITEM,
		payload: item
	};
};

export const removeCartItem = (id) => {
	return {
		type: CartActionTypes.CLEAR_CART_ITEM,
		payload: id
	};
};

export const removeItem = (item) => {
	return {
		type: CartActionTypes.REMOVE_ITEM,
		payload: item
	};
};
