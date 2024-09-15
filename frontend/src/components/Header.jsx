import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const permissionLevel = localStorage.getItem("permissionLevel");

const logout = () => {
	localStorage.removeItem("permissionLevel");
	localStorage.removeItem("uId");
	localStorage.removeItem("email");
	localStorage.removeItem("name");
	localStorage.removeItem("contact");
	localStorage.removeItem("authToken");

	window.location.href = "/";
};

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white" style={{ marginTop: "-50px" }}>
			{" "}
			{/* Adjust the margin-top value as needed */}
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-4">
				<div className="flex lg:flex-1">
					<span className="sr-only"></span>
					<Link to="/">
						<img alt="logo" src="/p5.png" className="h-40 w-40" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<Link className="text-md font-semibold leading-6 text-gray-900" to="/">
						Home
					</Link>
					<Link className="text-md font-semibold leading-6 text-gray-900" to="/protfolio">
						Protfolio
					</Link>
					<Link className="text-md font-semibold leading-6 text-gray-900" to="/services">
						Our Services
					</Link>
					<Link className="text-md font-semibold leading-6 text-gray-900" to="/contactus">
						Contact Us
					</Link>
					{permissionLevel === "ADMIN" && (
						<Link className="text-md font-semibold leading-6 text-gray-900" to="/user/admin">
							Dashboard
						</Link>
					)}

					{permissionLevel === "STAFF" && (
						<Link className="text-md font-semibold leading-6 text-gray-900" to="/user/staff">
							Dashboard
						</Link>
					)}
					{permissionLevel === "CUSTOMER" && (
						<Link className="text-md font-semibold leading-6 text-gray-900" to="/user/customer">
							Dashboard
						</Link>
					)}
				</PopoverGroup>
				{!permissionLevel && (
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link className="text-md font-semibold leading-6 text-gray-900" to="/user/login">
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				)}

				{permissionLevel && (
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link className="text-md font-semibold leading-6 text-gray-900" to="/" onClick={logout}>
							Logout <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				)}
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only"></span>
							<img alt="" src="/p5.png" className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									to="/"
								>
									Home
								</Link>
								<Link
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									to="/protfolio"
								>
									Protfolio
								</Link>
								<Link
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									to="/services"
								>
									Our Services
								</Link>

								<Link
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									to="/contactus"
								>
									Contact Us
								</Link>

								{permissionLevel === "ADMIN" && (
									<Link
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/contactus"
									>
										Dashboard
									</Link>
								)}
							</div>

							<div className="py-6">
								{!permissionLevel && (
									<Link
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/user/login"
									>
										Log in
									</Link>
								)}
							</div>

							<div className="py-6">
								{permissionLevel && (
									<Link
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/"
									>
										Logout
									</Link>
								)}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header;
