const HomeContact = () => {
	return (
		<div className="lg:pt-40 lg:pb-36 sm:flex sm:justify-between lg:justify-evenly">
			<div>
				<img className="mx-auto" src="/contact.png" alt="" />
			</div>
			<div className="sm:w-1/2 lg:w-2/5">
				<h1 className="font-bold mt-8 mb-4 text-3xl">Contact us</h1>
				<form className="">
					<div className="lg:flex lg:items-center lg:space-x-8">
						<input
							className="rounded-md inline-block w-full h-12 px-4 text-[#808080] outline-none"
							type="text"
							placeholder="Full name"
						/>
						<input
							className="rounded-md inline-block w-full h-12 px-4 my-5 text-[#808080] outline-none"
							type="email"
							placeholder="Email"
						/>
					</div>
					<textarea
						className="rounded-md inline-block w-full outline-none px-4 h-28 text-[#808080] py-4 "
						placeholder="Type your inquiry here..."
					></textarea>
                    <button className="bg-secondary text-sm text-white py-4 px-10 rounded-md mt-5 hover:opacity-80" type="submit">Send message</button>
				</form>
			</div>
		</div>
	);
};

export default HomeContact;
