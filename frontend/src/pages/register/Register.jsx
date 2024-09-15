import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Register = () => {
	const { register } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			name: e.target.name.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contact: e.target.contact.value,
			address: e.target.address.value,
			password: e.target.password.value,
		};
		register(newUser);
	};

	return (
		<div className="font-[sans-serif]" style={{ marginTop: "-50px" }}>
			<div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
				<div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
					<div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
						<form className="space-y-4" onSubmit={handleSubmit}>
							<div className="mb-8">
								<h3 className="text-gray-800 text-3xl font-extrabold">Welcome to Star Hotel</h3>
								<p className="text-gray-500 text-sm mt-4 leading-relaxed">
									Sign up to your account and explore a world of possibilities. Your journey begins here.
								</p>
							</div>
							<div>
								<label className="text-gray-800 text-sm mb-2 block">Full Name</label>
								<div className="relative flex items-center">
									<input
										id="name"
										type="text"
										name="name"
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter full name"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<circle cx={10} cy={7} r={6} />
										<path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
									</svg>
								</div>
							</div>
							<div>
								<label className="text-gray-800 text-sm mb-2 block">Email</label>
								<div className="relative flex items-center">
									<input
										id="email"
										type="email"
										name="email"
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter email address"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 4.25L12 13 5.4 8.25C5.13 8.09 4.79 8.15 4.56 8.38c-.23.23-.29.57-.15.86L12 14l7.59-5.75c.23-.29.17-.63-.15-.86-.23-.23-.57-.17-.84.01z" />
									</svg>
								</div>
							</div>
							<div>
								<label className="text-gray-800 text-sm mb-2 block">NIC or Passport</label>
								<div className="relative flex items-center">
									<input
										id="nic"
										type="text"
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter NIC or Passport"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<path d="M18.92 5.01L12 1 5.08 5.01 12 9.03l6.92-4.02zM4 6.99v8.13l8 4.66 8-4.66V6.99L12 11 4 6.99zM18.08 18L12 21.99 5.92 18 12 14.01l6.08 3.99z" />
									</svg>
								</div>
							</div>
							<div>
								<label className="text-gray-800 text-sm mb-2 block">Contact Number</label>
								<div className="relative flex items-center">
									<input
										id="contact"
										type="number"
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter contact number"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.71 17.29l-1.42-1.42c-2.15 2.15-6.25-.21-4.09-4.09l1.42-1.42C7.05 11.41 6.7 10.54 7.12 9.71c.42-.83 1.57-1.24 2.83-1.25 1.25 0 2.25 1 2.25 2.25 0 1.26-.42 2.42-1.25 2.83-.83.42-1.7.08-2.47-.32l-1.42 1.42c-.8.79-.48 1.78-.09 2.17.42.42 1.41.71 2.17-.09l1.42-1.42c.41.77.83 1.65 1.25 2.47.42.83 1.58 1.24 2.83 1.25 1.25 0 2.25-1 2.25-2.25 0-1.26-.42-2.42-1.25-2.83-.83-.42-1.7-.08-2.47.32l-1.42 1.42c-.78-.41-1.66-.83-2.47-1.25-.83-.42-1.58-1.58-1.25-2.83 0-1.25 1-2.25 2.25-2.25 1.25 0 2.42.41 2.83 1.25.41.78.08 1.66-.32 2.47l-1.42 1.42c.77.41 1.65.83 2.47 1.25.83.42 1.58 1.58 1.25 2.83 0 1.25-1 2.25-2.25 2.25-1.26 0-2.42-.42-2.83-1.25-.42-.83-1.58-1.24-2.83-1.25-1.25 0-2.25 1-2.25 2.25 0 1.26.42 2.42 1.25 2.83z" />
									</svg>
								</div>
							</div>

							<div>
								<label className="text-gray-800 text-sm mb-2 block">Address</label>
								<div className="relative flex items-center">
									<input
										id="address"
										type="text"
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter address"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.71 17.29l-1.42-1.42c-2.15 2.15-6.25-.21-4.09-4.09l1.42-1.42C7.05 11.41 6.7 10.54 7.12 9.71c.42-.83 1.57-1.24 2.83-1.25 1.25 0 2.25 1 2.25 2.25 0 1.26-.42 2.42-1.25 2.83-.83.42-1.7.08-2.47-.32l-1.42 1.42c-.8.79-.48 1.78-.09 2.17.42.42 1.41.71 2.17-.09l1.42-1.42c.41.77.83 1.65 1.25 2.47.42.83 1.58 1.24 2.83 1.25 1.25 0 2.25-1 2.25-2.25 0-1.26-.42-2.42-1.25-2.83-.83-.42-1.7-.08-2.47.32l-1.42 1.42c-.78-.41-1.66-.83-2.47-1.25-.83-.42-1.58-1.58-1.25-2.83 0-1.25 1-2.25 2.25-2.25 1.25 0 2.42.41 2.83 1.25.41.78.08 1.66-.32 2.47l-1.42 1.42c.77.41 1.65.83 2.47 1.25.83.42 1.58 1.58 1.25 2.83 0 1.25-1 2.25-2.25 2.25-1.26 0-2.42-.42-2.83-1.25-.42-.83-1.58-1.24-2.83-1.25-1.25 0-2.25 1-2.25 2.25 0 1.26.42 2.42 1.25 2.83z" />
									</svg>
								</div>
							</div>
							<div>
								<label className="text-gray-800 text-sm mb-2 block">Password</label>
								<div className="relative flex items-center">
									<input
										id="password"
										type="password"
										required
										className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-600"
										placeholder="Enter password"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#bbb"
										stroke="#bbb"
										className="w-[18px] h-[18px] absolute right-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 1C8.69 1 6 3.69 6 7v3H4v10h16V10h-2V7c0-3.31-2.69-6-6-6zm3 10H9V7c0-1.66 1.34-3 3-3s3 1.34 3 3v4zm-3 7c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" />
									</svg>
								</div>
							</div>

							<button type="submit" className="w-full mt-4 py-3 rounded-lg text-sm text-gray-100 bg-yellow-600">
								Create Account
							</button>
						</form>
						<p className="text-sm !mt-8 text-center text-gray-800">
							Already have an account{" "}
							<a
								href="javascript:void(0);"
								className="text-yellow-600 font-semibold hover:underline ml-1 whitespace-nowrap"
							>
								<Link to="/user/login">Login here </Link>
							</a>
						</p>
					</div>
					<div className="hidden md:block">
						<img
							src="/register.jpg"
							alt="Register Illustration"
							className="rounded-lg shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
