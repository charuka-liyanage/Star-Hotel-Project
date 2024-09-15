import PackageModel from "../models/Package.model";

// Insert Package
export const insertPackage = async (data) => {
	return await PackageModel.create(data)
		.then(async (package_data) => {
			await package_data.save();
			return package_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all package
export const getAllPackage = async () => {
	return await PackageModel.find({})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get one package details
export const getPackageDetails = async (packageId) => {
	return await PackageModel.findById(packageId)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete package
export const deletePackage = async (packageId) => {
	return await PackageModel.findByIdAndDelete(packageId)
		.then((Package) => {
			if (Package) {
				return Package;
			} else {
				throw new Error("Package Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Change package status
export const changePackageStatus = async (userId, status) => {
	return await PackageModel.findByIdAndUpdate(userId, { status: status })
		.then(async (user) => {
			if (user) {
				return {
					message: "Package Status Changed",
					status: status,
				};
			} else {
				throw new Error("Course not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// edit package details
export const editPackageDetails = async (packageId, Package) => {
	return await PackageModel.findByIdAndUpdate(packageId, Package, { new: true })
		.then((Package) => {
			return Package;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
