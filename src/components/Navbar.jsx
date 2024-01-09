import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LiaBullhornSolid } from "react-icons/lia";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="relative bg-white border-b-2 lg:ml-64">
			<div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<span>Payments</span>
					<span className="flex items-center justify-center text-xs text-gray-700 pl-4">
						<AiOutlineQuestionCircle />
						<span className="pl-1">How it works</span>
					</span>
				</div>
				<div className="hidden lg:block w-96">
					<div className="w-full flex items-center bg-gray-100 px-4 rounded-md">
						<FaSearch color="gray" />
						<input
							type="text"
							className="rounded-md bg-gray-100 pl-2 py-2 w-full text-sm outline-none"
							placeholder="Search features, tutorials, etc."
						/>
					</div>
				</div>
				<div className="block">
					<button className="rounded-full bg-gray-200 p-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3">
						<LiaBullhornSolid fontSize={18} color="black" />
					</button>
					<button className="rounded-full bg-gray-200 p-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
						<RiArrowDownSFill fontSize={18} color="black" />
					</button>
				</div>
			</div>
			<div className="block lg:hidden px-4 py-2">
				<div className="w-full flex items-center bg-gray-100 px-4 rounded-md">
					<FaSearch color="gray" />
					<input
						type="text"
						className="rounded-md bg-gray-100 pl-2 py-2 w-full text-sm outline-none"
						placeholder="Search features, tutorials, etc."
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
