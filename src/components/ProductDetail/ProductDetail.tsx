import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../context/cart/CartContext";

export const ProductDetail = () => {
	const context = useContext(CartContext);

	if (!context.isProductDetailOpen || !context.productToShow) {
		// opcional: deixa l’aside muntat però ocult si prefereixes
		return null;
	}

	return (
		<aside className="product-detail">
			<div className="product-detail__header">
				<h2>Detail</h2>
				<button
					className="product-detail__close"
					type="button"
					aria-label="Close detail"
					onClick={context.closeProductDetail}
				>
					<XMarkIcon></XMarkIcon>
				</button>
			</div>

			<figure className="product-detail__figure">
				<img
					className="product-detail__image"
					src={context.productToShow.images[0]}
					alt={context.productToShow.title}
				/>
			</figure>

			<div className="product-detail__body">
				<span className="product-detail__price">
					{context.productToShow.price}€
				</span>
				<span className="product-detail__title">
					{context.productToShow.title}
				</span>
				<p className="product-detail__desc">
					{context.productToShow.description}
				</p>
			</div>
		</aside>
	);
};
