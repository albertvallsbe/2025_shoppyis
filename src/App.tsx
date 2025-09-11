import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { MyOrder } from "./pages/MyOrder/MyOrder";
import { MyOrders } from "./pages/MyOrders/MyOrders";
import { NotFound } from "./pages/NotFound/NotFound";
import { SignIn } from "./pages/SignIn/SignIn";
import "./App.css";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/my-account" element={<MyAccount />} />
				<Route path="/my-order" element={<MyOrder />} />
				<Route path="/my-order" element={<MyOrders />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Navbar />
		</>
	);
};
