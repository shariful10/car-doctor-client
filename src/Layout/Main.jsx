import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
	return (
		<div>
			<NavBar />
			<div className="min-h[calc(100vh-348px)] max-w-7xl mx-auto">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
