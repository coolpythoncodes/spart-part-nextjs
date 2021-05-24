const HomeShowCase = () => {
	return (
		<div className="w-11/12 pt-16 mx-auto sm:flex sm:mx-0 sm:ml-auto sm:justify-between sm:h-auto sm:mb-20 lg:h-auto xl:h-screen">
			{/* left */}
			<div className=" sm:w-[350px] xl:w-[445px]">
				<div>
					<h1
						style={{ lineHeight: "62px" }}
						className="relative text-5xl font-black text-primary pt-8 sm:pt-16 mb-7 sm:relative "
					>
						Buy spare parts at your ease
                        <img className="hidden sm:block w-[230px] sm:absolute sm:bottom-11 sm:left-24 " src="/curve.png" alt=""/>
					</h1>
					<p className="text-sm text-primary leading-6 font-normal">
						Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
						Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
						Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
					</p>
				</div>

				{/* App download button */}
				<div className="flex mt-7 justify-evenly  sm:justify-start">
					<a
						style={{ borderRadius: "32px" }}
						href="/#"
						className="flex pl-4 w-36 items-center py-2 bg-black hover:opacity-80 sm:mr-8"
					>
						<img src="/playstore.png" alt="" />
						<p className="text-white font-extrabold text-xs pl-2">
							<span className="font-thin block">Get it on</span> PlayStore
						</p>
					</a>
					<a
						style={{ borderRadius: "32px" }}
						href="/#"
						className="flex pl-2 w-40 items-center py-2 bg-black hover:opacity-80"
					>
						<img src="/applestore.png" alt="" />
						<p className="text-white font-extrabold text-xs pl-2">
							<span className="font-thin block">Download on the</span>{" "}
							Applestore
						</p>
					</a>
				</div>
				<div className="flex w-full mx-auto mt-12 mb-24 border border-[#033C49] py-4  rounded-lg  justify-evenly sm:mx-0 sm:w-[444px] sm:mt-20">
					<div>
						<img className="mx-auto" src="/icon.png" alt="" />
						<h1 className="text-4xl text-center font-extrabold text-primary">
							100+
						</h1>
						<h5 className="text-primary text-center text-lg font-extrabold">
							USERS
						</h5>
					</div>
					<div>
						<img className="mx-auto" src="/icon.png" alt="" />
						<h1 className="text-4xl text-center font-extrabold text-primary">
							1000+
						</h1>
						<h5 className="text-primary text-center text-lg font-extrabold">
							PRODUCTS
						</h5>
					</div>
					<div>
						<img className="mx-auto" src="/icon.png" alt="" />
						<h1 className="text-4xl text-center font-extrabold text-primary">
							200+
						</h1>
						<h5 className="text-primary text-center text-lg font-extrabold">
							STATIONS
						</h5>
					</div>
				</div>
			</div>
			{/* Right */}
			<div className="hidden sm:block sm:h-full ">
				{/* <img className=" sm:h-full border border-red-700" src="/showcaseRight.png" alt="" /> */}
				<img className="sm:h-full" src="/showcaseRight-2.png" alt="" />
			</div>
		</div>
	);
};

export default HomeShowCase;
