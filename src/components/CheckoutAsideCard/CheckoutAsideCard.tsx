import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart/CartContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";

export const CheckoutAsideCard = () => {
	const context = useContext(CartContext);

	if (!context.isCheckoutAsideMenuOpen) {
		// opcional: deixa l’aside muntat però ocult si prefereixes
		return null;
	}

	const handleProductDelete = (id: number) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id !== id
		);
		context.setCartProducts(filteredProducts);
		context.setCount(context.count - 1);
	};

	return (
		<aside className="product-detail">
			<div className="product-detail__header">
				<h2>My Order</h2>
				<button
					className="product-detail__close"
					type="button"
					aria-label="Close detail"
					onClick={context.closeCheckoutAsideMenu}
				>
					<XMarkIcon />
				</button>
			</div>

			<div className="product-detail__list">
				{context.cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.images[0]}
						price={product.price}
						handleProductDelete={handleProductDelete}
					/>
				))}
			</div>
		</aside>
	);
};
