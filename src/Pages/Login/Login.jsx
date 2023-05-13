import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import google from "../../assets/images/login/google.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
	const [pass, setPass] = useState(false);
	const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const boltu = { email, password };
		console.log(boltu);
		if (password.length >= 8) {
			alert('password must be at least 6 characters')
			return;
		}
		signIn(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				if (user) {
					alert("Successfully Login");
				}
				form.reset();
			})
			.catch((err) => {
				console.log(err);
				alert("Login Failed");
				form.reset();
			});
	};

	const handleGoogleLogin = () => {
		googleSignIn()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				alert("Successfully Login");
				// navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	const handleFacebookLogin = () => {
		facebookSignIn()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				alert("Successfully Login");
				// navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
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
					<p className="text-center my-[20px] text-[18px] font-medium">Or Sign In with</p>
					<div className="flex justify-center items-center mx-auto gap-4">
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<FaFacebookF onClick={handleFacebookLogin} className="text-[#3B5998] rounded-[50%]" />
						</div>
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<FaLinkedinIn className="text-[#0A66C2]" />
						</div>
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<img onClick={handleGoogleLogin} className="w-[17px] h-[17px]" src={google} alt="" />
						</div>
					</div>
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
