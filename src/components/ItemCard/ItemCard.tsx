import React, { useContext } from "react";
import type { Product } from "../../types/product";
import { CartContext } from "../../context/cart/CartContext";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

type CardProps = { data: Product };

export const ProductCard = ({ data }: CardProps) => {
	const context = useContext(CartContext);

	const showProduct = (productDetail: Product) => {
		context.openProductDetail();
		context.closeCheckoutAsideMenu();
		context.setProductToShow(productDetail);
	};

	const addProductsToCart = (productData: Product, event: React.MouseEvent) => {
		event.stopPropagation();
		context.setCount(context.count + 1);
		context.setCartProducts([...context.cartProducts, productData]);
		context.openCheckoutAsideMenu();
		context.closeProductDetail();
	};

	const handleProductDelete = (id: number) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id !== id
		);
		context.setCartProducts(filteredProducts);
		context.setCount(context.count - 1);
	};

	const renderIcon = (id: number) => {
		const isInCart =
			context.cartProducts.filter((product) => product.id === id).length > 0;

		if (isInCart) {
			return (
				<button
					className="item-card__add"
					aria-label="Add to cart"
					type="button"
					onClick={() => handleProductDelete(data.id)}
				>
					<MinusIcon></MinusIcon>
				</button>
			);
		} else {
			return (
				<button
					className="item-card__add"
					aria-label="Add to cart"
					type="button"
					onClick={(event) => addProductsToCart(data, event)}
				>
					<PlusIcon></PlusIcon>
				</button>
			);
		}
	};

	return (
		<div
			className="item-card"
			role="card"
			aria-label="Item card"
			onClick={() => showProduct(data)}
		>
			<figure className="item-card__figure">
				<span className="item-card__tag">{data.category.name}</span>

				<img
					className="item-card__image"
					src={data.images[0]}
					alt={data.title}
				/>

				{renderIcon(data.id)}
			</figure>
			<p className="item-card__meta">
				<span className="item-card__title">{data.title}</span>
				<span className="item-card__price">{data.price}€</span>
			</p>
		</div>
	);
};
