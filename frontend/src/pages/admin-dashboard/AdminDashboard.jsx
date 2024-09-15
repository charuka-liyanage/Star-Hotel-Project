import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../contexts/OrderContex";

const AdminDashboard = () => {
	const { orders } = useContext(OrderContext);

	return (
		<>
			<div>
				{/* Content */}
				<h1 className="text-2xl text-center font-bold mb-4">Admin Dashboard</h1>
				<div className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
						<div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
							<div className="flex justify-between mb-6">
								<div>
									<div className="flex items-center mb-1">
										<div className="text-2xl font-semibold"></div>
									</div>
									<div className="text-sm font-medium text-black">User Details</div>
								</div>
							</div>
							<Link to="/user/admin/user/details" className="text-[#f84525] font-medium text-sm hover:text-red-800">
								View
							</Link>
						</div>
						<div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
							<div className="flex justify-between mb-4">
								<div>
									<div className="flex items-center mb-1">
										<div className="text-2xl font-semibold"></div>
									</div>
									<div className="text-sm font-medium text-black">Package Details</div>
								</div>
							</div>
							<Link className="text-[#f84525] font-medium text-sm hover:text-red-800" to="/user/admin/package/details">
								View
							</Link>
						</div>
						<div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
							<div className="flex justify-between mb-6">
								<div>
									<div className="text-2xl font-semibold mb-1"></div>
									<div className="text-sm font-medium text-black">Order Details</div>
								</div>
							</div>
							<Link to="/user/admin/order/details" className="text-[#f84525] font-medium text-sm hover:text-red-800">
								View
							</Link>
						</div>

						<div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
							<div className="flex justify-between mb-4">
								<div>
									<div className="flex items-center mb-1">
										<div className="text-2xl font-semibold"></div>
									</div>
									<div className="text-sm font-medium text-black">Staff Details</div>
								</div>
							</div>
							<Link className="text-[#f84525] font-medium text-sm hover:text-red-800" to="/user/admin/staff/details">
								View
							</Link>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
						<div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
							<div className="flex justify-between mb-4 items-start">
								<div className="font-medium">Pending Orders</div>
							</div>
							<div className="overflow-hidden">
								<table className="w-full min-w-[540px]">
									{orders
										.filter((elem) => elem.status == "PENDING")
										.map((data) => (
											<tbody>
												<tr>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<div className="flex items-center text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
															{data.name}
														</div>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">{data.foodType}</span>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">{data.username}</span>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">{data.contact}</span>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">
															{data.reserveDate?.slice(0, 10)}
														</span>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">
															{data.reserveTime?.slice(0, 10)}
														</span>
													</td>
													<td className="py-2 px-4 border-b border-b-gray-50">
														<span className="text-[13px] font-medium text-gray-400">{data.reserveType}</span>
													</td>
												</tr>
											</tbody>
										))}
								</table>
							</div>
						</div>
					</div>
				</div>
				{/* End Content */}
			</div>
		</>
	);
};

export default AdminDashboard;
