import React, { useContext, useState } from "react";
import PackageContext from "../../contexts/PackageContext";
import { Link } from "react-router-dom";

const SriLankanFoods = () => {
	const { packages } = useContext(PackageContext);
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-wrap w-full mb-10">
						<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Sri Lankan Foods</h1>
							<div className="h-1 w-20 bg-yellow-500 rounded" />
						</div>
					</div>
					<div className="flex flex-wrap -m-4">
						{packages
							.filter((elem) => elem.packageType == "SRILANKAN-FOOD")
							.map((packages) => (
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src={packages.image}
											alt="content"
										/>
										<h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
											{packages.packageType}
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">{packages.name}</h2>
										<p className="leading-relaxed text-base">{packages.price}</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</>
	);
};

export default SriLankanFoods;
