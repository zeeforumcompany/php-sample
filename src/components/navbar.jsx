import React from "react";

const NavBar = ({ totalCounter }) => {
	console.log("Navbar - Rendered!");
	return (
		<nav className="navbar navbar-light bg-light">
			<a href="/home" className="navbar-brand">
				Simple Counter App&nbsp;
				<span className="badge badge-pill badge-secondary">
					{totalCounter}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
