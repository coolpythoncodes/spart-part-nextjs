import Head from "next/head";
import Link from "next/link";

const login = () => {
	return (
		<div className="bg-[#e5e5e5] font-mulish">
			<Head>
				<title>Spare Parts - Sign up</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="grid place-items-center h-screen">
				<div className="w-11/12 md:w-[489px]">
					<h1 className="text-center mb-6">Logo</h1>
					<div className="bg-white  pt-7 pl-5 pr-6 pb-14 sm:pl-10 sm:pr-11">
						<h1 className="font-semibold text-5xl text-[#033C49] mb-4">
							Sign up
						</h1>
						<h3 className="mb-8 text-[#033C49] text-lg font-semibold">
							Lets get you all set up and ready to rock!
						</h3>
						<form>
							<div className="border-2 border-[#CCCCCC] flex items-center rounded-md h-14">
								<input
									className="mx-4 w-full text-[#979797] outline-none"
									type="text"
									name=""
									id=""
									placeholder="First Name"
								/>
							</div>
							<div className="border-2 border-[#CCCCCC] flex items-center rounded-md h-14 my-5">
								<input
									className="mx-4 w-full text-[#979797] outline-none"
									type="text"
									name=""
									id=""
									placeholder="Last Name"
								/>
							</div>
							<div className="border-2 border-[#CCCCCC] flex items-center rounded-md h-14 mb-2">
								<input
									className="mx-4 w-full text-[#979797] outline-none"
									type="password"
									name=""
									id=""
									placeholder="Password"
								/>
							</div>

							<button
								className="bg-[#033C49] border border-[#32606C] rounded-md flex justify-center items-center h-12 w-full text-white text-xs mt-6 mb-9"
								type="submit"
							>
								CREATE ACCOUNT
							</button>

							<div className="flex items-center text-sm justify-center">
								<p className="text-[#979797]">Alreadly have an account?</p>
								<Link href="/login">
									<a className="text-[#033C49] font-bold ml-3">Sign in</a>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
