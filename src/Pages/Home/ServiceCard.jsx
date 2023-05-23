import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ service }) => {
	const { _id, title, img, price } = service;

	return (
		<div className="card w-full border">
			<figure className="p-5">
				<img src={img} alt="Shoes" className="rounded-xl h-[250px] w-full" />
			</figure>
			<div className="card-body">
				<h2 className="text-2xl font-bold">{title}</h2>
				<div className="flex justify-between items-center">
					<p className="text-xl text-[#FF3811] font-semibold">Price: ${price}</p>
					<Link to={`/book/${_id}`}>
						<HiArrowRight className="text-[#FF3811] h-6 w-6" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
