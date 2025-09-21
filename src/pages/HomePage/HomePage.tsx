import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MainItem } from "../../components/MainItem/MainItem";
import { ProductDetail } from "../../components/AsideRightItemPreview/AsideRightItemPreview";
import { CartContext } from "../../context/cart/CartContext";

export const HomePage = (): JSX.Element => {
	const context = useContext(CartContext);

	const renderView = () => {
		if (context.filteredItems?.length > 0) {
			return context.filteredItems?.map((item) => (
				<MainItem key={item.id} data={item} />
			));
		} else {
			return <div>We don't have anything :(</div>;
		}
	};

	return (
		<Layout>
			<header className="orders-page__header">
				<h1>Shoppyis</h1>
			</header>
			<input
				type="text"
				placeholder="Search a product"
				className="home-search"
				onChange={(event) => context.setSearchByTitle(event.target.value)}
			/>
			<div className="main-items-grid">
				{/* {context.items?.map((item) => (
					<MainItem key={item.id} data={item} />
				))} */}
				{renderView()}
			</div>
			<ProductDetail />
		</Layout>
	);
};
