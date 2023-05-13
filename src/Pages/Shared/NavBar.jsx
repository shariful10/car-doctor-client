import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavBar = () => {
	const navItems = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/signup">Sign Up</Link>
			</li>
		</>
	);

	return (
		<div className="navbar h-28 mb-4 container mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						
						className="menu menu-compact dropdown-content mt-3 rounded-box w-52">
						{navItems}
					</ul>
				</div>
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItems}</ul>
			</div>
			<div className="navbar-end">
				<button className="btn-header">Appointment</button>
			</div>
		</div>
	);
};

export default NavBar;
