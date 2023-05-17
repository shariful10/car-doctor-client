import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
	const [pass, setPass] = useState(false);
	const { signIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	useTitle('Login')

	const from = location.state?.from?.pathname || "/";

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				alert("Login Failed");
				form.reset();
			});
	};

	return (
		<div className="hero my-[130px]">
			<div className="flex gap-[70px]">
				<img src={img} alt="" />
				<form
					onSubmit={handleLogin}
					className="p-[30px] border border-[#D0D0D0] rounded-[10px]">
					<h1 className="text-center text-[40px] text-[#444444] font-semibold mb-[20px]">
						Login
					</h1>
					<div>
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
					<input className="btn-form" type="submit" value="Login" />
					<SocialLogin />
					<p className="text-center text-[#737373] text-[18px] font-normal mt-[30px]">
						Don't have an account?
						<span className="font-semibold text-[#FF3811]">
							{" "}
							<Link to="/signup">Sign Up</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
