import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PackageContext from "../../contexts/PackageContext";

const CustomerDashboard = () => {
	const { packages } = useContext(PackageContext);

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-wrap w-full mb-10">
						<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Make your choice</h1>
							<div className="h-1 w-20 bg-yellow-500 rounded" />
						</div>
					</div>
					<div className="flex justify-end">
						<Link to="/user/customer/order/details">
							<button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mr-12">
								My Orders
							</button>
						</Link>
					</div>
					<div className="flex flex-wrap -m-4">
						{packages.map((packageItem) => (
							<div className="xl:w-1/4 md:w-1/2 p-4" key={packageItem.id}>
								<div className="bg-gray-100 p-6 rounded-lg">
									<img
										className="h-40 rounded w-full object-cover object-center mb-6"
										src={packageItem.image}
										alt="content"
									/>
									<h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
										{packageItem.packageType}
									</h3>
									<h2 className="text-lg text-gray-900 font-medium title-font mb-2">{packageItem.name}</h2>
									<p className="leading-relaxed text-base">{packageItem.price}</p>
									<div className="flex items-center">
										<Link
											to={{
												pathname: `/user/customer/order/create/${packageItem._id}`,
												state: { package: packageItem },
											}}
											className="bg-yellow-500 text-white px-3 py-2 rounded-lg mr-4 mt-2"
										>
											Buy Now
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CustomerDashboard;
