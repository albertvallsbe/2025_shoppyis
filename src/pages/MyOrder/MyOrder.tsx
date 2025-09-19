import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../components/Layout/Layout";
import { CartContext } from "../../context/cart/CartContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import type { Product, Order } from "../../types/product";

export const MyOrder = (): JSX.Element => {
	const context = useContext(CartContext);
	const { id: idOrLast } = useParams<{ id: string }>();

	let selectedOrder: Order | undefined;
	if (idOrLast === "last") {
		selectedOrder = context.order.at(-1);
	} else if (idOrLast) {
		selectedOrder = context.order.find(
			(order) => String(order.id) === idOrLast
		);
	}

	const products: Product[] = selectedOrder?.products ?? [];

	const showProduct = (product: Product) => {
		context.setProductToShow(product);
		context.openProductDetail();
	};

	const isNotFound = !selectedOrder;

	return (
		<Layout>
			<section className="order-page">
				<header className="order-page__header">
					<Link to="/my-orders" className="order-page__back" aria-label="Back">
						<ChevronLeftIcon />
					</Link>
					<h1 className="order-page__title">My Order</h1>
				</header>

				{isNotFound ? (
					<p className="order-page__empty">
						No s’ha trobat aquesta comanda.{" "}
						<Link to="/my-orders">Torna a My Orders</Link>
					</p>
				) : products.length === 0 ? (
					<p className="order-page__empty">
						No tens cap producte en aquesta comanda.
					</p>
				) : (
					<div className="aside-right__list">
						{products.map((product) => (
							<OrderCard
								key={product.id}
								id={product.id}
								title={product.title}
								imageUrl={product.images[0]}
								price={product.price}
								onClick={() => showProduct(product)}
							/>
						))}
					</div>
				)}
			</section>
		</Layout>
	);
};
