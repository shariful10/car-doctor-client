import React, { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import TopBanner from "../Shared/Banner/TopBanner";
import { AuthContext } from "../../Provider/AuthProvider";
import img2 from "../../assets/images/checkout/Vector.png";

const BookService = () => {
	const service = useLoaderData();
	const { _id, price, title, img } = service;
	const { user } = useContext(AuthContext);
	useTitle("Book Service");

	const handleBookService = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const date = form.date.value;
		const email = user?.email;
		const phone = form.phone.value;
		const booking = {
			service: name,
			email,
			date,
			img,
			phone,
			service_id: _id,
			price: price,
		};
		console.log(booking);

		fetch("https://car-doctor-server-shariful10.vercel.app/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert("Inserted successfully");
				}
			});
	};

	return (
		<div>
			<div className="">
				<TopBanner>
					<h2 className="bnr-title">Service</h2>
					<p
						style={{
							backgroundImage: `url(${img2})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
						className="bnr-breadcrumb">
						Home/Service
					</p>
				</TopBanner>
			</div>
			<div className="card-body md:p-[97px] bg-[#F3F3F3] rounded-lg my-[50px] md:my-[130px]">
				<form onSubmit={handleBookService}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="form-control">
							<input
								type="text"
								name="name"
								defaultValue={title}
								placeholder="Your Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input type="date" name="date" className="input input-bordered" />
						</div>
						<div className="form-control">
							<input
								type="text"
								name="phone"
								placeholder="Your Phone"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="email"
								name="email"
								defaultValue={user?.email}
								placeholder="Your Email"
								className="input input-bordered"
							/>
						</div>
					</div>
					<textarea
						name="msg"
						className="textarea textarea-bordered w-full mt-6 h-[250px]"
						placeholder="Your Message"></textarea>
					<input className="btn-form mt-6" type="submit" value="Order Confirm" />
				</form>
			</div>
		</div>
	);
};

export default BookService;
