import React from "react";

const Home = () => {
	return (
		<>
			<section style={{ marginTop: "-50px" }}>
				<div className="relative bg-black text-white h-screen flex items-center justify-center">
					{/* Background Image */}
					<div
						className="absolute inset-0 bg-cover bg-center opacity-50"
						style={{ backgroundImage: `url(${"/home.jpg"})` }}
					></div>

					{/* Content */}
					<div className="relative text-center -mt-10">
						{" "}
						{/* Adjust the value of -mt-10 to move up more or less */}
						<h1 className="text-5xl font-bold mb-4">
							A sanctuary of elegance and peace
							<br />
							<span className="text-yellow-700">designed for your ultimate comfort</span>
						</h1>
						<div className="flex justify-center mt-6">
							<button className="bg-yellow-800 text-white px-6 py-2 rounded-full font-semibold mr-4 hover:bg-yellow-600">
								GET STARTED
							</button>
							<button className="text-gray-300 px-6 py-2 rounded-full border border-gray-500 hover:border-white">
								LEARN MORE
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
