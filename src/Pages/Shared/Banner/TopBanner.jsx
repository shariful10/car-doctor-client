import React from "react";
import img1 from "../../../assets/images/checkout/checkout.png";

const TopBanner = ({ children }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "300px",
				borderRadius: "10px",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `url(${img1})`,
			}}
			className="relative md:py-[123px] pl-[90px] md:pl-[100px] mt-[50px]">
			{children}
		</div>
	);
};

export default TopBanner;
