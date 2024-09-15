import React from "react";
import StaffCreate from "./StaffCreate";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {
	return (
		<>
			<UserProvider>
				<StaffCreate />
			</UserProvider>
		</>
	);
};

export default index;
