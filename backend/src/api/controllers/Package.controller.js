import PackageService from "../services";

// insert package
export const insertPackage = async (request, response, next) => {
	await PackageService.insertPackage(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// get all packages
export const getAllPackage = async (request, response, next) => {
	await PackageService.getAllPackage("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// get package details
export const getPackageDetails = async (req, res, next) => {
	await PackageService.getPackageDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete package
export const deletePackage = async (request, response, next) => {
	await PackageService.deletePackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Change package status
export const changePackageStatus = async (request, response, next) => {
	await PackageService.changePackageStatus(request.params.id, request.body.status)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update package Details
export const editPackageDetails = async (request, response, next) => {
	await PackageService.editPackageDetails(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
