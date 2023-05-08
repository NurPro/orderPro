import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
});

export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);

	const addItem = (data) => {
		console.log('data: ', data);

		setCartState([...cartState, data]);
	};

	const cartValue = {
		items: cartState,
		totalAmount: 0,
		addItem,
	};

	return (
		<CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
	);
};
