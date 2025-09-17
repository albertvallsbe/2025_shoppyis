import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ProductCard } from "../../components/ItemCard/ItemCard";
import { ProductDetail } from "../../components/ItemPreview/ItemPreview";
import type { Product } from "../../types/product.js";

export const Home = (): JSX.Element => {
	const [items, setItems] = useState<Product[]>([]);

	useEffect(() => {
		fetch(import.meta.env.VITE_PLATZI_API_BASE)
			.then((response) => response.json())
			.then((data: Product[]) => setItems(data ?? []));
	}, []);

	return (
		<Layout>
			<div className="products-grid">
				{items?.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
};
