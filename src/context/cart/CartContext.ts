import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Product, Order } from "../../types/product.js";

export type CartContextType = {
	cartProducts: Product[];
	setCartProducts: Dispatch<SetStateAction<Product[]>>;

	items: Product[];
	setItems: Dispatch<SetStateAction<Product[]>>;

	searchByTitle: string;
	setSearchByTitle: Dispatch<SetStateAction<string>>;

	searchByCategory: string;
	setSearchByCategory: Dispatch<SetStateAction<string>>;

	filteredItems: Product[];
	setFilteredItems: Dispatch<SetStateAction<Product[]>>;

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
	items: [],
	setItems: () => {},

	searchByTitle: "",
	setSearchByTitle: () => {},

	searchByCategory: "",
	setSearchByCategory: () => {},

	filteredItems: [],
	setFilteredItems: () => {},

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
