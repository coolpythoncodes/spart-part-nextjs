import Link from "next/link";

const HomeFooter = () => {
	return (
		<footer className="py-20 sm:flex sm:justify-between">
			<div>
				<h1 className="text-2xl font-bold">Logo</h1>
				<ul className="flex space-x-5 mt-3 ">
					<li>
						<a href="/#">
							<img src="/twitter.png" alt="" />
						</a>
					</li>
					<li>
						<a href="/#">
							<img src="/facebook.png" alt="" />
						</a>
					</li>
					<li>
						<a href="/#">
							<img src="/instagram.png" alt="" />
						</a>
					</li>
				</ul>
			</div>
			<div className="flex mt-5 justify-between sm:mt-0 sm:space-x-7 lg:space-x-20 xl:space-x-40 ">
				<div>
					<h3 className="font-extrabold mb-5">Contact</h3>
					<ul>
						<li className="mb-3">
							<a className="text-sm" href="/#">
								About
							</a>
						</li>
						<li className="mb-3">
							<a className="text-sm" href="/#">
								Careers
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-extrabold mb-5">Company</h3>
					<ul>
						<li className="mb-3">
							<Link href="/insurance">
								<a className="text-sm" href="/#">
									Insurance
								</a>
							</Link>
						</li>
						<li className="mb-3">
							<a className="text-sm" href="/#">
								Service Stations
							</a>
						</li>
						<li className="mb-3">
							<a className="text-sm" href="/#">
								Careers
							</a>
						</li>
						<li className="mb-3">
							<a className="text-sm" href="/#">
								Track
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-extrabold mb-5">Help</h3>
					<ul>
						<li>
							<a className="text-sm" href="/#">
								Support
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* <div> */}
			<form className="flex pl-5 h-12  bg-white rounded-3xl sm:w-60 lg:w-80 ">
				<input
					className="w-3/4 text-xs ml-auto rounded-tl-3xl rounded-bl-3xl text-[#808080] outline-none pr-5 lg:w-full"
					type="email"
					placeholder="Type your mail here"
				/>
				<button
					className="w-32 uppercase text-xs text-white bg-primary rounded-tr-3xl rounded-br-3xl rounded-bl-3xl font-bold"
					type="submit"
				>
					Subcribe
				</button>
			</form>
			{/* </div> */}
		</footer>
	);
};

export default HomeFooter;
