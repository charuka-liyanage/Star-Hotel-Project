import React from "react";
import CakeDesserts from "./CakeDesserts";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<CakeDesserts />
			</PackageProvider>
		</>
	);
};

export default index;
