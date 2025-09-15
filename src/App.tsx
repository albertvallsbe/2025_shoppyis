import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { CheckoutAsideCard } from "./components/CheckoutAsideCard/CheckoutAsideCard";
import { Home } from "./pages/Home/Home";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { MyOrder } from "./pages/MyOrder/MyOrder";
import { MyOrders } from "./pages/MyOrders/MyOrders";
import { NotFound } from "./pages/NotFound/NotFound";
import { SignIn } from "./pages/SignIn/SignIn";
import { CartProvider } from "./context/cart/CartProvider";

export const App = () => {
	return (
		<>
			<CartProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/my-account" element={<MyAccount />} />
					<Route path="/my-order" element={<MyOrder />} />
					<Route path="/my-orders" element={<MyOrders />} />
					<Route path="/my-orders/last" element={<MyOrder />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
				<Navbar />
				<CheckoutAsideCard />
			</CartProvider>
		</>
	);
};
