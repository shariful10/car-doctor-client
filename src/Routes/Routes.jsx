import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "/book/:id",
				element: (
					<PrivateRoutes>
						<BookService />
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`https://car-doctor-server-shariful10.vercel.app/services/${params.id}`),
			},
			{
				path: "bookings",
				element: (
					<PrivateRoutes>
						<Bookings />
					</PrivateRoutes>
				),
			},
		],
	},
]);

export default router;
