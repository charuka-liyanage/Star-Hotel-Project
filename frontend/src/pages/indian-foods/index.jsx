import React from "react";
import IndianFoods from "./IndianFoods";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<IndianFoods />
			</PackageProvider>
		</>
	);
};

export default index;
