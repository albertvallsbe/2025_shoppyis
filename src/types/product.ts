export interface Product {
	id: number;
	title: string;
	price: number;
	description?: string;
	images: string[];
	category: { id: number; name: string };
}

export interface Order {
	id: number;
	products: Product[];
	totalPrice: number;
	totalProducts: number;
	createdAt: string;
}
