import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { CartContext } from "../../context/cart/CartContext";
import { OrdersCard } from "../../components/SummaryItem/SummaryItem";

export const MyOrdersPage = () => {
	const context = useContext(CartContext);

	return (
		<Layout>
			<section className="orders">
				<header className="orders__header">
					<h1>My Orders</h1>
				</header>

				<div className="orders__list">
					{context.order.map((order, index) => (
						<Link
							className="orders__item"
							key={index}
							to={`/my-order/${order.id}`}
							state={order}
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
