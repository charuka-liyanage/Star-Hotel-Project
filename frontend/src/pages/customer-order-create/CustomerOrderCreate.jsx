import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import OrderContext from "../../contexts/OrderContex";
import PackageContext from "../../contexts/PackageContext";

const CustomerOrderCreate = () => {
	const { getPackage, Package } = useContext(PackageContext);
	const { addOrder } = useContext(OrderContext);
	const [totalPrice, setTotalPrice] = useState(Package.price);
	const [numberOfPerson, setNumberOfPerson] = useState(1);

	const { id } = useParams();

	getPackage(id);

	const username = localStorage.getItem("name");
	const contact = localStorage.getItem("contact");
	const mail = localStorage.getItem("email");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newOrder = {
			name: e.target.name.value,
			foodType: e.target.foodType.value,
			username: e.target.username.value,
			contact: e.target.contact.value,
			reserveDate: e.target.reserveDate.value,
			reserveTime: e.target.reserveTime.value,
			reserveType: e.target.reserveType.value,
			numberOfPerson: e.target.numberOfPerson.value,
			price: e.target.price.value,
		};
		addOrder(newOrder);
	};

	const handleNumberChange = (e) => {
		const number = e.target.value;
		setNumberOfPerson(number);
		setTotalPrice(number * Package.price); // Multiply price by number of persons
	};

	return (
		<>
			<div className="flex items-center justify-center">
				{/* Author: FormBold Team */}
				<div className="mx-auto w-full max-w-[550px] bg-white">
					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
								Package Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								value={Package.name}
								placeholder="Full Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
								Food Type
							</label>
							<input
								type="text"
								name="foodType"
								id="foodType"
								value={Package.packageType}
								placeholder="Full Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">User Name</label>
							<input
								type="text"
								name="username"
								id="username"
								value={username}
								placeholder="Full Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">Phone Number</label>
							<input
								type="text"
								name="contact"
								id="contact"
								value={contact}
								placeholder="Enter your phone number"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
							<input
								type="email"
								name="email"
								id="email"
								value={mail}
								placeholder="Enter your email"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">Number of Persons</label>
							<input
								type="number"
								name="numberOfPerson"
								id="numberOfPerson"
								value={numberOfPerson}
								onChange={handleNumberChange}
								placeholder="Enter Number of Persons"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
							/>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">Reserve Type</label>
							<select
								name="reserveType"
								id="reserveType"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
							>
								<option value="DINE-IN">DINE-IN</option>
								<option value="TAKE-AWAY">TAKE-AWAY</option>
							</select>
						</div>
						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">Price</label>
							<input
								type="number"
								name="price"
								id="price"
								value={totalPrice} // Show the updated price
								placeholder="Price"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
								readOnly
							/>
						</div>
						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">Date</label>
									<input
										type="date"
										name="reserveDate"
										id="reserveDate"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">Time</label>
									<input
										type="time"
										name="reserveTime"
										id="reserveTime"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-700 focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="hover:shadow-form w-full rounded-md bg-yellow-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
							>
								Make Order
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CustomerOrderCreate;
