import { NavLink } from "react-router-dom";

export const Navbar = () => {
	const linkClass = ({ isActive }: { isActive: boolean }) =>
		`navbar__link${isActive ? " is-active" : ""}`;

	return (
		<nav className="navbar">
			<ul className="navbar__left">
				<li className="navbar__brand">
					<NavLink to="/" className="navbar__brand-link">
						Shoppyis
					</NavLink>
				</li>
				<li>
					<NavLink to="/" className={linkClass}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink to="/clothes" className={linkClass}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink to="/electronics" className={linkClass}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink to="/furnitures" className={linkClass}>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink to="/toys" className={linkClass}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink to="/others" className={linkClass}>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="navbar__right">
				<li className="navbar__email">titu@platzi.com</li>
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
				<li>
					<NavLink to="/sign-in" className={linkClass}>
						Sign In
					</NavLink>
				</li>
				<li className="navbar__cart" aria-label="Cart">
					🛒 <span>0</span>
				</li>
			</ul>
		</nav>
	);
};
