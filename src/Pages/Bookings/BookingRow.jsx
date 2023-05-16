import React from "react";
// import { FaTimesCircle } from "react-icons/fa";
import cross from "../../assets/images/bookings/x.png";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
	const { _id, img, customerName, email, date, price, status, service } = booking;

	return (
		<tr>
			<th>
				<label>
					<img
						onClick={() => handleDelete(_id)}
						className="btn p-0 bg-white hover:bg-white border-none"
						src={cross}
						alt="Image"
					/>
				</label>
			</th>
			<td>
				<div className="avatar">
					<div className="rounded-lg w-[150px] h-[150px]">
						{img && <img src={img} alt="Avatar Tailwind CSS Component" />}
					</div>
				</div>
			</td>
			<td className="text-xl font-semibold">{service}</td>
			<td className="text-xl font-semibold">${price}</td>
			<td className="text-xl font-semibold">{date}</td>
			<th>
				{status === "confirm" ? (
					<span className="font-bold text-green-600">Confirmed</span>
				) : (
					<button
						onClick={() => handleBookingConfirm(_id)}
						className="bg-[#FF3811] text-white py-2 px-4 rounded-lg capitalize font-bold">
						Please Confirm
					</button>
				)}
			</th>
		</tr>
	);
};

export default BookingRow;
