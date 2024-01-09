import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TiThLargeOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { PiChartBarLight } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { LuMousePointer2 } from "react-icons/lu";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoColorPaletteOutline, IoFlashOutline } from "react-icons/io5";
import Navbar from "./NavBar.jsx";
import Body from "./Body.jsx";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		let bodyContent = document.getElementById("body-main-content");
		bodyContent.addEventListener("click", () => {
			setIsSidebarOpen(false);
		});
	}, []);

	return (
		<>
			<div className="sidebar_container">
				<button
					onClick={toggleSidebar}
					type="button"
					className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span className="sr-only">Open sidebar</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clipRule="evenodd"
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						></path>
					</svg>
				</button>
				<aside
					className={`fixed scroll-smooth top-0 left-0 z-40 w-64 h-screen transition-transform ${
						isSidebarOpen ? "translate-x-0" : "-translate-x-full"
					} lg:translate-x-0`}
					aria-label="Sidebar"
				>
					<div className="h-full px-2 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-1 flex-col justify-between">
						<nav className="space-y-6">
							<div className="text-white rounded-md mx-4">
								<div className="flex items-center justify-between py-2">
									<div className="flex">
										<img
											src="https://scontent.fixc1-8.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX9h7XJ7&_nc_ht=scontent.fixc1-8.fna&oh=00_AfC5ffU6XRmWPOZY9k-FE1WjXC2vHfans5qeVpZvn-D2ww&oe=65A1C07B"
											alt="Nishyan"
											className="h-12 rounded-md mr-4"
										/>
										<div>
											<h1 className="text-lg">Nishyan</h1>
											<a
												href="#"
												className="text-gray-300 underline text-sm"
											>
												Visit store
											</a>
										</div>
									</div>
									<div className="">
										<IoIosArrowDown
											color="white"
											fontSize={20}
										/>
									</div>
								</div>
							</div>
							<ul className="space-y-2 font-medium">
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<FaHome />
										<span className="ms-3">Home</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<HiOutlineClipboardList />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Orders
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<TiThLargeOutline />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Products
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<CiDeliveryTruck />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Delivery
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<CiBullhorn />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Marketing
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<PiChartBarLight />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Analytics
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-700 group"
									>
										<MdPayments />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Payments
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<LuMousePointer2 />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Tools
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<CiDiscount1 />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Discounts
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<FiUsers />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Audience
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<IoColorPaletteOutline />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Appearence
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<IoFlashOutline />
										<span className="flex-1 ms-3 whitespace-nowrap">
											Plugins
										</span>
									</a>
								</li>
							</ul>
						</nav>
						<div className="bg-gray-700 text-white rounded-md px-4 mx-4">
							<div className="flex items-center justify-between py-2">
								<div className="bg-gray-600 p-1 rounded-md">
									<CiWallet color="white" fontSize={30} />
								</div>
								<div className="">
									<p className="text-gray-300">
										Available credits
									</p>
									<h1>222.10</h1>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</div>

			<div id="body-main-content" style={{ backgroundColor: "#fafafa" }}>
				<Navbar />
				<div className="p-4 lg:ml-64">
					<div className="p-4 rounded-lg">
						<Body />
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
