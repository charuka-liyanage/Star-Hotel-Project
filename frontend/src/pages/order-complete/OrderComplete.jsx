import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../contexts/OrderContex";

const OrderComplete = () => {
	const { orders } = useContext(OrderContext);

	return (
		<>
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
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{orders
							.filter((elem) => elem.status == "COMPLETED")

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
										<span className="bg-green-500 font-bold text-white py-1 px-2 rounded-full text-xs">
											{elem.status}
										</span>
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

export default OrderComplete;
