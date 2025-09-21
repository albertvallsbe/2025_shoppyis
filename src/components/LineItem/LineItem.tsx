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
				className="line-item__circle-icon"
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
		<div className="line-item" onClick={onClick}>
			<figure className="line-item__media">
				<img className="line-item__img" src={imageUrl} alt={title} />
			</figure>
			<div className="line-item__info">
				<p className="line-item__title">{title}</p>
				<p className="line-item__price-label">{price}€</p>
			</div>
			{renderXMarkIcon}
		</div>
	);
};
