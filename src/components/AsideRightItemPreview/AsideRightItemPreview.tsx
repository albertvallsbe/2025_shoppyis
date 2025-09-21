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
		<aside className="aside-right">
			<div className="aside-right__header">
				<h2>Detail</h2>
				<button
					className="aside-right__circle-icon"
					type="button"
					aria-label="Close detail"
					onClick={context.closeProductDetail}
				>
					<XMarkIcon></XMarkIcon>
				</button>
			</div>

			<figure className="aside-right__figure">
				<img
					className="aside-right__image"
					src={context.productToShow.images[0]}
					alt={context.productToShow.title}
				/>
			</figure>

			<div className="aside-right__body">
				<span className="price-label">{context.productToShow.price}€</span>
				<span className="aside-right__title">
					{context.productToShow.title}
				</span>
				<p className="aside-right__desc">{context.productToShow.description}</p>
			</div>
		</aside>
	);
};
