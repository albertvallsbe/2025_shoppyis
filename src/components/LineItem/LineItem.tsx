import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type OrderCardProps = {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	handleProductDelete?: (id: number) => void;
	onClick?: () => void;
};

export const OrderCard = (orderCardProps: OrderCardProps) => {
	const { id, title, imageUrl, price, handleProductDelete, onClick } =
		orderCardProps;

	let renderXMarkIcon: React.ReactNode = null;
	if (handleProductDelete) {
		renderXMarkIcon = (
			<button
				className="order-card__remove"
				aria-label="Remove item"
				type="button"
				onClick={(event) => {
					event.stopPropagation();
					handleProductDelete(id);
				}}
			>
				<XMarkIcon />
			</button>
		);
	}

	return (
		<div className="order-card" onClick={onClick}>
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
