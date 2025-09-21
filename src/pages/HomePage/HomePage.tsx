import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MainItem } from "../../components/MainItem/MainItem";
import { ProductDetail } from "../../components/AsideRightItemPreview/AsideRightItemPreview";
import type { Product } from "../../types/product.js";

export const HomePage = (): JSX.Element => {
	const [items, setItems] = useState<Product[]>([]);

	useEffect(() => {
		fetch(import.meta.env.VITE_PLATZI_API_BASE)
			.then((response) => response.json())
			.then((data: Product[]) => setItems(data ?? []));
	}, []);

	return (
		<Layout>
			<div className="main-items-grid">
				{items?.map((item) => (
					<MainItem key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
};
