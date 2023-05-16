import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/images/bookings/cart-details.png";
import BookingRow from "./BookingRow";

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState([]);

	const pTitle = <span>Cart Details</span>;
	const pName = <span>Product Details</span>;
	const url = `http://localhost:5000/bookings?email=${user?.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, [url]);

	const handleDelete = (id) => {
		const proceed = confirm("Are you sure you want to delete");
		if (proceed) {
			fetch(`http://localhost:5000/bookings/${id}`, {
				method: "DELETE",
				// headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("Successfully deleted");
						const remaining = bookings.filter((booking) => booking._id !== id);
						setBookings(remaining);
					}
				});
		}
	};

	const handleBookingConfirm = (id) => {
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "confirm" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					const remaining = bookings.filter((booking) => booking._id !== id);
					const updated = bookings.find((booking) => booking._id === id);
					updated.status = "confirm";
					const newBookings = [updated, ...remaining];
					setBookings(newBookings);
				}
			});
	};

	return (
		<div>
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
				<h2 className="text-[45px] text-white font-bold pt-[100px] pl-[124px]">{pTitle}</h2>
				<p className="text-[#FF3811] text-[16px] font-medium pl-[124px]">Home/{pName}</p>
			</div>
			<div className="overflow-x-auto w-full my-[130px]">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th className="bg-[#FF3811]"></th>
							<th className="bg-[#FF3811]"></th>
							<th className="capitalize text-xl bg-[#FF3811] text-white font-normal">
								Service
							</th>
							<th className="capitalize text-xl bg-[#FF3811] text-white font-normal">
								Price
							</th>
							<th className="capitalize text-xl bg-[#FF3811] text-white font-normal">
								Date
							</th>
							<th className="capitalize text-xl bg-[#FF3811] text-white font-normal">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((booking) => (
							<BookingRow
								key={booking._id}
								booking={booking}
								handleDelete={handleDelete}
								handleBookingConfirm={handleBookingConfirm}></BookingRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Bookings;
