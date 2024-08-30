import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { FaEdit, FaTrash } from "react-icons/fa";

const UsersDetails = () => {
	const { customers, deleteCustomer } = useContext(UserContext);
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<label
				className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
				htmlFor="search-bar"
			>
				<input
					id="search-bar"
					placeholder="your keyword here"
					className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				/>
				<button className="w-full md:w-auto px-6 py-3 bg-yellow-600 border-white text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
					<div className="relative">
						<div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
							<svg
								className="opacity-0 animate-spin w-full h-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
						<div className="flex items-center transition-all opacity-1 valid:">
							<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
						</div>
					</div>
				</button>
			</label>
			<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
				<table className="w-full table-fixed">
					<thead>
						<tr className="bg-gray-100">
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">NIC</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Contact</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Address</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Permission Level</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{customers
							.filter((val) => {
								if (searchTerm === "") {
									return val;
								} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
									return val;
								} else if (val.nic.toLowerCase().includes(searchTerm.toLowerCase())) {
									return val;
								}
							})
							.map((elem) => (
								<tr key="">
									<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.nic}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.contact}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.address}</td>
									<td className="py-4 px-6 border-b border-gray-200">
										<span className="bg-blue-500 font-bold text-white py-1 px-2 rounded-full text-xs">
											{elem.permissionLevel}
										</span>
									</td>

									<td className="py-4 px-6 border-b border-gray-200">
										<button
											className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
											onClick={() => deleteCustomer(elem._id)}
										>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default UsersDetails;
