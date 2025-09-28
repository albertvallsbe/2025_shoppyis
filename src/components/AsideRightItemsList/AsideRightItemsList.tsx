import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart/CartContext";
import { OrderCard } from "../LineItem/LineItem";
import { totalPrice } from "../../utils";
import type { Order, Product } from "../../types/product";

export const CheckoutAsideCard = () => {
	const context = useContext(CartContext);

	if (!context.isCheckoutAsideMenuOpen) {
		// opcional: deixa l'aside muntat però ocult si prefereixes
		return null;
	}

	const handleProductDelete = (id: number) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id !== id
		);
		context.setCartProducts(filteredProducts);
	};

	const handleCheckout = () => {
		if (context.cartProducts.length === 0) return;

		const orderToAdd: Order = {
			id: Date.now(),
			products: context.cartProducts,
			totalProducts: context.cartProducts.length,
			totalPrice: totalPrice(context.cartProducts),
			createdAt: new Date().toISOString(),
		};

		context.setOrder((previousOrders) => [...previousOrders, orderToAdd]);
		context.setCartProducts([]);
		context.closeCheckoutAsideMenu();
		context.closeProductDetail();
		context.setSearchByTitle("");
	};

	const showProduct = (product: Product) => {
		context.setProductToShow(product);
		context.closeCheckoutAsideMenu();
		context.openProductDetail();
	};

	return (
		<aside className="aside-right">
			<div className="aside-right__header">
				<h3>My Order</h3>
				<button
					className="circle-icon"
					type="button"
					aria-label="Close detail"
					onClick={context.closeCheckoutAsideMenu}
				>
					<XMarkIcon />
				</button>
			</div>

			<div className="aside-right__list">
				{context.cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.images[0]}
						price={product.price}
						handleProductDelete={handleProductDelete}
						onClick={() => showProduct(product)}
					/>
				))}
			</div>
			<div className="aside-right__body">
				<div className="aside-right__total">
					<label>Total price: </label>
					<h4 className="price-label">
						{totalPrice(context.cartProducts).toFixed(2)}€
					</h4>
				</div>
			</div>
			<div>
				<Link to="/my-order/last" className="aside-right__footer">
					<button
						type="button"
						className="button button--primary"
						onClick={() => handleCheckout()}
						disabled={context.cartProducts.length === 0}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
};
