import React from "react";

const Protfolio = () => {
	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-4" style={{ marginTop: "-60px" }}>
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					{/* text - start */}
					<div className="mb-10 md:mb-10">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-4 lg:text-3xl">PROTFOLIO</h2>
						<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							Experience Luxury & Comfort Like Never Before – Welcome to Star Hotel
						</p>
					</div>
					{/* text - end */}
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p1.png"
								loading="lazy"
								alt="Photo by Minh Pham"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p2.jpg"
								loading="lazy"
								alt="Photo by Lorenzo Herrera"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p3.jpeg"
								loading="lazy"
								alt="Photo by Magicle"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
					</div>
				</div>

				<div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-8">
					{/* text - start */}

					{/* text - end */}
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p4.jpg"
								loading="lazy"
								alt="Photo by Minh Pham"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p5.png"
								loading="lazy"
								alt="Photo by Lorenzo Herrera"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p6.jpg"
								loading="lazy"
								alt="Photo by Magicle"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
					</div>
				</div>

				<div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-8">
					{/* text - start */}

					{/* text - end */}
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p7.jpg"
								loading="lazy"
								alt="Photo by Minh Pham"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p8.jpg"
								loading="lazy"
								alt="Photo by Lorenzo Herrera"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
						{/* image - start */}
						<a className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
							<img
								src="/p9.jpg"
								loading="lazy"
								alt="Photo by Magicle"
								className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
						</a>
						{/* image - end */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Protfolio;
