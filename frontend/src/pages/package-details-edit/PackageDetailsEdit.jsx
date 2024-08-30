import React, { useContext, useState } from "react";
import PackageContext from "../../contexts/PackageContext";
import { Link, useParams } from "react-router-dom";

const PackageDetailsEdit = () => {
	const { editPackage, Package, setPackage, getPackage } = useContext(PackageContext);

	const handleChange = (e) => {
		setPackage(e.target.value);
	};

	const { id } = useParams();

	getPackage(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPackage = {
			id: id,
			name: e.target.name.value,
			price: e.target.price.value,
			packageType: e.target.packageType.value,
			status: e.target.status.value,
		};

		editPackage(newPackage);
	};

	return (
		<>
			<div className="bg-white border-4 rounded-lg shadow relative m-6">
				<div className="flex items-start justify-between p-5 border-b rounded-t">
					<h3 className="text-xl font-semibold">Update Package</h3>
					<button
						type="button"
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="product-modal"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="p-6 space-y-6">
					<form onSubmit={handleSubmit}>
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									value={Package.name}
									onChange={handleChange}
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
									placeholder="Product Name"
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">
									Price
								</label>
								<input
									type="number"
									id="price"
									value={Package.price}
									onChange={handleChange}
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
									placeholder="price"
								/>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">
									Package Type
								</label>
								<select
									id="packageType"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
									placeholder=""
									value={Package.packageType}
									onChange={handleChange}
								>
									<option
										value="SRILANKAN-FOOD"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										SRILANKAN-FOOD
									</option>
									<option
										value="INDIAN-FOODS"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										INDIAN-FOODS
									</option>
									<option
										value="HIGH-TEA"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										HIGH-TEA
									</option>
									<option
										value="CAKE-DESSERTS"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										CAKE-DESSERTS
									</option>
								</select>
							</div>
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">
									Status
								</label>

								<select
									id="status"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
									placeholder=""
									value={Package.status}
									onChange={handleChange}
								>
									<option
										value="IN-STOCK"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										IN-STOCK
									</option>
									<option
										value="OUT-OF-STOCK"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5"
										placeholder="$2300"
									>
										OUT-OF-STOCK
									</option>
								</select>
							</div>
						</div>
						<div className="p-6 border-t border-gray-200 rounded-b">
							<button
								className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								type="submit"
							>
								Save Package
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default PackageDetailsEdit;
