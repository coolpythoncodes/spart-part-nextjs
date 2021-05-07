import Head from "next/head";
import InsuranceCards from "../components/InsuranceCards";
import InsuranceFooter from "../components/InsuranceFooter";
import WorkCards from "../components/WorkCards";

const insurance = () => {
	return (
		<div className="bg-[#e5e5e5] font-mulish">
			<Head>
				<title>Spare Parts - Insurance</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className=" z-50 bg-[#e5e5e5] fixed w-full pb-3
          pt-3"
			>
				<div className="w-11/12 sm:w-[84%] mx-auto flex justify-between items-center">
					<div className="text-2xl font-bold">Logo</div>
					<div className="hidden sm:flex">
						<ul className="hidden sm:flex sm:items-center sm:w-56 sm:mr-8 lg:w-72 lg:mr-24 sm:justify-between">
							<li>
								<a className="text-primary" href="/#">
									Packages
								</a>
							</li>
							<li>
								<a className="text-primary" href="/#">
									About
								</a>
							</li>
							<li>
								<a className="text-primary" href="/#">
									Contact
								</a>
							</li>
						</ul>
						<a
							className="rounded-3xl text-primary border border-black py-3 px-6 sm:mr-4 lg:mr-16"
							href="/#"
						>
							Register
						</a>
						<a
							className="bg-[#F9811E] text-white w-36 flex justify-center h-12 items-center rounded-3xl hover:opacity-80"
							href="/#"
						>
							Login
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

			<div className="w-11/12 flex flex-col pt-20 sm:grid sm:grid-cols-2 sm:items-center lg:w-4/5 mx-auto xl:h-screen">
				<div className="order-1 sm:order-first">
					<h1 className=" text-3xl leading-10 md:text-5xl md:leading-[62px] font-bold mb-7 lg:w-96">
						We help insure your vehicle with our best stations.
					</h1>
					<div className="flex items-center">
						<a
							className="bg-[#0091B3] text-sm text-white flex h-12 w-[169px] rounded-md items-center justify-center hover:opacity-80"
							href="/#"
						>
							Get Started <img className="ml-3" src="/arrow-right.svg" alt="" />
						</a>
						<span className="mx-4 hidden sm:inline">or</span> 
						<a className="hidden sm:inline text-sm py-4 px-3 rounded-md text-[#FE895D] border border-[#FE895D]" href="/#">Make Inquiry</a>
					</div>
				</div>
				<div>
					<img src="/insurance-showcase.png" alt="" />
				</div>
			</div>

			<div className="w-4/5 m-auto py-28 sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
				<div>
					<img src="/car_maintenance.png" alt="" />
				</div>
				<div>
					<h1 className="text-4xl font-bold mb-4 leading-9 mt-8">
						Simple, smarter insurance.
					</h1>
					<p className="text-sm sm:w-[205px]">
						Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
						Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
					</p>
					<a
						className="outline-none h-12 w-32 bg-[#0091B3] flex justify-center items-center rounded-md text-sm text-white mt-6 font-bold hover:opacity-80"
						href="/#"
					>
						See Packages
					</a>
				</div>
			</div>
			{/* how it works section */}
			<div className="w-4/5 m-auto pb-52 sm:w-11/12 lg:w-4/5">
				<h1 className="text-4xl font-bold leading-[62px] text-center">
					How it works
				</h1>
				<WorkCards />
			</div>
			{/* Insurance Package */}
			<div className="w-4/5 m-auto pb-24 sm:pb-60 sm:w-11/12">
				<h1 className="text-2xl font-bold text-center sm:leading-[62px]">
					Our Insurance Packages
				</h1>
				<InsuranceCards />
			</div>
			<InsuranceFooter />
		</div>
	);
};

export default insurance;
