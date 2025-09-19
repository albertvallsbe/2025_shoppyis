import { ChevronRightIcon } from "@heroicons/react/24/solid";

type OrdersCardProps = {
	totalPrice: number;
	totalProducts: number;
};

export const OrdersCard = (OrdersCardProps: OrdersCardProps) => {
	const { totalPrice, totalProducts } = OrdersCardProps;

	return (
		<article className="orders-card">
			<div className="orders-card__left">
				<span className="orders-card__date">01.02.23</span>
				<span className="orders-card__count">{totalProducts} Articles</span>
			</div>
			<div className="orders-card__right">
				<span className="orders-card__total">{totalPrice}€</span>
				<span className="icon">
					<ChevronRightIcon />
				</span>
			</div>
		</article>
	);
};
