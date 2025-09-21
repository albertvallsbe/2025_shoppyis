import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product, Order } from "../../types/product.js";

export const CartProvider = ({ children }: { children: ReactNode }) => {
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

	// Get products
	const [items, setItems] = useState<Product[]>([]);

	// Filteres items
	const [filteredItems, setFilteredItems] = useState<Product[]>([]);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = useState<string>("");

	// Get products by category
	const [searchByCategory, setSearchByCategory] = useState<string>("");

	useEffect(() => {
		fetch(import.meta.env.VITE_PLATZI_API_BASE)
			.then((response) => response.json())
			.then((data: Product[]) => setItems(data ?? []));
	}, []);

	const { pathname: currentPathname } = useLocation();

	useEffect(() => {
		const firstPathSegment = currentPathname.split("/")[1]?.toLowerCase() ?? "";
		const allowedCategorySlugs = new Set([
			"",
			"clothes",
			"electronics",
			"shoes",
		]);
		const normalizedCategoryFromRoute = allowedCategorySlugs.has(
			firstPathSegment
		)
			? firstPathSegment
			: "";
		setSearchByCategory(normalizedCategoryFromRoute);
		setSearchByTitle("");
	}, [currentPathname]);

	useEffect(() => {
		const normalizedTitleQuery = (searchByTitle ?? "").trim().toLowerCase();
		const normalizedCategoryQuery = (searchByCategory ?? "")
			.trim()
			.toLowerCase();

		let resultingFilteredProducts: Product[] = items;

		if (normalizedCategoryQuery) {
			resultingFilteredProducts = resultingFilteredProducts.filter((product) =>
				product.category?.name?.toLowerCase().includes(normalizedCategoryQuery)
			);
		}

		if (normalizedTitleQuery) {
			resultingFilteredProducts = resultingFilteredProducts.filter((product) =>
				product.title?.toLowerCase().includes(normalizedTitleQuery)
			);
		}

		setFilteredItems(resultingFilteredProducts);
	}, [items, searchByTitle, searchByCategory]);

	return (
		<CartContext.Provider
			value={{
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

				items,
				setItems,

				searchByTitle,
				setSearchByTitle,

				searchByCategory,
				setSearchByCategory,

				filteredItems,
				setFilteredItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
