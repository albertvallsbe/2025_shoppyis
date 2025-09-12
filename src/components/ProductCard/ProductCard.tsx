import React, { useContext } from "react";
import type { Product } from "../../types/product";
import { CartContext } from "../../context/cart/CartContext";
import { PlusIcon } from "@heroicons/react/24/solid";

type CardProps = { data: Product };

export const ProductCard = ({ data }: CardProps) => {
	const context = useContext(CartContext);

	const showProduct = (product: Product) => {
		context.openProductDetail();
		context.setProductToShow(product);
	};

	const addProductsToCart = (product: Product, event: React.MouseEvent) => {
		event.stopPropagation();
		context.setCount(context.count + 1);
		context.setCartProducts([...context.cartProducts, product]);
		console.log("CART: ", context.cartProducts);
	};

	return (
		<div
			className="product-card"
			role="article"
			aria-label="Product card"
			onClick={() => showProduct(data)}
		>
			<figure className="product-card__figure">
				<span className="product-card__tag">{data.category.name}</span>

				<img
					className="product-card__image"
					src={data.images[0]}
					alt={data.title}
				/>

				<button
					className="product-card__add"
					aria-label="Add to cart"
					type="button"
					onClick={(event) => addProductsToCart(data, event)}
				>
					<PlusIcon></PlusIcon>
				</button>
			</figure>
			<p className="product-card__meta">
				<span className="product-card__title">{data.title}</span>
				<span className="product-card__price">{data.price}€</span>
			</p>
		</div>
	);
};
