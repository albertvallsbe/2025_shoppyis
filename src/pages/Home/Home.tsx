import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import type { Product } from "../../types/product.js";

export const Home = (): JSX.Element => {
	const [items, setItems] = useState<Product[]>([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
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
