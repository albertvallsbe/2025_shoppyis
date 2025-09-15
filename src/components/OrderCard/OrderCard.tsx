import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type OrderCardProps = {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	handleProductDelete?: (id: number) => void;
};

export const OrderCard = (orderCardProps: OrderCardProps) => {
	// const context = useContext(CartContext);

	// if (!context.isProductDetailOpen || !context.productToShow) {
	// 	// opcional: deixa l’aside muntat però ocult si prefereixes
	// 	return null;
	// }

	const { id, title, imageUrl, price, handleProductDelete } = orderCardProps;

	let renderXMarkIcon: React.ReactNode = null;
	if (handleProductDelete) {
		renderXMarkIcon = (
			<button
				className="order-card__remove"
				aria-label="Remove item"
				type="button"
				onClick={() => handleProductDelete(id)}
			>
				<XMarkIcon />
			</button>
		);
	}

	return (
		<div className="order-card">
			<figure className="order-card__media">
				<img className="order-card__img" src={imageUrl} alt={title} />
			</figure>
			<div className="order-card__info">
				<p className="order-card__title">{title}</p>
				<p className="order-card__price">{price}€</p>
			</div>
			{renderXMarkIcon}
		</div>
	);
};
