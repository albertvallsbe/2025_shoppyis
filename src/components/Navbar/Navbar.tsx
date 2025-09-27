import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";

export const Navbar = () => {
	const context = useContext(CartContext);
	const linkClass = ({ isActive }: { isActive: boolean }) =>
		`navbar__link${isActive ? " is-active" : ""}`;

	const openCheckoutAsideMenu = (event: React.MouseEvent) => {
		event.stopPropagation();
		context.openCheckoutAsideMenu();
	};

	return (
		<nav className="navbar">
			<div className="navbar__left">
				<h3>
					<NavLink
						to="/"
						onClick={() => {
							context.setSearchByCategory("");
							context.setSearchByTitle("");
						}}
						className="navbar__brand-link"
					>
						Shoppyis
					</NavLink>
				</h3>
				<ul>
					<li>
						<NavLink
							to="/"
							onClick={() => {
								context.setSearchByCategory("");
								context.setSearchByTitle("");
							}}
							className={linkClass}
						>
							All
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/electronics"
							onClick={() => {
								context.setSearchByCategory("electronics");
								context.setSearchByTitle("");
							}}
							className={linkClass}
						>
							Electronics
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/clothes"
							onClick={() => {
								context.setSearchByCategory("clothes");
								context.setSearchByTitle("");
							}}
							className={linkClass}
						>
							Clothes
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/shoes"
							onClick={() => {
								context.setSearchByCategory("shoes");
								context.setSearchByTitle("");
							}}
							className={linkClass}
						>
							Shoes
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar__right">
				<ul>
					<li>
						<NavLink to="/my-orders" className={linkClass}>
							My Orders
						</NavLink>
					</li>
					<li>
						<NavLink to="/my-account" className={linkClass}>
							My Account
						</NavLink>
					</li>
					<li className="navbar__user">titu@platzi.com</li>
					<li>
						<NavLink to="/sign-in" className={linkClass}>
							Sign In
						</NavLink>
					</li>
					<li>
						<button
							className="navbar__checkout"
							aria-label="Cart"
							onClick={(event) => openCheckoutAsideMenu(event)}
						>
							<span>🛒</span>
							<span>{context.cartProducts.length}</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
