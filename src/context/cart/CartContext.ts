import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../../types/product.js";

export type CartContextType = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	cartProducts: Product[];
	setCartProducts: Dispatch<SetStateAction<Product[]>>;

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
	productToShow: null,
	setProductToShow: () => {},
});
