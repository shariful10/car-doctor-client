import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import img1 from '../../assets/images/time/timer.png'
import img2 from '../../assets/images/time/call.png'
import img3 from '../../assets/images/time/map.png'

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className="mt-4">
			<div className="text-center">
				<h3 className="text-2xl font-bold text-[#FF3811]">Our Services</h3>
				<h2 className="text-[45px] my-5 font-bold">Our Service Area</h2>
				<p className="capitalize">
					the majority have suffered alteration in some form, by injected humour, or
					randomised <br /> words which do not look even slightly believable.{" "}
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[50px]">
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
			<div className="text-center">
				<button className="btn-out">More Services</button>
			</div>
			<div className="my-[130px] bg-[#151515] px-[73px] py-[95px] rounded-lg flex justify-between">
				<div className="text-white flex items-center gap-5">
					<img className="w-10 h-10" src={img1} alt="" />
					<div>
						<p className="text-[16px]">We are open monday-friday</p>
						<h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
					</div>
				</div>
				<div className="text-white flex items-center gap-5">
					<img className="w-10 h-10" src={img2} alt="" />
					<div>
						<p className="text-[16px]">Have a question?</p>
						<h2 className="text-2xl font-bold">+2546 251 2658</h2>
					</div>
				</div>
				<div className="text-white flex items-center gap-5">
					<img className="w-10 h-10" src={img3} alt="" />
					<div>
						<p className="text-[16px]">Need a repair? our address</p>
						<h2 className="text-2xl font-bold">Liza Street, New York</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
