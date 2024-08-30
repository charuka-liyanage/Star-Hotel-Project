import React, { useContext, useState, useEffect, useRef } from "react";
import PackageContext from "../../contexts/PackageContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Chart, registerables } from "chart.js";
import html2canvas from "html2canvas";

// Register chart.js components
Chart.register(...registerables);

const PackageDetails = () => {
	const { packages, deletePackage } = useContext(PackageContext);
	const [searchTerm, setSearchTerm] = useState("");
	const chartRef = useRef(null);
	const chartInstanceRef = useRef(null); // To store chart instance

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");

			// Destroy existing chart instance before creating a new one
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}

			// Extracting data for chart
			const packageNames = [];
			const packagePrices = [];

			packages.forEach((pkg) => {
				packageNames.push(pkg.name); // Add name to chart
				packagePrices.push(pkg.price);
			});

			// Creating the chart
			chartInstanceRef.current = new Chart(ctx, {
				type: "bar",
				data: {
					labels: packageNames, // Display names in chart
					datasets: [
						{
							label: "Price",
							data: packagePrices,
							backgroundColor: "rgba(75, 192, 192, 0.6)",
							borderColor: "rgba(75, 192, 192, 1)",
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
		}
	}, [packages]);

	// Function to generate and download the PDF report
	const generatePDFReport = () => {
		const doc = new jsPDF();
		doc.text("Package Report", 14, 16);

		// Capture chart as image
		html2canvas(document.querySelector("#chart")).then((canvas) => {
			const chartImage = canvas.toDataURL("image/png");

			// Add the chart image to the PDF
			doc.addImage(chartImage, "PNG", 14, 30, 180, 80);

			// Add table with package details below the chart
			const tableColumn = ["Name", "Package Type", "Price", "Status"]; // Include name in table header
			const tableRows = [];

			packages.forEach((pkg) => {
				const packageData = [
					pkg.name, // Include name in table data
					pkg.packageType,
					pkg.price,
					pkg.status === "IN-STOCK" ? "In Stock" : "Out of Stock",
				];
				tableRows.push(packageData);
			});

			// Adding table to the PDF
			doc.autoTable({
				head: [tableColumn],
				body: tableRows,
				startY: 120, // Position the table below the chart
			});

			// Save the PDF
			doc.save("package_report_with_chart.pdf");
		});
	};

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
					Search
				</button>
			</label>

			<div className="flex justify-end mt-4">
				<Link to="/user/admin/package/create">
					<button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mr-12">
						Create Package
					</button>
				</Link>

				{/* Generate Report Button */}
				<button
					onClick={generatePDFReport}
					className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
				>
					Generate Report
				</button>
			</div>

			{/* Chart Container */}
			<div id="chart" className="mt-8">
				<canvas ref={chartRef} />
			</div>

			<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
				<table className="w-full table-fixed">
					<thead>
						<tr className="bg-gray-100">
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Image</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Price</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Package Type</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{packages
							.filter((val) => {
								if (searchTerm === "") {
									return val;
								} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
									return val;
								} else if (val.status.toLowerCase().includes(searchTerm.toLowerCase())) {
									return val;
								}
							})
							.map((elem) => (
								<tr key={elem._id}>
									<td className="py-4 px-6 border-b border-gray-200">
										<img
											src={elem.image}
											alt="image"
											style={{ width: "100px", height: "100px" }}
											className="object-cover"
										/>
									</td>
									<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.price}</td>
									<td className="py-4 px-6 border-b border-gray-200">
										<span className="bg-blue-500 font-bold text-white py-1 px-2 rounded-full text-xs">
											{elem.packageType}
										</span>
									</td>
									<td className="py-4 px-6 border-b border-gray-200">
										{elem.status === "IN-STOCK" ? (
											<span className="bg-green-500 font-bold text-white py-1 px-2 rounded-full text-xs">
												{elem.status}
											</span>
										) : (
											<span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">{elem.status}</span>
										)}
									</td>
									<td className="py-4 px-6 border-b border-gray-200">
										<Link to={`/user/admin/package/edit/${elem._id}`}>
											<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
												<FaEdit />
											</button>
										</Link>
									</td>
									<td className="py-4 px-6 border-b border-gray-200">
										<button
											className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
											onClick={() => deletePackage(elem._id)}
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

export default PackageDetails;
