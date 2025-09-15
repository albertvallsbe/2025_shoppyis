import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product, Order } from "../../types/product.js";

export const CartProvider = ({ children }: { children: ReactNode }) => {
	// Shopping Cart · Increment quantity
	const [count, setCount] = useState(0);

	// Product Detail · Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product Detail · Open/Close
	const [isCheckoutAsideMenuOpen, setIsCheckoutAsideMenuOpen] = useState(false);
	const openCheckoutAsideMenu = () => setIsCheckoutAsideMenuOpen(true);
	const closeCheckoutAsideMenu = () => setIsCheckoutAsideMenuOpen(false);

	// Product Detail · Show product
	const [productToShow, setProductToShow] = useState<Product | null>(null);

	// Shopping Cart · Add products to cart
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	// Shopping Cart · Order
	const [order, setOrder] = useState<Order[]>([]);

	return (
		<CartContext.Provider
			value={{
				count,
				setCount,
				productToShow,
				setProductToShow,

				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,

				openCheckoutAsideMenu,
				closeCheckoutAsideMenu,
				isCheckoutAsideMenuOpen,

				cartProducts,
				setCartProducts,

				order,
				setOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
