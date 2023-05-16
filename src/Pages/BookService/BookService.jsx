import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/checkout/checkout.png";
import img2 from "../../assets/images/checkout/Vector.png";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
	const service = useLoaderData();
	const { _id, price, title, img } = service;
	const pName = <span>Checkout</span>;
	const { user } = useContext(AuthContext);

	const handleBookService = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const date = form.date.value;
		const email = user?.email;
		const phone = form.phone.value;
		const booking = {
			customerName: name,
			email,
			date,
			img,
			phone,
			service: title,
			service_id: _id,
			price: price,
		};
		console.log(booking);

		fetch("http://localhost:5000/bookings", {
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
			<div
				style={{
					backgroundImage: `url(${img1})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100%",
					height: "300px",
					borderRadius: "10px",
				}}
				className="relative md:py-[123px] pl-[90px] md:pl-[100px] mt-[50px]">
				<h2 className="text-[45px] text-white font-bold">{pName}</h2>
				<p
					style={{
						backgroundImage: `url(${img2})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					className="text-center text-white text-xl font-medium absolute right-[10%] md:right-[38%] bottom-[-0.5px] h-[50px] w-[296px] py-[13px]">
					Home/{pName}
				</p>
			</div>
			<div className="card-body md:p-[97px] bg-[#F3F3F3] rounded-lg my-[50px] md:my-[130px]">
				<form onSubmit={handleBookService}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="form-control">
							<input
								type="text"
								name="name"
								defaultValue={user?.displayName}
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
