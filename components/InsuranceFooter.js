import Link from "next/link";
import styled from "styled-components";

const InsuranceFooter = () => {
	return (
		<footer className=" bg-[#0091B2] pt-12 lg:pt-24 text-white pb-10">
			<div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
				{/* logo */}
				<div className="order-3 flex items-center justify-between lg:flex-col lg:order-none">
					<div className="text-2xl self-start font-bold lg:mb-7">Logo</div>
					<div className="flex space-x-4">
						<a href="/#">
							<img src="/facebook-2.png" alt="" />
						</a>
						<a href="/#">
							<img src="/instagram-2.png" alt="" />
						</a>
						<a href="/#">
							<img src="/twitter-2.png" alt="" />
						</a>
					</div>
				</div>

				{/* footer links */}
				<div className="flex justify-between order-2 my-16 lg:my-0 lg:space-x-20 lg:order-none">
					<div>
						<h3 className="text-sm font-extrabold mb-5">Contact</h3>
						<ul>
							<li className="mb-5">
								<a className="text-sm font-normal" href="/#">
									About
								</a>
							</li>
							<li>
								<a className="text-sm font-normal" href="/#">
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-extrabold mb-5">Company</h3>
						<ul>
							<li className="mb-5">
								<Link href="/insurance">
									<a className="text-sm font-normal" href="/#">
										Insurance
									</a>
								</Link>
							</li>
							<li className="mb-5">
								<a className="text-sm font-normal" href="/#">
									Service Stations
								</a>
							</li>
							<li>
								<a className="text-sm font-normal" href="/#">
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-extrabold mb-5">Help</h3>
						<ul>
							<li>
								<a className="text-sm font-normal" href="/#">
									Support
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Form */}
				<FooterForm className="relative order-1 lg:w-80 lg:order-none">
					<h1 className="text-4xl font-bold leading-[62px] flex justify-end">
						Inquire
					</h1>
					<form className="">
						<input
							className="w-full text-sm pl-12 text-white rounded-md bg-primary h-14 outline-none mb-7 focus:border-white focus:border-2"
							type="email"
							name=""
							id=""
							placeholder="Email"
						/>
						<input
							className="w-full text-sm pl-12 text-white rounded-md bg-primary h-14 outline-none mb-7 focus:border-white focus:border-2"
							type="text"
							name=""
							id=""
							placeholder="Full name"
						/>
						<textarea
							className="w-full rounded-md bg-primary pl-12 text-white h-52 pt-5 outline-none focus:border-white focus:border-2"
							name=""
							id=""
							placeholder="type your message here"
						></textarea>
						<button
							className="border-white border-2 w-full rounded-md h-12 uppercase mt-5"
							type="submit"
						>
							Send message
						</button>
					</form>
				</FooterForm>
			</div>
		</footer>
	);
};

export default InsuranceFooter;

const FooterForm = styled.div`
	&:before {
		content: "";
		position: absolute;
		width: 1px;
		height: 310px;
		background: #fff;
		top: 120px;
		left: -5vw;
	}
`;
