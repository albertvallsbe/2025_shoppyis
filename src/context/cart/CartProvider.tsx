import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../../types/product.js";

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
	// Shopping Cart · Increment quantity
	const [count, setCount] = useState(0);

	// Product Detail · Open/Close

	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product Detail · Show product
	const [productToShow, setProductToShow] = useState<Product | null>(null);

	// Shopping Cart · Add products to cart
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	return (
		<CartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
