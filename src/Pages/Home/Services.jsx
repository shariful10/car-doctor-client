import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/images/time/timer.png";
import img2 from "../../assets/images/time/call.png";
import img3 from "../../assets/images/time/map.png";

const Services = () => {
	const [services, setServices] = useState([]);
	const [asc, setAcc] = useState(true);
	const [more, setMore] = useState(false);
	const [search, setSearch] = useState("");
	const searchRef = useRef(null);

	// First Way
	// useEffect(() => {
	// 	fetch(`http://localhost:5000/services?sort=${acc ? 'asc' : 'desc'}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setServices(data));
	// }, [acc]);

	// Second Way
	useEffect(() => {
		fetch(`http://localhost:5000/services?search=${search}&sort=${asc}`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [asc, search]);

	const handleSorting = (e) => {
		setAcc(e.target.value);
	};

	const handleSearch = () => {
		setSearch(searchRef.current.value);
	};

	return (
		<div className="mt-4 mx-4 md:mx-0">
			<div className="text-center">
				<h3 className="text-2xl font-bold text-[#FF3811]">Our Services</h3>
				<h2 className="text-[35px] md:text-[45px] my-2 md:my-5 font-bold">
					Our Service Area
				</h2>
				<p className="capitalize">
					the majority have suffered alteration in some form, by injected humour, or
					randomised <br /> words which do not look even slightly believable.{" "}
				</p>
				{/* First Way
				<button className="btn-all mt-5" onClick={() => setAcc(!acc)}>{acc ? "Descending" : "Ascending"}</button> */}
			</div>

			<div className="my-[50px] relative">
				{/* Second Way */}
				<div className="flex justify-between">
					<select
						onClick={handleSorting}
						className="select select-error md:w-1/5 focus:outline-0 focus:border-[#FF3811] focus:ring-0">
						<option value="asc">Ascending By Price</option>
						<option value="desc">Descending By Price</option>
					</select>
					<div className="form-control">
						<div className="input-group">
							<input
								type="text"
								ref={searchRef}
								placeholder="Search…"
								className="input input-bordered focus:outline-0 focus:ring-0 border-[#FF3811] focus:border-[#FF3811]"
							/>
							<button
								onClick={handleSearch}
								className="btn btn-square bg-[#FF3811] hover:bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] focus:border-[#FF3811]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					{services.slice(0, more ? 6 : 6).map((service) => (
						<ServiceCard key={service._id} service={service}></ServiceCard>
					))}
				</div>
				<div className="text-center mt-[50px]">
					<button onClick={() => setMore(!more)} className="btn-out">
						{more ? "Less Services" : "More Services"}
					</button>
				</div>
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
