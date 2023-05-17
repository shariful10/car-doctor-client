import React, { useContext } from "react";
import google from "../../../assets/images/login/google.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);

	const handleGoogleLogin = () => {
		googleSignIn()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<p className="text-center my-[20px] text-[18px] font-medium">Or Sign In with</p>
			<div className="flex justify-center items-center mx-auto gap-4">
				<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
					<FaFacebookF
						// onClick={handleFacebookLogin}
						className="text-[#3B5998] rounded-[50%]"
					/>
				</div>
				<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
					<FaLinkedinIn className="text-[#0A66C2]" />
				</div>
				<div className="bg-[#F5F5F8] p-[18px] rounded-[50%]">
					<img
						onClick={handleGoogleLogin}
						className="w-[17px] h-[17px]"
						src={google}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default SocialLogin;
