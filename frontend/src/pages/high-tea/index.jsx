import React from "react";
import HighTea from "./HighTea";
import { PackageProvider } from "../../contexts/PackageContext";

const index = () => {
	return (
		<>
			<PackageProvider>
				<HighTea />
			</PackageProvider>
		</>
	);
};

export default index;
