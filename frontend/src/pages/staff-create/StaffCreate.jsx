import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const StaffCreate = () => {
	const { register } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			name: e.target.name.value,
			email: e.target.email.value,
			nic: e.target.nic.value,
			contact: e.target.contact.value,
			address: e.target.address.value,
			permissionLevel: e.target.permissionLevel.value,
			password: e.target.password.value,
		};
		register(newUser);
	};

	return (
		<>
			<div className=" bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
					<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Create a new account</h2>
				</div>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form onSubmit={handleSubmit}>
							<div>
								<label className="block text-sm font-medium leading-5  text-gray-700">Name</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="name"
										placeholder="Name"
										type="text"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-yellow focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
									<div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
										<svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
								</div>
							</div>

							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="email"
										placeholder="Email address"
										type="email"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
									<div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
										<svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">NIC</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="nic"
										placeholder="NIC"
										type="text"
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
									<div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
										<svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">Contact</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										id="contact"
										type="number"
										placeholder="Contact"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">Address</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										id="address"
										type="text"
										placeholder="Address"
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">Permission Level</label>
								<div className="mt-1 rounded-md shadow-sm">
									<select
										id="permissionLevel"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									>
										<option value="STAFF">STAFF</option>
										<option value="ADMIN">ADMIN</option>
									</select>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">Password</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										id="password"
										type="password"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-yellow-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
							<div className="mt-6">
								<span className="block w-full rounded-md shadow-sm">
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-indigo active:bg-yellow-700 transition duration-150 ease-in-out"
									>
										Create account
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default StaffCreate;
