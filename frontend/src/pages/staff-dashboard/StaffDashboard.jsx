import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../contexts/OrderContex";

const StaffDashboard = () => {
	const { orders, changeStatus } = useContext(OrderContext);
	const [status, setStatus] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("id=" + status);

		const newStatus = {
			id: status,
			status: e.target.status.value,
		};

		changeStatus(newStatus);
		window.location.reload();
	};

	return (
		<>
			<div className="flex justify-end mt-4">
				<Link to="/user/staff/order/complete">
					<button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mr-12">
						Complete Orders
					</button>
				</Link>
			</div>

			<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
				<table className="w-full table-fixed">
					<thead>
						<tr className="bg-gray-100">
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Food Type</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">User Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Contact</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Reserve Date</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Reserve Time</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Reserve Type</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Number of Persons</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Price</th>
							<th className="w-1/3 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
							
						</tr>
					</thead>
					<tbody className="bg-white">
						{orders
							.filter((elem) => elem.status == "PENDING")

							.map((elem) => (
								<tr key="">
									<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
									<td className="py-4 px-6 border-b border-gray-200">{elem.foodType}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.username}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.contact}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.reserveDate?.slice(0, 10)}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.reserveTime?.slice(0, 10)}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.reserveType}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.numberOfPerson}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.price}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">
										{status === elem._id ? (
											<div>
												<form onSubmit={handleSubmit}>
													<select
														className="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
														name="status"
														id="status"
														defaultValue={elem.status}
													>
														<option value="PENDING" className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
															PENDING
														</option>
														<option
															value="COMPLETED"
															className="bg-green-500 text-white py-1 px-2 rounded-full text-xs"
														>
															COMPLETED
														</option>
													</select>
													<span className="ml-4">
														<button
															className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs"
															type="submit"
															value="Submit"
														>
															change Status
														</button>
													</span>
												</form>
											</div>
										) : (
											<div>
												<span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">{elem.status}</span>

												<button
													className="bg-red-500 text-white py-1 px-2 rounded-full text-xs ml-4"
													onClick={() => setStatus(elem._id)}
												>
													change
												</button>
											</div>
										)}
									</td>

									<td className="py-4 px-6 border-b border-gray-200"></td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default StaffDashboard;
