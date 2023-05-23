import React from "react";
import img from "../../assets/images/bookings/cart-details.png";

const CartBanner = ({ children }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${img})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				width: "100%",
				height: "300px",
				borderRadius: "10px",
			}}
			className="bg-gradient-to-r from-[#151515] to-[#15151500]">
			{children}
		</div>
	);
};

export default CartBanner;
