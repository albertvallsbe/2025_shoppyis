import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../components/Layout/Layout";
import { CartContext } from "../../context/cart/CartContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import type { Product } from "../../types/product";

export const MyOrder = () => {
	const context = useContext(CartContext);
	const lastOrder = context.order.at(-1);
	const products: Product[] = lastOrder?.products ?? [];

	return (
		<Layout>
			<section className="order-page">
				<header className="order-page__header">
					<Link to="/my-orders" className="order-page__back" aria-label="Back">
						<ChevronLeftIcon />
					</Link>
					<h1 className="order-page__title">My Order</h1>
				</header>
				<div className="product-detail__list">
					{products.length === 0 ? (
						<p className="order-page__empty">No tens cap comanda encara.</p>
					) : (
						products.map((product) => (
							<OrderCard
								key={product.id}
								id={product.id}
								title={product.title}
								imageUrl={product.images[0]}
								price={product.price}
							/>
						))
					)}
				</div>
			</section>
		</Layout>
	);
};
