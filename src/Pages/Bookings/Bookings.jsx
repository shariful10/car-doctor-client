import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import CartBanner from "../BookService/CartBanner";

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState([]);
	const navigate = useNavigate();
	useTitle("My Bookings");

	const url = `https://car-doctor-server-shariful10.vercel.app/bookings?email=${user?.email}`;

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.error) {
					setBookings(data);
				} else {
					navigate("/");
				}
			});
	}, [url, navigate]);

	const handleDelete = (id) => {
		const proceed = confirm("Are you sure you want to delete");
		if (proceed) {
			fetch(`https://car-doctor-server-shariful10.vercel.app/bookings/${id}`, {
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
		fetch(`https://car-doctor-server-shariful10.vercel.app/bookings/${id}`, {
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
			<div>
				<CartBanner>
					<h2 className="text-[45px] text-white font-bold pt-[100px] pl-[124px]">
						Cart Details
					</h2>
					<p className="text-[#FF3811] text-[20px] font-semibold pl-[124px]">
						Home/Product Details
					</p>
				</CartBanner>
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
