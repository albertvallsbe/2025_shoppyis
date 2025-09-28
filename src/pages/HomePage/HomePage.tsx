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
			<header>
				<h1>Shoppyis</h1>
			</header>

			<div className="form__group">
				<input
					type="text"
					placeholder="Search a product"
					className="form__control"
					onChange={(event) => context.setSearchByTitle(event.target.value)}
				/>
			</div>

			<div className="main-items-grid">{renderView()}</div>
			<ProductDetail />
		</Layout>
	);
};
