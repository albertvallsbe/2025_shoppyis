import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../../types/product.js";

export type CartContextType = {
	cartProducts: Product[];

	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	setCartProducts: Dispatch<SetStateAction<Product[]>>;

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
