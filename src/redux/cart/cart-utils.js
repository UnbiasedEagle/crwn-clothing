export const addItemToCart = (cartItems, cartItemToAdd) => {
	const isCartItemPresent = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	if (isCartItemPresent) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	} else {
		return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
	}
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const isCartItemPresent = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	if (isCartItemPresent.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) => {
		if (cartItem.id === cartItemToRemove.id) {
			return { ...cartItem, quantity: cartItem.quantity - 1 };
		}
		return cartItem;
	});
};
