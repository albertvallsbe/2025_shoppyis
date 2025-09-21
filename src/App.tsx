import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { CheckoutAsideCard } from "./components/AsideRightItemsList/AsideRightItemsList";
import { HomePage } from "./pages/HomePage/HomePage";
import { MyAccountPage } from "./pages/MyAccountPage/MyAccountPage";
import { MyOrderPage } from "./pages/MyOrderPage/MyOrderPage";
import { MyOrdersPage } from "./pages/MyOrdersPage/MyOrdersPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { ProductDetail } from "./components/AsideRightItemPreview/AsideRightItemPreview";
import { CartProvider } from "./context/cart/CartProvider";

export const App = () => {
	return (
		<>
			<CartProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/my-account" element={<MyAccountPage />} />
					<Route path="/my-orders" element={<MyOrdersPage />} />
					<Route path="/my-order/last" element={<MyOrderPage />} />
					<Route path="/my-order/:id" element={<MyOrderPage />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
				<Navbar />
				<ProductDetail />
				<CheckoutAsideCard />
			</CartProvider>
		</>
	);
};
