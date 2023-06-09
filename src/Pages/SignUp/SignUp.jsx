import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
	const [pass, setPass] = useState(false);
	const { createUser } = useContext(AuthContext);
	useTitle("Sign Up");

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const boltu = { name, email, password };
		console.log(boltu);

		createUser(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				if (user) {
					alert("Sign Up Successfully");
				}
				form.reset();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="hero my-[130px]">
			<div className="flex gap-[70px]">
				<img src={img} alt="" />
				<form
					onSubmit={handleSignUp}
					className="p-[30px] border border-[#D0D0D0] rounded-[10px]">
					<h1 className="text-center text-[40px] text-[#444444] font-semibold mb-[20px]">
						Sign Up
					</h1>
					<div className="mb-3">
						<label htmlFor="name" className="block mb-2">
							Name
						</label>
						<input
							name="name"
							type="name"
							placeholder="Your Name"
							className="input input-bordered w-[461px] h-[50px]"
						/>
					</div>
					<div className="">
						<label htmlFor="email" className="block mb-2">
							Email
						</label>
						<input
							name="email"
							type="email"
							placeholder="Your Email"
							className="input input-bordered w-[461px] h-[50px]"
						/>
					</div>
					<div className="my-3">
						<label
							htmlFor="password"
							className="mb-2 flex justify-between items-center">
							<p>Password</p>
							<span onClick={() => setPass(!pass)}>
								{pass ? <FaEyeSlash /> : <FaEye />}
							</span>
						</label>
						<input
							name="password"
							type={pass ? "text" : "password"}
							placeholder="Your Password"
							className="input input-bordered w-[461px] h-[50px]"
						/>
					</div>
					<input className="btn-form" type="submit" value="Sign Up" />
					<SocialLogin />
					<p className="text-center text-[#737373] text-[18px] font-normal mt-[30px]">
						Already have an account?
						<span className="font-semibold text-[#FF3811]">
							{" "}
							<Link to="/login">Login</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
