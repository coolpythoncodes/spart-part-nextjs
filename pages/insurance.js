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
				<h1 className="text-4xl font-bold leading-[62px] text-center">How it works</h1>
				<WorkCards/>
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
