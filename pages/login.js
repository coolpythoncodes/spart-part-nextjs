import Head from "next/head";
import Link from "next/link";

const login = () => {

	return (
		<div className="bg-[#e5e5e5] font-mulish">
			<Head>
				<title>Spare Parts - Login</title>
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
							Sign in
						</h1>
						<h3 className="mb-14 text-[#033C49] text-lg font-semibold">
							Keep track of your insurance
						</h3>
						<form>
							<div className="relative border-2 border-[#033C49] flex items-center rounded-md h-14">
								<p className="bg-white px-3 absolute text-[#033C49] text-sm -top-3 left-4">
									Email
								</p>
								<img className="mx-4" src="/email.png" alt="" />
								<input
									className="text-[#033C49] outline-none"
									type="email"
									name=""
									id=""
									placeholder="Deliws@gmail.com"
								/>
							</div>
							<div className="border-2 border-[#CCCCCC] flex items-center rounded-md h-14 mt-7 mb-2">
								<img className="mx-4" src="/password.png" alt="" />
								<input
									className="text-[#979797] outline-none"
									type="password"
									name=""
									id=""
									placeholder="Password"
								/>
							</div>

							<div className="flex justify-between text-[#979797]">
								<div className="flex items-center">
									<input type="checkbox" name="" id="" />
									<p className="ml-1">remember me</p>
								</div>
								<p>Forgot password?</p>
							</div>

							<button
								className="bg-[#033C49] border border-[#32606C] rounded-md flex justify-center items-center h-12 w-full text-white text-xs mt-6 mb-9"
								type="submit"
							>
								SIGN IN
							</button>

							<div className="flex items-center text-sm justify-center">
								<p className="text-[#979797]">Don't have an account?</p>
								<Link href="/signup">
									<a className="text-[#033C49] font-bold ml-3">Sign up</a>
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

