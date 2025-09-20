import { ChevronRightIcon } from "@heroicons/react/24/solid";

type OrdersCardProps = {
	totalPrice: number;
	totalProducts: number;
};

export const OrdersCard = (OrdersCardProps: OrdersCardProps) => {
	const { totalPrice, totalProducts } = OrdersCardProps;

	return (
		<article className="summary-item">
			<div className="summary-item__left">
				<span className="summary-item__date">01.02.23</span>
				<span className="summary-item__count">{totalProducts} Articles</span>
			</div>
			<div className="summary-item__right">
				<span className="summary-item__price-label">{totalPrice}€</span>
				<span className="summary-item__circle-icon">
					<ChevronRightIcon />
				</span>
			</div>
		</article>
	);
};
