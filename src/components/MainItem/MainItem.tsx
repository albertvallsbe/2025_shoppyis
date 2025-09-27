import React, { useContext } from "react";
import type { Product } from "../../types/product";
import { CartContext } from "../../context/cart/CartContext";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

type ItemProps = { data: Product };

export const MainItem = ({ data }: ItemProps) => {
	const context = useContext(CartContext);

	const showProduct = (productDetail: Product) => {
		context.openProductDetail();
		context.closeCheckoutAsideMenu();
		context.setProductToShow(productDetail);
	};

	const addProductsToCart = (productData: Product, event: React.MouseEvent) => {
		event.stopPropagation();
		context.setCartProducts([...context.cartProducts, productData]);
		context.openCheckoutAsideMenu();
		context.closeProductDetail();
	};

	const handleProductDelete = (id: number) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id !== id
		);
		context.setCartProducts(filteredProducts);
	};

	const renderIcon = (id: number) => {
		const isInCart =
			context.cartProducts.filter((product) => product.id === id).length > 0;

		if (isInCart) {
			return (
				<button
					className="circle-icon"
					aria-label="Remove to cart"
					type="button"
					onClick={() => handleProductDelete(data.id)}
				>
					<MinusIcon></MinusIcon>
				</button>
			);
		} else {
			return (
				<button
					className="circle-icon"
					aria-label="Add to cart"
					type="button"
					onClick={(event) => addProductsToCart(data, event)}
				>
					<PlusIcon />
				</button>
			);
		}
	};

	return (
		<article
			className="main-item"
			role="card"
			aria-label="Main item"
			onClick={() => showProduct(data)}
		>
			<figure className="main-item__figure">
				<span className="main-item__tag">{data.category.name}</span>

				<img
					className="main-item__image"
					src={data.images[0]}
					alt={data.title}
				/>

				{renderIcon(data.id)}
			</figure>

			<div className="main-item__body">
				<h3>{data.title}</h3>
				<h4 className="price-label">{data.price.toFixed(2)}€</h4>
			</div>
		</article>
	);
};
