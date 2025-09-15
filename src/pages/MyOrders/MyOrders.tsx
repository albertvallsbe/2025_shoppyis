import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { CartContext } from "../../context/cart/CartContext";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";

export const MyOrders = () => {
	const context = useContext(CartContext);

	return (
		<Layout>
			<section className="orders-page">
				<header className="orders-page__header">
					<h1>My Orders</h1>
				</header>

				<div className="product-detail__list">
					{context.order.map((order, index) => (
						<Link
							className="orders-page__item"
							key={index}
							to={`/my-orders/${index}`}
						>
							<OrdersCard
								totalPrice={order.totalPrice}
								totalProducts={order.totalProducts}
							/>
						</Link>
					))}
				</div>
			</section>
		</Layout>
	);
};
