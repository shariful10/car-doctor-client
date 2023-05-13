import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import google from "../../assets/images/login/google.svg";

const Login = () => {
	return (
		<div className="hero my-[130px]">
			<div className="flex gap-[70px]">
				<img src={img} alt="" />
				<form className="p-[75px] border border-[#D0D0D0] rounded-[10px]">
					<h1 className="text-center text-[40px] text-[#444444] font-semibold mb-[50px]">
						Login
					</h1>
					<div className="">
						<label htmlFor="email" className="block mb-5">
							Email
						</label>
						<input
							name="email"
							type="email"
							placeholder="Your Email"
							className="input input-bordered w-[461px] h-[60px]"
						/>
					</div>
					<div className="my-7">
						<label htmlFor="password" className="block mb-5">
							Password
						</label>
						<input
							name="password"
							type="password"
							placeholder="Your Password"
							className="input input-bordered w-[461px] h-[60px]"
						/>
					</div>
					<input className="btn-form" type="submit" value="Sign In" />
					<p className="text-center my-[30px] text-[18px] font-medium">Or Sign In with</p>
					<div className="flex justify-center items-center mx-auto gap-4">
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<FaFacebookF className="text-[#3B5998] rounded-[50%]" />
						</div>
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<FaLinkedinIn className="text-[#0A66C2]" />
						</div>
						<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
							<img src={google} alt="" />
						</div>
					</div>
					<p className="text-center text-[#737373] text-[18px] font-normal mt-[50px]">
						Already have an account?
						<span className="font-semibold text-[#FF3811]"> Login</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
