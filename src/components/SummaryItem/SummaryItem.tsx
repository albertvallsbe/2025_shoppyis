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
				<label>01.02.23</label>
				<label>{totalProducts} Articles</label>
			</div>
			<div className="summary-item__right">
				<h4 className="price-label">{totalPrice.toFixed(2)}€</h4>
				<span className="circle-icon">
					<ChevronRightIcon />
				</span>
			</div>
		</article>
	);
};
