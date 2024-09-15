import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="mb-6 flex items-end justify-between gap-4">
						<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Family Meals</h2>
					</div>
					<div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
						{/* product - start */}
						<div>
							<a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
								<Link to="/package/details/slfoods">
									<img
										src="https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Austin Wade"
										className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</Link>
							</a>
							<div className="flex flex-col">
								<a
									href="#"
									className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
								>
									Sri Lankan Foods
								</a>
							</div>
						</div>
						{/* product - end */}
						{/* product - start */}
						<div>
							<a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
								<Link to="/package/details/indianfoods">
									<img
										src="https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by engin akyurt"
										className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</Link>
							</a>
							<div className="flex flex-col">
								<a
									href="#"
									className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
								>
									Indian Foods
								</a>
							</div>
						</div>
						{/* product - end */}
						{/* product - start */}
						<div>
							<a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
								<Link to="/package/details/hightea">
									<img
										src="https://images.unsplash.com/photo-1579372785655-a81b19e99b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Austin Wade"
										className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</Link>
							</a>
							<div className="flex flex-col">
								<a
									href="#"
									className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
								>
									High Tea
								</a>
							</div>
						</div>
						{/* product - end */}
						{/* product - start */}
						<div>
							<a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
								<Link to="/package/details/cakedesserts">
									<img
										src="https://plus.unsplash.com/premium_photo-1661576975510-83273718a6ac?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										loading="lazy"
										alt="Photo by Austin Wade"
										className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
								</Link>
							</a>
							<div className="flex flex-col">
								<a
									href="#"
									className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
								>
									Cake & Desserts
								</a>
							</div>
						</div>
						{/* product - end */}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
