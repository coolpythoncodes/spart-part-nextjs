const HomeNavbar = () => {
	return (
		<div
			className=" z-50 bg-[#e5e5e5] fixed w-full pb-3
          pt-3"
		>
			<div className="w-11/12 sm:w-[84%] mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">Logo</div>
				<div className="hidden sm:flex">
					<ul className="hidden sm:flex sm:items-center sm:w-56 sm:mr-16 lg:w-72 lg:mr-24 sm:justify-between">
						<li>
							<a className="text-primary" href="/#">
								Company
							</a>
						</li>
						<li>
							<a className="text-primary" href="/#">About</a>
						</li>
						<li>
							<a className="text-primary" href="/#">Support</a>
						</li>
					</ul>
					<a
						className="bg-[#F9811E] text-white w-36 flex justify-center h-12 items-center rounded-3xl"
						href="/#"
					>
						Download App
					</a>
				</div>
				<div className="sm:hidden">
					<div className="w-8 h-[0.2rem] mb-[0.4rem] bg-black"></div>
					<div className="w-8 h-[0.2rem] mb-[0.4rem] bg-black"></div>
					<div className="w-8 h-[0.2rem] bg-black"></div>
					{/* <div className="w-8 h-1 mb-2 bg-black"></div>
                <div className="w-8 h-1 mb-2 bg-black"></div> */}
				</div>
			</div>
		</div>
	);
};

export default HomeNavbar;
