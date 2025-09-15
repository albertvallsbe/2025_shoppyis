import { Product } from "../types/product";

/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */
export const totalPrice = (products: Product[]): number => {
	return products.reduce((suma, product) => suma + product.price, 0);
};
