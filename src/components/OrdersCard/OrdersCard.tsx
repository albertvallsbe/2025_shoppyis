type OrdersCardProps = {
	totalPrice: number;
	totalProducts: number;
};

export const OrdersCard = (OrdersCardProps: OrdersCardProps) => {
	const { totalPrice, totalProducts } = OrdersCardProps;

	return (
		<article className="orders-card">
			<span className="orders-card__date">01.02.23</span>
			<span className="orders-card__count">{totalProducts}</span>
			<span className="orders-card__total">{totalPrice}€</span>
		</article>
	);
};
