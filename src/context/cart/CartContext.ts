import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Product, Order } from "../../types/product.js";

export type CartContextType = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;

	cartProducts: Product[];
	setCartProducts: Dispatch<SetStateAction<Product[]>>;

	order: Order[];
	setOrder: Dispatch<SetStateAction<Order[]>>;

	// Checkout Side Menu
	isCheckoutAsideMenuOpen: boolean;
	openCheckoutAsideMenu: () => void;
	closeCheckoutAsideMenu: () => void;

	// Product Detail
	isProductDetailOpen: boolean;
	openProductDetail: () => void;
	closeProductDetail: () => void;

	productToShow: Product | null;
	setProductToShow: Dispatch<SetStateAction<Product | null>>;
};

export const CartContext = createContext<CartContextType>({
	count: 0,
	setCount: () => {},

	order: [],
	setOrder: () => {},

	cartProducts: [],
	setCartProducts: () => {},

	isProductDetailOpen: false,
	openProductDetail: () => {},
	closeProductDetail: () => {},

	isCheckoutAsideMenuOpen: false,
	openCheckoutAsideMenu: () => {},
	closeCheckoutAsideMenu: () => {},

	productToShow: null,
	setProductToShow: () => {},
});
